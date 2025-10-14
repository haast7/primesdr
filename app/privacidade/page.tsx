import type { Metadata } from 'next';
import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Política de Privacidade - Prime SDR',
  description: 'Política de Privacidade da Prime SDR. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.',
  keywords: ['política de privacidade', 'LGPD', 'proteção de dados', 'privacidade', 'dados pessoais'],
  openGraph: {
    title: 'Política de Privacidade - Prime SDR',
    description: 'Política de Privacidade da Prime SDR. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.',
    url: 'https://primesdr.com/privacidade',
  },
  twitter: {
    title: 'Política de Privacidade - Prime SDR',
    description: 'Política de Privacidade da Prime SDR. Saiba como coletamos, usamos e protegemos seus dados pessoais em conformidade com a LGPD.',
  },
  alternates: {
    canonical: '/privacidade',
  },
};

const privacySchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Política de Privacidade - Prime SDR',
  description: 'Política de Privacidade da Prime SDR em conformidade com a LGPD',
  url: 'https://primesdr.com/privacidade',
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

export default function PrivacyPolicyPageRoute() {
  return (
    <>
      <JsonLd json={privacySchema} />
      <PrivacyPolicyPage />
    </>
  );
}







