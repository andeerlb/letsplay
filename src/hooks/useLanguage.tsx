import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/index';
import { messages as ptMessages } from '@locales/pt/messages';
import { messages as enMessages } from '@locales/en/messages';
import { i18n, Messages } from '@lingui/core';
import { Language, setLanguage } from '@store/slices/settingSlice';
import { useEffect } from 'react';

export const LANGUAGE_MAP: Record<Language, Messages> = {
  pt: ptMessages,
  en: enMessages,
};

export const useLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.setting.language);

  useEffect(() => {
    i18n.loadAndActivate({
      locale: language,
      messages: LANGUAGE_MAP[language],
    });
  }, [language]);

  const changeLanguage = (languageParam: Language) => {
    dispatch(setLanguage(languageParam));

  }

  return {
    language,
    changeLanguage,
  };
};
