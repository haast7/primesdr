import type { Metadata } from 'next';
import { CookiesPolicyPage } from '@/components/pages/CookiesPolicyPage';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Política de Cookies - Prime SDR',
  description: 'Política de Cookies da Prime SDR. Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação.',
  keywords: ['política de cookies', 'cookies', 'navegação', 'privacidade', 'LGPD', 'rastreamento'],
  openGraph: {
    title: 'Política de Cookies - Prime SDR',
    description: 'Política de Cookies da Prime SDR. Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação.',
    url: 'https://primesdr.com/cookies',
  },
  twitter: {
    title: 'Política de Cookies - Prime SDR',
    description: 'Política de Cookies da Prime SDR. Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação.',
  },
  alternates: {
    canonical: '/cookies',
  },
};

const cookiesSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Política de Cookies - Prime SDR',
  description: 'Política de Cookies da Prime SDR explicando o uso de cookies e tecnologias similares',
  url: 'https://primesdr.com/cookies',
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

export default function CookiesPolicyPageRoute() {
  return (
    <>
      <JsonLd json={cookiesSchema} />
      <CookiesPolicyPage />
    </>
  );
}







