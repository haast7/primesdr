'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Language, translations, getLanguageFromCode, getLanguageName, getLanguageFlag } from '@/lib/i18n';
import { getLocaleFromPath, getRouteKey, getLocalizedRoute } from '@/lib/routes';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.pt;
  availableLanguages: Array<{
    code: Language;
    name: string;
    flag: string;
  }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>('pt');

  // Load language from URL on mount and when pathname changes
  useEffect(() => {
    const localeFromPath = getLocaleFromPath(pathname);
    setLanguageState(localeFromPath);
    
    // Update document language
    document.documentElement.lang = localeFromPath;
    
    // Save to localStorage for consistency
    localStorage.setItem('prime-sdr-language', localeFromPath);
  }, [pathname]);

  const setLanguage = (newLanguage: Language) => {
    // Get current route key
    const currentRouteKey = getRouteKey(pathname);
    
    // Get localized route for new language
    const newRoute = getLocalizedRoute(currentRouteKey, newLanguage);
    
    // Update state
    setLanguageState(newLanguage);
    localStorage.setItem('prime-sdr-language', newLanguage);
    
    // Update document language
    document.documentElement.lang = newLanguage;
    
    // Navigate to new route with locale
    router.push(newRoute);
    
    // Dispatch custom event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language: newLanguage } 
    }));
  };

  const availableLanguages = [
    { code: 'pt' as Language, name: getLanguageName('pt'), flag: getLanguageFlag('pt') },
    { code: 'es' as Language, name: getLanguageName('es'), flag: getLanguageFlag('es') },
    { code: 'en' as Language, name: getLanguageName('en'), flag: getLanguageFlag('en') },
  ];

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}







