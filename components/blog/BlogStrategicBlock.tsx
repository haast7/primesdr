import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

/** Imagem do ebook (guia) — hospedada no Firebase Storage */
const EBOOK_IMAGE_SRC =
  'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/ebook.png?alt=media&token=0a499c95-7d96-4a82-897f-077169923747';

interface BlogStrategicBlockProps {
  /** Título do bloco (ex.: "Guia definitivo") */
  title?: string;
  /** Descrição curta */
  description?: string;
  /** Texto do CTA */
  ctaText?: string;
  /** URL do CTA (ex.: /contato, /recursos, link externo) */
  ctaHref?: string;
}

const DEFAULT_TITLE = 'Guia: Prospecção B2B que gera reuniões';
const DEFAULT_DESCRIPTION =
  'Conteúdo pilar para líderes comerciais: como estruturar SDR, métricas e playbooks. Baixe o material e acelere sua operação.';
const DEFAULT_CTA = 'Acessar material';
const DEFAULT_HREF = '/contato';

export function BlogStrategicBlock({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ctaText = DEFAULT_CTA,
  ctaHref = DEFAULT_HREF,
}: BlogStrategicBlockProps) {
  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-primary-200/80 bg-gradient-to-br from-primary-50/60 to-white py-12 md:py-16"
      aria-labelledby="strategic-block-heading"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <Container className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Copy: desktop à esquerda; mobile primeiro */}
          <div className="order-1">
            <h2
              id="strategic-block-heading"
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              {title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 md:mb-8">{description}</p>
            {/* No mobile o ebook fica entre descrição e botão */}
            <div className="md:hidden relative w-full max-w-[200px] mx-auto aspect-[3/4] mb-6">
              <Image
                src={EBOOK_IMAGE_SRC}
                alt=""
                fill
                className="object-contain object-center"
                sizes="200px"
              />
            </div>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 text-white font-semibold px-6 py-3 shadow-sm hover:bg-primary-700 hover:shadow-md transition-all duration-200"
            >
              {ctaText}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          {/* Ebook: desktop à direita; no mobile fica acima do botão (no bloco da copy) */}
          <div className="hidden md:block order-2 relative w-full max-w-[260px] md:max-w-[280px] aspect-[3/4] mx-auto md:mx-0 md:ml-auto">
            <Image
              src={EBOOK_IMAGE_SRC}
              alt=""
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 200px, 280px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
