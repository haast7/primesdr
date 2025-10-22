import { Metadata } from 'next';
import { JsonLd } from '@/components/JsonLd';
import { HowItWorksPage } from '@/components/pages/HowItWorksPage';

export const metadata: Metadata = {
  title: 'Como Funciona - Prime SDR | De configuração a resultados em 7 dias',
  description: 'Veja exatamente como a Prime SDR transforma seu LinkedIn em um motor de reuniões previsíveis, passo a passo. Configuração, ativação, execução 24/7 e otimização contínua.',
  keywords: 'como funciona prospecção LinkedIn, automação LinkedIn, SDR, geração de leads, reuniões B2B',
  openGraph: {
    title: 'Como Funciona - Prime SDR | De configuração a resultados em 7 dias',
    description: 'Veja exatamente como a Prime SDR transforma seu LinkedIn em um motor de reuniões previsíveis, passo a passo.',
    type: 'website',
    url: 'https://primesdr.com/como-funciona',
    images: [
      {
        url: 'https://primesdr.com/og-como-funciona.jpg',
        width: 1200,
        height: 630,
        alt: 'Como Funciona - Prime SDR'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Como Funciona - Prime SDR | De configuração a resultados em 7 dias',
    description: 'Veja exatamente como a Prime SDR transforma seu LinkedIn em um motor de reuniões previsíveis, passo a passo.',
    images: ['https://primesdr.com/og-como-funciona.jpg']
  },
  alternates: {
    canonical: 'https://primesdr.com/como-funciona'
  }
};

export default function ComoFuncionaPage() {
  const howItWorksSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como Funciona a Prime SDR - Processo de Prospecção LinkedIn',
    description: 'Processo completo de configuração a resultados em 7 dias com automação LinkedIn',
    totalTime: 'P7D',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'BRL',
      value: '2970'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Perfil LinkedIn ativo'
      },
      {
        '@type': 'HowToSupply', 
        name: 'Definição de ICP (Ideal Customer Profile)'
      },
      {
        '@type': 'HowToSupply',
        name: 'Metas de reuniões mensais'
      }
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Prime SDR Platform'
      },
      {
        '@type': 'HowToTool',
        name: 'LinkedIn Sales Navigator'
      },
      {
        '@type': 'HowToTool',
        name: 'CRM Integration'
      }
    ],
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Kickoff Estratégico',
        text: 'Reunião de 60 minutos para entender ICP, metas e criar mensagens personalizadas',
        url: 'https://primesdr.com/como-funciona#configuracao'
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Setup Técnico',
        text: 'Conectar perfis LinkedIn, ativar aquecimento automático e integrar com CRM',
        url: 'https://primesdr.com/como-funciona#ativacao'
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Execução 24/7',
        text: 'Automação roda continuamente, SDR humano entra quando lead responde',
        url: 'https://primesdr.com/como-funciona#execucao'
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Otimização Contínua',
        text: 'Reuniões semanais de review, testes A/B e refinamento para maximizar resultados',
        url: 'https://primesdr.com/como-funciona#otimizacao'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Prime SDR - Automação de Prospecção LinkedIn',
    description: 'Serviço de automação de prospecção B2B no LinkedIn com SDR humano para geração de reuniões qualificadas',
    provider: {
      '@type': 'Organization',
      name: 'Prime SDR',
      url: 'https://primesdr.com'
    },
    serviceType: 'Automação de Prospecção B2B',
    areaServed: 'Brasil',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Planos Prime SDR',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plano Starter',
            description: 'Até 3 perfis LinkedIn, 50 reuniões/mês'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plano Growth',
            description: 'Até 6 perfis LinkedIn, 100 reuniões/mês'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plano Scale',
            description: 'Perfis ilimitados, 200+ reuniões/mês'
          }
        }
      ]
    }
  };

  return (
    <>
      <JsonLd json={howItWorksSchema} />
      <JsonLd json={serviceSchema} />
      <HowItWorksPage />
    </>
  );
}







