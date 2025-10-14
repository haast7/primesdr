import type { Metadata } from 'next';
import { ResourcesPage } from '@/components/pages/ResourcesPage';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Recursos - Ferramentas Gratuitas, Guias e Templates | Prime SDR',
  description: 'Aprenda a dominar prospecção B2B no LinkedIn. Ferramentas gratuitas, playbooks testados, templates prontos e casos reais. Tudo para encher sua agenda de reuniões qualificadas.',
  keywords: ['recursos prospecção', 'ferramentas LinkedIn', 'templates vendas', 'guias B2B', 'playbooks vendas', 'calculadora ROI'],
  openGraph: {
    title: 'Recursos - Ferramentas Gratuitas, Guias e Templates | Prime SDR',
    description: 'Aprenda a dominar prospecção B2B no LinkedIn. Ferramentas gratuitas, playbooks testados, templates prontos e casos reais.',
    type: 'website',
    url: 'https://primesdr.com/recursos',
  },
  alternates: {
    canonical: '/recursos',
  },
};

const resourcesJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Recursos - Prime SDR",
  "description": "Ferramentas gratuitas, guias e templates para prospecção B2B no LinkedIn",
  "url": "https://primesdr.com/recursos",
  "mainEntity": {
    "@type": "ItemList",
    "name": "Recursos de Prospecção B2B",
    "description": "Ferramentas, guias e templates para dominar prospecção no LinkedIn",
    "numberOfItems": 20,
    "itemListElement": [
      {
        "@type": "SoftwareApplication",
        "name": "Calculadora de ROI de Prospecção",
        "description": "Calcule quanto você pode gerar com LinkedIn",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BRL"
        }
      },
      {
        "@type": "SoftwareApplication", 
        "name": "Analisador de Perfil LinkedIn",
        "description": "Seu perfil LinkedIn está pronto para prospectar?",
        "applicationCategory": "BusinessApplication",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BRL"
        }
      }
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://primesdr.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Recursos",
        "item": "https://primesdr.com/recursos"
      }
    ]
  }
};

export default function RecursosPage() {
  return (
    <>
      <JsonLd json={resourcesJsonLd} />
      <ResourcesPage />
    </>
  );
}
