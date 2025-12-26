import type { Metadata } from 'next';
import { ROICalculatorPage } from '@/components/pages/ROICalculatorPage';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Calculadora de ROI de Prospecção | Prime SDR',
  description: 'Calcule quantas reuniões e quanto pipeline você pode gerar investindo em prospecção no LinkedIn. Ferramenta gratuita e simples.',
  keywords: ['calculadora roi', 'roi prospecção', 'calculadora linkedin', 'roi vendas', 'calculadora pipeline'],
  openGraph: {
    title: 'Calculadora de ROI de Prospecção | Prime SDR',
    description: 'Calcule quantas reuniões e quanto pipeline você pode gerar investindo em prospecção no LinkedIn.',
    type: 'website',
    url: 'https://www.primesdr.com/calculadora-roi',
  },
  alternates: {
    canonical: 'https://www.primesdr.com/calculadora-roi',
  },
};

const calculatorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculadora de ROI de Prospecção",
  "description": "Calcule quantas reuniões e quanto pipeline você pode gerar investindo em prospecção no LinkedIn",
  "url": "https://primesdr.com/calculadora-roi",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  }
};

export default function CalculadoraROIPage() {
  return (
    <>
      <JsonLd json={calculatorJsonLd} />
      <ROICalculatorPage />
    </>
  );
}

