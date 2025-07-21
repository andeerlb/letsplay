import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Language, setLocale } from '@store/slices/languageSlice';
import { messages as ptMessages } from '@locales/pt/messages';
import { messages as enMessages } from '@locales/en/messages';
import { i18n, Messages } from '@lingui/core';

export const LANGUAGE_MAP: Record<Language, Messages> = {
  pt: ptMessages,
  en: enMessages,
};

export const useLanguage = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.language.locale);

  const changeLanguage = (language: Language) => {
    dispatch(setLocale(language));
    i18n.loadAndActivate({
      locale: language,
      messages: LANGUAGE_MAP[language],
    });
  };

  return {
    locale,
    changeLanguage,
  };
};
