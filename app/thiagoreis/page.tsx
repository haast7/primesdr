import React from 'react';
import { ThiagoReisHero } from '@/components/pages/ThiagoReisHero';
import { ThiagoReisForm } from '@/components/pages/ThiagoReisForm';
import { ThiagoReisAbout } from '@/components/pages/ThiagoReisAbout';
import { ThiagoReisCases } from '@/components/pages/ThiagoReisCases';
import { ThiagoReisCTA } from '@/components/pages/ThiagoReisCTA';
import { ThiagoReisFooter } from '@/components/pages/ThiagoReisFooter';
import { JsonLd } from '@/components/JsonLd';

export const metadata = {
  title: 'Gere 400 Conexões e Marque Reuniões 10x Mais Rápido | Prime SDR',
  description: 'Ou devolvemos seu dinheiro. Transforme seu LinkedIn em uma máquina de geração de leads. Evento exclusivo com Thiago Reis.',
  robots: {
    index: false,
    follow: false,
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Prime SDR',
  url: 'https://primesdr.com',
};

export default function ThiagoReisPage() {
  return (
    <>
      <JsonLd json={organizationSchema} />
      <div className="min-h-screen bg-white">
        <ThiagoReisHero />
        <ThiagoReisForm />
        <ThiagoReisAbout />
        <ThiagoReisCases />
        <ThiagoReisCTA />
        <ThiagoReisFooter />
      </div>
    </>
  );
}
