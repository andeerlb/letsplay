import { i18n, Messages } from '@lingui/core';
import { messages as enMessages } from '@locales/en/messages';
import { messages as ptMessages } from '@locales/pt/messages';
import { RootState } from '@store/index';
import { setLanguage } from '@store/slices/settingSlice';
import { Language } from '@tps/theme';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const LANGUAGE_MAP: Record<Language, Messages> = {
  pt: ptMessages,
  en: enMessages,
};

export const useLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.setting.language);

  useEffect(() => {
    console.log(language);
    if (!language) return;
    i18n.loadAndActivate({
      locale: language,
      messages: LANGUAGE_MAP[language],
    });
  }, [language]);

  const changeLanguage = useCallback((languageParam: Language) => {
    dispatch(setLanguage(languageParam));
  }, [dispatch]);


  return {
    language,
    changeLanguage,
  };
};
