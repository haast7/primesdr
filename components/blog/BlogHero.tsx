'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { BlogSearchBar } from './BlogSearchBar';

interface BlogHeroProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const HEADLINE = 'Conteúdo para times que vendem mais.';
const SUBHEADLINE =
  'Prospecção B2B, SDR, LinkedIn e vendas consultivas. Artigos, guias e cases para escalar sua operação comercial.';

export function BlogHero({ searchValue, onSearchChange }: BlogHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
      aria-label="Apresentação do hub de conteúdo"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <Container className="relative py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white tracking-tight mb-4">
            {HEADLINE}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
            {SUBHEADLINE}
          </p>
          <div className="max-w-xl mx-auto mb-8">
            <BlogSearchBar
              value={searchValue}
              onChange={onSearchChange}
              aria-label="Buscar artigos do blog por título ou assunto"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Falar com especialista
            </Link>
            <Link
              href="/como-funciona"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white font-semibold px-6 py-3 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-200"
            >
              Como funciona
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
