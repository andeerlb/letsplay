import { DarkTheme, DEFAULT_LANGUAGE, LANGUAGE_OPTIONS } from '@constants/theme';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { settingsStorage } from '@storage/storage';
import type { Settings } from '@tps/api';
import type { Language, Layout, ThemeDefinition } from '@tps/theme';
import { getThemeBaseOnScheme } from '@utils/theme';
import { NativeModules, Platform, useColorScheme } from 'react-native';

const getDeviceLanguage = async (): Promise<Language> => {
  let locale: string | undefined;

  if (NativeModules.DeviceLocale) {
    locale = await NativeModules.DeviceLocale.getLanguage();
  } else if (Platform.OS === 'ios' && NativeModules.SettingsManager) {
    locale =
      NativeModules.SettingsManager.settings?.AppleLocale ||
      NativeModules.SettingsManager.settings?.AppleLanguages?.[0];
  }

  if (locale) {
    locale = locale.split(/[-_]/)[0];
  }

  const supportedLanguages = LANGUAGE_OPTIONS.map(opt => opt.value);
  return supportedLanguages.includes(locale as Language)
    ? (locale as Language)
    : DEFAULT_LANGUAGE;
};

export const loadSettings = createAsyncThunk(
  'setting/load',
  async () => {
    const stored = settingsStorage.get();
    if (stored) {
      return stored;
    }

    const layout = useColorScheme() || 'dark';
    const theme = getThemeBaseOnScheme(layout);
    const language = await getDeviceLanguage();

    return {
      layout: layout,
      language: language,
      theme: theme
    };
  }
);

type SettingSliceType = { theme: ThemeDefinition } & Settings;

const initialState: SettingSliceType = {
  layout: 'system',
  language: DEFAULT_LANGUAGE,
  theme: DarkTheme,
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      if (!action.payload) return;
      state.language = action.payload;
      settingsStorage.set(state);
    },
    setLayout: (state, action: PayloadAction<Layout>) => {
      if (!action.payload) return;
      state.layout = action.payload;
      state.theme = getThemeBaseOnScheme(action.payload)
      settingsStorage.set(state);
    },
    setSettings: (state, action: PayloadAction<Settings>) => {
      if (!action.payload) return;
      const newSettings: SettingSliceType = {
        ...action.payload,
        theme: getThemeBaseOnScheme(action.payload.layout)
      };
      state = newSettings;
      settingsStorage.set(state);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadSettings.fulfilled, (_, action) => action.payload)
  },
});

export const { setLanguage, setLayout, setSettings } = settingSlice.actions;
export default settingSlice.reducer;
