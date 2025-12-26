'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ContactButton } from '@/components/ui/ContactButton';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { IMAGE_URLS } from '@/lib/imageLoader';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { getLocaleFromPath, getLocalizedRoute } from '@/lib/routes';

export function Footer() {
  const pathname = usePathname();
  const currentLocale = getLocaleFromPath(pathname);
  const { t } = useLanguage();

  const footerLinks = {
    institucional: t.footer.sections.company.map((name, index) => {
      const routeKeys = ['sobre', 'contato', 'termos', 'privacidade', 'cookies'];
      return {
        name,
        href: getLocalizedRoute(routeKeys[index] || 'home', currentLocale)
      };
    }),
    recursos: t.footer.sections.resources.map((name, index) => ({
      name,
      href: ['/blog', '/cases', '/playbooks', '/faq'][index] || '#'
    })),
    social: [
      { name: 'LinkedIn', href: 'https://linkedin.com/company/prime-sdr', external: true },
      { name: 'YouTube', href: 'https://youtube.com/@prime-sdr', external: true },
      { name: 'Instagram', href: 'https://instagram.com/primesdr', external: true },
      { name: 'Facebook', href: 'https://facebook.com/primesdr', external: true },
      { name: 'Twitter', href: 'https://twitter.com/primesdr', external: true },
      { name: 'TikTok', href: 'https://tiktok.com/@primesdr', external: true },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="lg:col-span-1">
              <Link href={getLocalizedRoute('home', currentLocale)} className="flex items-center space-x-2 mb-4">
                <ImageWithFallback
                  src={IMAGE_URLS.logoWhite}
                  alt="Prime SDR"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  fallback="/logocompletabranca.png"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t.footer.company.description}
              </p>
              <ContactButton 
                source="footer-test-90-days"
                size="sm" 
                className="bg-primary-600 hover:bg-primary-700"
              >
                {t.footer.cta}
              </ContactButton>
            </div>

            {/* Institucional */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {t.footer.links.company}
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
                {t.footer.links.resources}
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
                {t.footer.social || 'Social'}
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
              {t.footer.copyright}
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





