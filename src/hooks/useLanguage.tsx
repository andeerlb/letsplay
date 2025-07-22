import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { messages as ptMessages } from '@locales/pt/messages';
import { messages as enMessages } from '@locales/en/messages';
import { i18n, Messages } from '@lingui/core';
import { Language, setLanguage } from '@store/slices/settingSlice';
import { useCallback } from 'react';

export const LANGUAGE_MAP: Record<Language, Messages> = {
  pt: ptMessages,
  en: enMessages,
};

export const useLanguage = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.setting.language);

  const changeLanguage = useCallback((languageParam: Language) => {    
    dispatch(setLanguage(languageParam));
    i18n.loadAndActivate({
      locale: language,
      messages: LANGUAGE_MAP[languageParam],
    });
  }, [dispatch, language]);

  return {
    language,
    changeLanguage,
  };
};
