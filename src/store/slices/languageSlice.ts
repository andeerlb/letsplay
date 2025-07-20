import { LANGUAGE_OPTIONS } from '@constants/theme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NativeModules, Platform } from 'react-native';

export type Language = 'pt' | 'en';

export type LanguageState = {
  locale: Language;
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

const initialState: LanguageState = {
  locale: getDeviceLanguage(),
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Language>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = languageSlice.actions;
export default languageSlice.reducer;
