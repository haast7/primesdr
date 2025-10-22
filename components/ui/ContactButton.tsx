'use client';

import React from 'react';
import { Button } from './Button';
import { useContactModal } from '@/lib/contexts/ContactModalContext';
import { trackEvent } from '@/components/Analytics';

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

  const handleClick = () => {
    // Track CTA click
    trackEvent('cta_click', {
      source: source,
      button_text: typeof children === 'string' ? children : 'CTA Button',
      timestamp: new Date().toISOString()
    });

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
