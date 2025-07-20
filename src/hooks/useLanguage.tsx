import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Language, setLocale } from '@store/slices/languageSlice';
import { i18n } from '@lingui/core';
import { messages as ptMessages } from '@locales/pt/messages';
import { messages as enMessages } from '@locales/en/messages';

const LANGUAGE_MAP: Record<Language, any> = {
  pt: ptMessages,
  en: enMessages,
};

export const useLanguage = () => {
  const dispatch = useDispatch();
  const locale = useSelector((state: RootState) => state.language.locale);
  const [ready, setReady] = useState(false);

  useEffect(() => {

    const activate = async () => {
      await i18n.loadAndActivate({
        locale,
        messages: LANGUAGE_MAP[locale],
      });
      setReady(true);
    };
    setReady(false);
    activate();
  }, [locale]);

  const changeLanguage = (lang: Language) => {
    dispatch(setLocale(lang));
  };

  return {
    locale,
    changeLanguage,
    ready,
  };
};
