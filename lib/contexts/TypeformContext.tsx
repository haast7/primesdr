'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { trackEvent } from '@/components/Analytics';

interface TypeformContextType {
  isOpen: boolean;
  openModal: (source?: string) => void;
  closeModal: () => void;
}

const TypeformContext = createContext<TypeformContextType | undefined>(undefined);

interface TypeformProviderProps {
  children: ReactNode;
}

export function TypeformProvider({ children }: TypeformProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback((source?: string) => {
    setIsOpen(true);
    
    // Track modal opening
    trackEvent('typeform_modal_opened', {
      source: source || 'unknown',
      timestamp: new Date().toISOString()
    });
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    
    // Track modal closing
    trackEvent('typeform_modal_closed', {
      timestamp: new Date().toISOString()
    });
  }, []);

  return (
    <TypeformContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </TypeformContext.Provider>
  );
}

export function useTypeformModal() {
  const context = useContext(TypeformContext);
  if (context === undefined) {
    throw new Error('useTypeformModal must be used within a TypeformProvider');
  }
  return context;
}
