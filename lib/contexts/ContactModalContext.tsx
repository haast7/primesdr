'use client';

import React, { createContext, useContext, useState } from 'react';
import { ContactModal } from '@/components/forms/ContactModal';

interface ContactModalContextType {
  openModal: (source: string) => void;
  closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(undefined);

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [source, setSource] = useState('');

  const openModal = (source: string) => {
    setSource(source);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSource('');
  };

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const context = useContext(ContactModalContext);
  if (context === undefined) {
    throw new Error('useContactModal must be used within a ContactModalProvider');
  }
  return context;
}
