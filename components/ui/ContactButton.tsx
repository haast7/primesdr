'use client';

import React from 'react';
import { Button } from './Button';
import { useContactModal } from '@/lib/contexts/ContactModalContext';
import { trackEvent } from '@/components/Analytics';
import { trackMetaEvent } from '@/components/tracking/MetaPixel';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

interface ContactButtonProps {
  children: React.ReactNode;
  source: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function ContactButton({ 
  children, 
  source, 
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}: ContactButtonProps) {
  const { openModal } = useContactModal();
  const { consent } = useCookieConsent();

  const handleClick = () => {
    // Track CTA click (GA4/GTM)
    trackEvent('cta_click', {
      source: source,
      button_text: typeof children === 'string' ? children : 'CTA Button',
      timestamp: new Date().toISOString()
    });

    // Track Meta Pixel InitiateCheckout event (se consentimento marketing estiver ativo)
    if (consent?.marketing && typeof window !== 'undefined' && window.fbq) {
      trackMetaEvent('InitiateCheckout', {
        content_name: typeof children === 'string' ? children : 'CTA Button',
        content_category: 'CTA Click',
        source: source
      });
    }

    // Call custom onClick if provided
    onClick?.();

    // Open contact modal
    openModal(source);
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}
