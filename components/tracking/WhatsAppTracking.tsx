'use client';

import { useEffect } from 'react';
import { useCookieTracking } from '@/lib/hooks/useCookieTracking';
import { trackMetaEvent } from './MetaPixel';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

export function WhatsAppTracking() {
  const { trackWhatsAppClick } = useCookieTracking();
  const { consent } = useCookieConsent();

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
          
          // Track GA4/GTM
          trackWhatsAppClick(location, phoneNumber);
          
          // Track Meta Pixel Contact event (se consentimento marketing estiver ativo)
          if (consent?.marketing && typeof window !== 'undefined' && window.fbq) {
            trackMetaEvent('Contact', {
              content_name: 'WhatsApp - Link',
              content_category: 'WhatsApp Click',
              source: location,
              phone_number: phoneNumber
            });
          }
        }
      }
    };

    document.addEventListener('click', handleWhatsAppClick);
    return () => document.removeEventListener('click', handleWhatsAppClick);
  }, [trackWhatsAppClick, consent?.marketing]);

  return null;
}

// Funções auxiliares
function isWhatsAppLink(href: string): boolean {
  return href.includes('wa.me') || 
         href.includes('whatsapp.com') || 
         href.includes('api.whatsapp.com') ||
         href.includes('w.app') ||
         href.startsWith('whatsapp://');
}

function extractPhoneNumber(href: string): string {
  // Extrair número do WhatsApp de diferentes formatos
  const patterns = [
    /wa\.me\/(\d+)/,
    /whatsapp\.com\/send\/\?phone=(\d+)/,
    /api\.whatsapp\.com\/send\/\?phone=(\d+)/,
    /whatsapp:\/\/send\?phone=(\d+)/
  ];
  
  // Se for o link novo formato api.whatsapp.com
  if (href.includes('api.whatsapp.com')) {
    const match = href.match(/phone=(\d+)/);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  for (const pattern of patterns) {
    const match = href.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  
  // Fallback: se contém 5511920859210, retorna esse número
  if (href.includes('5511920859210')) {
    return '5511920859210';
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






