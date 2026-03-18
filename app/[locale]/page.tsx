import React from 'react';
import { notFound } from 'next/navigation';
import { locales, defaultLocale } from '@/lib/routes';
import { Language, translations } from '@/lib/i18n';
import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { Differentiators } from '@/components/sections/Differentiators';
import { Pricing } from '@/components/sections/Pricing';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { SocialProof } from '@/components/sections/SocialProof';
import { JsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  return locales.filter(locale => locale !== defaultLocale).map((locale) => ({
    locale,
  }));
}

export default function LocaleHomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  if (!locales.includes(locale as Language)) {
    notFound();
  }

  const lang = locale as Language;
  const t = translations[lang];
  const seoDescription = `${t.hero.headline} ${t.hero.headlineHighlight}`.trim();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prime SDR',
    url: 'https://primesdr.com',
    logo: 'https://primesdr.com/logoazul.png',
    description: seoDescription,
    sameAs: [
      'https://linkedin.com/company/prime-sdr',
      'https://youtube.com/@prime-sdr'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'Spanish', 'English']
    }
  };

  return (
    <>
      <JsonLd json={organizationSchema} />
      <Hero />
      <ProblemSection />
      <Differentiators />
      <Pricing />
      <HowItWorks />
      <SocialProof />
      <FAQ />
    </>
  );
}





