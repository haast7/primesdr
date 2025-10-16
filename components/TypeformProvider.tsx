'use client';

import React from 'react';
import { TypeformModal } from '@/components/forms/TypeformModal';
import { TypeformProvider as TypeformContextProvider, useTypeformModal } from '@/lib/contexts/TypeformContext';

interface TypeformProviderProps {
  children: React.ReactNode;
}

function TypeformModalWrapper() {
  const { isOpen, closeModal } = useTypeformModal();
  return <TypeformModal isOpen={isOpen} onClose={closeModal} />;
}

export function TypeformProvider({ children }: TypeformProviderProps) {
  return (
    <TypeformContextProvider>
      {children}
      <TypeformModalWrapper />
    </TypeformContextProvider>
  );
}
