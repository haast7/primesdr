import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Sobre a Prime SDR - Nossa História e Missão',
  description: 'Conheça a história da Prime SDR, nossa missão de transformar o LinkedIn em motor de receita previsível para empresas B2B e como nascemos de uma frustração real.',
  keywords: ['sobre prime sdr', 'história', 'missão', 'valores', 'equipe', 'prospecção B2B', 'LinkedIn'],
  openGraph: {
    title: 'Sobre a Prime SDR - Nossa História e Missão',
    description: 'Conheça a história da Prime SDR, nossa missão de transformar o LinkedIn em motor de receita previsível para empresas B2B e como nascemos de uma frustração real.',
    url: 'https://primesdr.com/sobre',
  },
  twitter: {
    title: 'Sobre a Prime SDR - Nossa História e Missão',
    description: 'Conheça a história da Prime SDR, nossa missão de transformar o LinkedIn em motor de receita previsível para empresas B2B e como nascemos de uma frustração real.',
  },
  alternates: {
    canonical: '/sobre',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'Sobre a Prime SDR',
  description: 'Conheça a história, missão e valores da Prime SDR, plataforma líder em prospecção B2B no LinkedIn',
  url: 'https://primesdr.com/sobre',
  mainEntity: {
    '@type': 'Organization',
    name: 'Prime SDR',
    url: 'https://primesdr.com',
    foundingDate: '2023',
    description: 'Plataforma de automação de prospecção B2B no LinkedIn',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-94502-2847',
      contactType: 'customer service',
      email: 'contato@primesdr.com',
      availableLanguage: ['Portuguese'],
      areaServed: 'BR',
    },
  },
};

export default function AboutPageRoute() {
  return (
    <>
      <JsonLd json={aboutSchema} />
      <AboutPage />
    </>
  );
}





