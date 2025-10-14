import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Contato - Prime SDR',
  description: 'Entre em contato com a Prime SDR. Fale com nossos especialistas e descubra como gerar 100+ reuniões qualificadas por mês no LinkedIn.',
  keywords: ['contato', 'SDR', 'prospecção', 'LinkedIn', 'vendas', 'B2B'],
  openGraph: {
    title: 'Contato - Prime SDR',
    description: 'Entre em contato com a Prime SDR. Fale com nossos especialistas e descubra como gerar 100+ reuniões qualificadas por mês no LinkedIn.',
    url: 'https://primesdr.com/contato',
  },
  twitter: {
    title: 'Contato - Prime SDR',
    description: 'Entre em contato com a Prime SDR. Fale com nossos especialistas e descubra como gerar 100+ reuniões qualificadas por mês no LinkedIn.',
  },
  alternates: {
    canonical: '/contato',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contato - Prime SDR',
  description: 'Entre em contato com a Prime SDR para descobrir como gerar 100+ reuniões qualificadas por mês no LinkedIn.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Prime SDR',
    url: 'https://primesdr.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+55-11-99999-9999',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'Spanish', 'English'],
      areaServed: 'BR',
    },
  },
};

export default function ContactPageRoute() {
  return (
    <>
      <JsonLd json={contactSchema} />
      <ContactPage />
    </>
  );
}







