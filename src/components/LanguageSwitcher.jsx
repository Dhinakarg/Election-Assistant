import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हिं' },
  { code: 'ta', label: 'தமி' },
  { code: 'te', label: 'తెలు' },
  { code: 'kn', label: 'ಕನ್ನ' }
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLanguageChange = (code) => {
    setLanguage(code);
    if (!['en', 'hi'].includes(code)) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }
  };

  return (
    <div className="relative">
      <div className="flex gap-1 bg-white/20 p-1 rounded-lg backdrop-blur-sm">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-3 py-1.5 rounded-md text-sm font-bold transition-colors ${
              language === lang.code 
                ? 'bg-indigo-400 text-white shadow-sm' 
                : 'text-white/80 hover:bg-white/30 hover:text-white'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>
      
      {showTooltip && (
        <div className="absolute top-full right-0 mt-2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap z-50 animate-slide-up before:content-[''] before:absolute before:-top-2 before:right-8 before:border-8 before:border-transparent before:border-b-gray-800">
          Full UI translation coming soon. Chat will respond in this language!
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
