import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { Differentiators } from '@/components/sections/Differentiators';
import { Pricing } from '@/components/sections/Pricing';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FAQ } from '@/components/sections/FAQ';
import { SocialProof } from '@/components/sections/SocialProof';
import { JsonLd } from '@/components/JsonLd';

export default function HomePage() {
  const seoDescription =
    'Transforme o LinkedIn em uma máquina de leads para o seu time comercial. Mais lead qualificado é mais vendas no seu pipeline.';

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

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Prospecção LinkedIn Automatizada',
    description: seoDescription,
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
        description: 'Para quem quer provar que funciona antes de escalar'
      },
      {
        '@type': 'Offer',
        name: 'Plano Growth',
        description: 'Para times que querem resultados previsíveis sem depender de mídia paga'
      },
      {
        '@type': 'Offer',
        name: 'Plano Scale',
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

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.primesdr.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Nossa História e Missão',
        item: 'https://www.primesdr.com/sobre'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Como Funciona',
        item: 'https://www.primesdr.com/como-funciona'
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Preços',
        item: 'https://www.primesdr.com/precos'
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Recursos',
        item: 'https://www.primesdr.com/recursos'
      }
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Prime SDR',
    url: 'https://www.primesdr.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.primesdr.com/recursos?search={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Nossa História e Missão',
          url: 'https://www.primesdr.com/sobre'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Como Funciona',
          url: 'https://www.primesdr.com/como-funciona'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Preços',
          url: 'https://www.primesdr.com/precos'
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Recursos',
          url: 'https://www.primesdr.com/recursos'
        }
      ]
    }
  };

  return (
    <>
      <JsonLd json={organizationSchema} />
      <JsonLd json={serviceSchema} />
      <JsonLd json={faqSchema} />
      <JsonLd json={breadcrumbSchema} />
      <JsonLd json={websiteSchema} />

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


