'use client';

import React from 'react';
import { ContactButton } from '@/components/ui/ContactButton';
import { Container } from '@/components/ui/Container';
import { useLanguage } from '@/lib/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const subtitle = t.hero.subtitle.split('—')[0] || t.hero.subtitle;
  const mainHeadline = t.hero.mainHeadline || { 
    line1: t.hero.headline, 
    line2: t.hero.headlineHighlight 
  };
  const bulletPoints = t.hero.bulletPoints || {
    desktop: [],
    mobile: []
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            {mainHeadline.line1}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {mainHeadline.line2}
            </span>
          </h1>
          
          <div className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            <p className="mb-6">
              {subtitle}
            </p>
            
            {/* Desktop: tópicos lado a lado */}
            {bulletPoints.desktop && bulletPoints.desktop.length > 0 && (
              <div className="hidden md:grid md:grid-cols-3 gap-6 text-lg">
                {bulletPoints.desktop.map((point, index) => (
                  <div key={index} className="flex items-start justify-center">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span className="text-left">{point}</span>
                  </div>
                ))}
              </div>
            )}
            
            {/* Mobile: tópicos empilhados */}
            {bulletPoints.mobile && bulletPoints.mobile.length > 0 && (
              <ul className="md:hidden text-left space-y-2 text-lg max-w-sm mx-auto">
                {bulletPoints.mobile.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ContactButton
            source="hero-main"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          >
            {t.hero.cta.primary}
          </ContactButton>
        </div>
      </Container>
    </section>
  );
}