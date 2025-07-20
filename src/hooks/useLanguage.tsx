import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Language, setLocale } from '@store/slices/languageSlice';
import { i18n } from '@lingui/core';
import { messages as ptMessages } from '@locales/pt/messages';
import { messages as enMessages } from '@locales/en/messages';
import { Platform, NativeModules } from 'react-native';

const LANGUAGE_MAP: Record<Language, any> = {
  pt: ptMessages,
  en: enMessages,
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

  return locale === 'pt' || locale === 'en' ? (locale as Language) : 'en';
};

export const useLanguage = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.language.locale);

  useEffect(() => {
    const activate = async () => {
      await i18n.loadAndActivate({
        locale,
        messages: LANGUAGE_MAP[locale],
      });
    };
    activate();
  }, [locale]);

  const change = (lang: Language) => {
    dispatch(setLocale(lang));
  };

  return {
    locale,
    change,
    setDeviceDefault: () => dispatch(setLocale(getDeviceLanguage())),
  };
};
