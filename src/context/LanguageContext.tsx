import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { messages as ptMessages } from '@locales/pt/messages';
import { messages as enMessages } from '@locales/en/messages';
import { i18n } from '@lingui/core';

export type Language = 'pt' | 'en';

type LanguageContextType = {
  locale: string;
  change: (newLanguage: Language) => void;
};

const LANGUAGE_MAP: Record<Language, typeof ptMessages | typeof enMessages> = {
  pt: ptMessages,
  en: enMessages,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>('pt');
  const [messages, setMessages] = useState<Record<Language, typeof ptMessages | typeof enMessages>>(LANGUAGE_MAP.pt);

  const change = (newLanguage: Language) => {
    setMessages(LANGUAGE_MAP[newLanguage]);
    setLocale(newLanguage);
  };

  useEffect(() => {
    const loadLocale = async () => {
      await i18n.loadAndActivate({
        locale: locale,
        messages: messages,
      });
    };
    loadLocale();
  }, [locale, messages]);

  return (
    <LanguageContext.Provider value={{ locale, change }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
