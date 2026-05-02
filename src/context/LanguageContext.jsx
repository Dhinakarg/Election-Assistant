import React, { createContext, useState, useContext, useEffect } from 'react';
import { TRANSLATIONS } from '../constants/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('civicguide_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('civicguide_lang', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    // For unsupported UI languages, fallback to English
    const currentDict = TRANSLATIONS[language] || TRANSLATIONS['en'];
    
    let value = currentDict;
    for (const k of keys) {
      if (value === undefined || value[k] === undefined) {
        // Fallback to English if translation is missing
        let fallback = TRANSLATIONS['en'];
        for (const fk of keys) {
          if (!fallback) break;
          fallback = fallback[fk];
        }
        return fallback || key;
      }
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
