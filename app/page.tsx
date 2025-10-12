import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { CaseStudy } from '@/components/sections/CaseStudy';
import { Differentiators } from '@/components/sections/Differentiators';
import { Guarantee } from '@/components/sections/Guarantee';
import { Pricing } from '@/components/sections/Pricing';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { SocialProof } from '@/components/sections/SocialProof';
import { JsonLd } from '@/components/JsonLd';

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Prime SDR',
    url: 'https://primesdr.com',
    logo: 'https://primesdr.com/logoazul.png',
    description: 'Transformamos LinkedIn em motor de receita previsível para empresas B2B. Automação inteligente + SDR humano = resultados garantidos.',
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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Prospecção LinkedIn Automatizada',
    description: 'Serviço de prospecção B2B que combina automação inteligente com SDR humano para gerar reuniões qualificadas no LinkedIn.',
    provider: {
      '@type': 'Organization',
      name: 'Prime SDR'
    },
    areaServed: 'BR',
    availableLanguage: ['pt-BR', 'es-ES', 'en-US'],
    serviceType: 'Prospecção B2B',
    offers: [
      {
        '@type': 'Offer',
        name: 'Plano Starter',
        price: '79',
        priceCurrency: 'USD',
        description: 'Para quem quer provar que funciona antes de escalar'
      },
      {
        '@type': 'Offer',
        name: 'Plano Growth',
        price: '59',
        priceCurrency: 'USD',
        description: 'Para times que querem resultados previsíveis sem depender de mídia paga'
      },
      {
        '@type': 'Offer',
        name: 'Plano Scale',
        price: '39',
        priceCurrency: 'USD',
        description: 'Para quem quer ser inevitável no mercado'
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Isso viola as regras do LinkedIn?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não. Respeitamos todos os limites, variamos cadência e nunca disparamos spam. Operamos há anos sem um único ban.'
        }
      },
      {
        '@type': 'Question',
        name: 'Funciona pro meu nicho?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Se é B2B com ticket ≥ R$ 3k e venda consultiva, sim. SaaS, serviços, indústria, tech, consultorias — todos funcionam.'
        }
      },
      {
        '@type': 'Question',
        name: 'Quanto tempo até ver resultado?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Respostas na 1ª semana. Reuniões a partir da 2ª–3ª semana. Pipeline robusto em 45–60 dias.'
        }
      },
      {
        '@type': 'Question',
        name: 'E se não funcionar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '90 dias de teste. Não bateu meta? Reembolso integral. Simples assim.'
        }
      }
    ]
  };

  return (
    <>
      <JsonLd json={organizationSchema} />
      <JsonLd json={serviceSchema} />
      <JsonLd json={faqSchema} />
      
      <Hero />
      <CaseStudy />
      <Differentiators />
      <Guarantee />
      <Pricing />
      <HowItWorks />
      <FAQ />
      <SocialProof />
    </>
  );
}


