'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { trackEvent } from '@/components/Analytics';

interface WhatsAppButtonProps {
  phone: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({ 
  phone, 
  message = "Olá! Gostaria de saber mais sobre o Prime SDR.",
  className = ""
}: WhatsAppButtonProps) {
  
  const handleWhatsAppClick = () => {
    // Track the WhatsApp click event
    trackEvent('whatsapp_click', {
      phone: phone,
      message: message,
      source: 'floating_button'
    });

    // Create WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`
        fixed bottom-6 right-6 z-50 
        bg-green-500 hover:bg-green-600 
        text-white 
        rounded-full 
        w-14 h-14 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 
        flex items-center justify-center
        group
        ${className}
      `}
      aria-label="Falar no WhatsApp"
    >
      <Image
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        width={24}
        height={24}
        className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
        unoptimized
      />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 
                      bg-gray-900 text-white text-sm px-3 py-2 rounded-lg 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-200
                      whitespace-nowrap pointer-events-none">
        Falar no WhatsApp
        <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 
                        w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent 
                        border-b-4 border-b-transparent"></div>
      </div>
    </Button>
  );
}
