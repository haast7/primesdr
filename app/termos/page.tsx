import type { Metadata } from 'next';
import { TermsOfUsePage } from '@/components/pages/TermsOfUsePage';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Termos de Uso - Prime SDR',
  description: 'Termos de Uso da Prime SDR. Conheça as condições e regras para utilização de nossa plataforma de automação de prospecção no LinkedIn.',
  keywords: ['termos de uso', 'condições de uso', 'regras', 'plataforma', 'automação', 'LinkedIn'],
  openGraph: {
    title: 'Termos de Uso - Prime SDR',
    description: 'Termos de Uso da Prime SDR. Conheça as condições e regras para utilização de nossa plataforma de automação de prospecção no LinkedIn.',
    url: 'https://primesdr.com/termos',
  },
  twitter: {
    title: 'Termos de Uso - Prime SDR',
    description: 'Termos de Uso da Prime SDR. Conheça as condições e regras para utilização de nossa plataforma de automação de prospecção no LinkedIn.',
  },
  alternates: {
    canonical: '/termos',
  },
};

const termsSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Termos de Uso - Prime SDR',
  description: 'Termos de Uso da Prime SDR para utilização da plataforma de automação de prospecção',
  url: 'https://primesdr.com/termos',
  mainEntity: {
    '@type': 'Organization',
    name: 'Prime SDR',
    url: 'https://primesdr.com',
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

export default function TermsOfUsePageRoute() {
  return (
    <>
      <JsonLd json={termsSchema} />
      <TermsOfUsePage />
    </>
  );
}









