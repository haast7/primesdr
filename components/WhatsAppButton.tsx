'use client';

import React from 'react';
import { trackEvent } from '@/components/Analytics';
import { IMAGE_URLS } from '@/lib/imageLoader';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

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
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={handleWhatsAppClick}
        className="
          w-14 h-14 
          rounded-full 
          shadow-lg hover:shadow-xl 
          transition-all duration-300 
          hover:scale-110
          focus:outline-none focus:ring-4 focus:ring-green-300
          cursor-pointer
        "
        aria-label="Falar no WhatsApp"
      >
            <ImageWithFallback
              src={IMAGE_URLS.whatsapp}
              alt="WhatsApp"
              width={56}
              height={56}
              className="w-full h-full rounded-full object-cover"
              unoptimized
              fallback="/icons/whatsapp.png"
            />
      </button>
      
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
    </div>
  );
}
