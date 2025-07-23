import { LANGUAGE_OPTIONS } from '@constants/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NativeModules, Platform } from 'react-native';

export type Layout = 'light' | 'dark' | 'system';
export type Language = 'pt' | 'en';

export type SettingState = {
  layout: Layout;
  language: Language;
};

const getDeviceLanguage = (): Language => {
  let locale: string = 'pt';

  if (Platform.OS === 'ios') {
    locale =
      NativeModules.SettingsManager?.settings?.AppleLocale ||
      NativeModules.SettingsManager?.settings?.AppleLanguages?.[0];
  } else if (Platform.OS === 'android') {
    locale =
      NativeModules.I18nManager?.localeIdentifier ||
      NativeModules.I18nManager?.locale;
  }

  if (locale) {
    locale = locale.split(/[-_]/)[0];
  }

  const supportedLanguages = LANGUAGE_OPTIONS.map(opt => opt.value);
  return supportedLanguages.includes(locale)
    ? (locale as Language)
    : 'pt';
};

const initialState: SettingState = {
  language: getDeviceLanguage(),
  layout: 'system',
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      return state;
    },
    setLayout: (state, action: PayloadAction<Layout>) => {
      state.layout = action.payload;
      return state;
    },
  },
});

export const { setLanguage, setLayout } = settingSlice.actions;
export default settingSlice.reducer;
