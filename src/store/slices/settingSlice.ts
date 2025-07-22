import { AppTheme, LANGUAGE_OPTIONS } from '@constants/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NativeModules, Platform } from 'react-native';

export type Layout = 'light' | 'dark' | 'system';
export type Language = 'pt' | 'en';

export type SettingState = {
    layout: Layout
    language: Language;
    theme?: AppTheme
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

const setttingSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<AppTheme>) => {
      state.theme = action.payload;
    },
    setLayout: (state, action: PayloadAction<Layout>) => {
      state.layout = action.payload;
    },
  },
});

export const { setLanguage, setTheme, setLayout } = setttingSlice.actions;
export default setttingSlice.reducer;
