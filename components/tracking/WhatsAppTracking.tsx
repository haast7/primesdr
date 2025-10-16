'use client';

import { useEffect } from 'react';
import { useCookieTracking } from '@/lib/hooks/useCookieTracking';

export function WhatsAppTracking() {
  const { trackWhatsAppClick } = useCookieTracking();

  useEffect(() => {
    const handleWhatsAppClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link) {
        const href = link.getAttribute('href');
        const linkText = link.textContent?.trim() || 'WhatsApp';
        
        if (href && isWhatsAppLink(href)) {
          const phoneNumber = extractPhoneNumber(href);
          const location = getLocationFromElement(link);
          
          trackWhatsAppClick(location, phoneNumber);
        }
      }
    };

    document.addEventListener('click', handleWhatsAppClick);
    return () => document.removeEventListener('click', handleWhatsAppClick);
  }, [trackWhatsAppClick]);

  return null;
}

// Funções auxiliares
function isWhatsAppLink(href: string): boolean {
  return href.includes('wa.me') || 
         href.includes('whatsapp.com') || 
         href.includes('api.whatsapp.com') ||
         href.startsWith('whatsapp://');
}

function extractPhoneNumber(href: string): string {
  // Extrair número do WhatsApp de diferentes formatos
  const patterns = [
    /wa\.me\/(\d+)/,
    /whatsapp\.com\/send\?phone=(\d+)/,
    /api\.whatsapp\.com\/send\?phone=(\d+)/,
    /whatsapp:\/\/send\?phone=(\d+)/
  ];
  
  for (const pattern of patterns) {
    const match = href.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return 'unknown';
}

function getLocationFromElement(element: HTMLElement): string {
  // Tentar identificar a localização do link baseado no contexto
  const parent = element.closest('[data-section]');
  if (parent) {
    return parent.getAttribute('data-section') || 'unknown';
  }
  
  // Verificar se está em um componente específico
  if (element.closest('.contact-info')) return 'contact-info';
  if (element.closest('.footer')) return 'footer';
  if (element.closest('.header')) return 'header';
  if (element.closest('.cta-section')) return 'cta-section';
  
  return 'page';
}

