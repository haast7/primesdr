import type { Metadata } from 'next';
import { PricingPage } from '@/components/pages/PricingPage';

export const metadata: Metadata = {
  title: 'Preços - Planos Prime SDR',
  description: 'Escolha o plano ideal para sua empresa. Garantia de 30 dias, sem taxa de setup e ROI positivo em até 90 dias.',
  keywords: ['preços', 'planos', 'SDR', 'prospecção', 'LinkedIn', 'automação', 'vendas', 'B2B'],
  openGraph: {
    title: 'Preços - Planos Prime SDR',
    description: 'Escolha o plano ideal para sua empresa. Garantia de 30 dias, sem taxa de setup e ROI positivo em até 90 dias.',
    type: 'website',
  },
  twitter: {
    title: 'Preços - Planos Prime SDR',
    description: 'Escolha o plano ideal para sua empresa. Garantia de 30 dias, sem taxa de setup e ROI positivo em até 90 dias.',
  },
};

export default function PrecosPage() {
  return <PricingPage />;
}
