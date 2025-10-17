'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { IMAGE_URLS } from '@/lib/imageLoader';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

export function Header() {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };

  const selectLanguage = (newLanguage: typeof availableLanguages[0]) => {
    setLanguage(newLanguage.code);
    setLanguageMenuOpen(false);
  };

  const navigation = [
    { name: t.nav.howItWorks, href: '/como-funciona' },
    { name: t.nav.pricing, href: '/precos' },
    { name: t.nav.resources, href: '/recursos' },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 transition-all duration-500 ease-out",
      isScrolled 
        ? "bg-white border-b border-gray-200 shadow-lg" 
        : "bg-white border-b border-gray-200"
    )}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <ImageWithFallback
                src={IMAGE_URLS.logo}
                alt="Prime SDR"
                width={40}
                height={40}
                className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
                priority
                fallback="/logoazul.png"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
              Prime SDR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-600 hover:text-primary-600 font-medium transition-all duration-200 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50/50 transition-all duration-200 group"
                aria-label={t.header.language}
              >
                <Globe className="h-4 w-4 text-gray-500 group-hover:text-primary-600 transition-colors" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                  {language.toUpperCase()}
                </span>
                <ChevronDown className={cn(
                  "h-4 w-4 text-gray-500 transition-transform duration-200",
                  languageMenuOpen && "rotate-180"
                )} />
              </button>

              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200/50 py-2 z-50 backdrop-blur-xl">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang)}
                      className={cn(
                        'w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary-50 transition-all duration-200 first:rounded-t-lg last:rounded-b-lg',
                        language === lang.code && 'bg-primary-50 text-primary-600 font-medium'
                      )}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button variant="ghost" size="sm" className="hover:bg-primary-50 hover:text-primary-600">
              {t.header.login}
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl transition-all duration-200">
              {t.header.startFree}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors duration-200 group"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 group-hover:text-primary-600 transition-colors" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200/50 py-6 bg-white/95 backdrop-blur-xl">
            {/* Language Selector Mobile */}
            <div className="mb-6 px-4">
              <div className="flex items-center space-x-3 mb-3">
                <Globe className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">{t.header.language}:</span>
              </div>
              <div className="flex space-x-2">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang)}
                    className={cn(
                      'flex items-center space-x-2 px-3 py-2 rounded-lg border transition-all duration-200',
                      language === lang.code
                        ? 'border-primary-300 bg-primary-50 text-primary-600 shadow-sm'
                        : 'border-gray-200 hover:border-primary-200 hover:bg-primary-50/50'
                    )}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="space-y-1 px-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="mt-6 px-4 space-y-3">
              <Button variant="ghost" size="sm" className="w-full justify-center hover:bg-primary-50 hover:text-primary-600">
                {t.header.login}
              </Button>
              <Button size="sm" className="w-full justify-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg">
                {t.header.startFree}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
