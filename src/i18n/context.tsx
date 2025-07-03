import React, { createContext, useContext, type ReactNode } from 'react';
import { useQueryState } from 'nuqs';
import type { Language, Translation } from './types';
import { en } from './en';
import { fr } from './fr';

const translations: Record<Language, Translation> = {
  en,
  fr,
};

interface I18nContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useQueryState('lang', {
    defaultValue: 'en' as Language,
    parse: (value): Language => (value === 'fr' ? 'fr' : 'en'),
    serialize: (value: Language) => value,
  });

  const value: I18nContextValue = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}