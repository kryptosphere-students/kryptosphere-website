
import { translations } from '@/contexts/translations';
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

// Helper to get current language from the URL
export const getLangFromPath = (pathname: string): Language => {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/fr')) return 'fr';
  return 'fr'; // default
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tRaw: (key: string) => unknown;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    const value = translations[language][key as keyof typeof translations[typeof language]];
    if (Array.isArray(value)) {
      return value.join(', ');
    }
    return value || key;
  };

  const tRaw = (key: string): unknown => {
  return translations[language][key as keyof typeof translations[typeof language]];
};


  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tRaw }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
