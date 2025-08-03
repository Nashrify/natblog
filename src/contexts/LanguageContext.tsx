import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'sw' | 'en';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  sw: {
    // Navigation
    home: 'Nyumbani',
    articles: 'Makala',
    about: 'Kuhusu',
    contact: 'Wasiliana',
    login: 'Ingia',
    signup: 'Jisajili',
    search: 'Tafuta...',
    
    // Hero
    heroTitle: 'Karibu Kwenye Blog Yetu',
    heroSubtitle: 'Pata makala za kisasa kuhusu teknolojia, utamaduni na maisha',
    readMore: 'Soma Zaidi',
    latestArticles: 'Makala za Hivi Karibuni',
    
    // Blog
    readFullArticle: 'Soma Makala Kamili',
    publishedOn: 'Imechapishwa',
    by: 'na',
    category: 'Kategoria',
    tags: 'Vitambulisho',
    
    // Footer
    newsletter: 'Jiandikishe kwa Habari',
    subscribe: 'Jiandikishe',
    copyright: 'Haki zote zimehifadhiwa',
    
    // Pages
    aboutTitle: 'Kuhusu Sisi',
    contactTitle: 'Wasiliana Nasi',
    loginTitle: 'Ingia',
    signupTitle: 'Unda Akaunti',
  },
  en: {
    // Navigation
    home: 'Home',
    articles: 'Articles',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    signup: 'Sign Up',
    search: 'Search...',
    
    // Hero
    heroTitle: 'Welcome to Our Blog',
    heroSubtitle: 'Get the latest articles on technology, culture and life',
    readMore: 'Read More',
    latestArticles: 'Latest Articles',
    
    // Blog
    readFullArticle: 'Read Full Article',
    publishedOn: 'Published on',
    by: 'by',
    category: 'Category',
    tags: 'Tags',
    
    // Footer
    newsletter: 'Subscribe to Newsletter',
    subscribe: 'Subscribe',
    copyright: 'All rights reserved',
    
    // Pages
    aboutTitle: 'About Us',
    contactTitle: 'Contact Us',
    loginTitle: 'Login',
    signupTitle: 'Create Account',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<'sw' | 'en'>('sw');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'sw' ? 'en' : 'sw');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['sw']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}