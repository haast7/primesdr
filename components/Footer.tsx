import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { IMAGE_URLS } from '@/lib/imageLoader';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

const footerLinks = {
  institucional: [
    { name: 'Sobre', href: '/sobre' },
    { name: 'Contato', href: '/contato' },
    { name: 'Termos de Uso', href: '/termos' },
    { name: 'Política de Privacidade', href: '/privacidade' },
    { name: 'Cookies', href: '/cookies' },
  ],
  recursos: [
    { name: 'Blog', href: '/blog' },
    { name: 'Cases', href: '/cases' },
    { name: 'Playbooks', href: '/playbooks' },
    { name: 'FAQ', href: '/faq' },
  ],
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/prime-sdr', external: true },
    { name: 'YouTube', href: 'https://youtube.com/@prime-sdr', external: true },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <ImageWithFallback
                  src={IMAGE_URLS.logoWhite}
                  alt="Prime SDR"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  unoptimized
                  fallback="/logocompletabranca.png"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Transformamos LinkedIn em motor de receita previsível para empresas B2B. 
                Automação inteligente + SDR humano = resultados garantidos.
              </p>
              <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                Teste 30 dias sem risco
              </Button>
            </div>

            {/* Institucional */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Institucional
              </h3>
              <ul className="space-y-3">
                {footerLinks.institucional.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Recursos
              </h3>
              <ul className="space-y-3">
                {footerLinks.recursos.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Social
              </h3>
              <ul className="space-y-3">
                {footerLinks.social.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Prime SDR. Todos os direitos reservados.
            </div>
            <div className="text-sm text-gray-400">
              CNPJ: 60.782.822/0001-01
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}





