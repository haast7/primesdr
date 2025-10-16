'use client';

import React from 'react';
import { Button } from './Button';
import { useTypeformModal } from '@/lib/contexts/TypeformContext';
import { trackEvent } from '@/components/Analytics';

interface TypeformButtonProps {
  children: React.ReactNode;
  source: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function TypeformButton({ 
  children, 
  source, 
  variant = 'default',
  size = 'md',
  className = '',
  onClick
}: TypeformButtonProps) {
  const { openModal } = useTypeformModal();

  const handleClick = () => {
    // Track CTA click
    trackEvent('cta_click', {
      source: source,
      button_text: typeof children === 'string' ? children : 'CTA Button',
      timestamp: new Date().toISOString()
    });

    // Call custom onClick if provided
    onClick?.();

    // Open typeform modal
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
