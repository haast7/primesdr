'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '@/lib/contexts/LanguageContext';

interface ThankYouScreenProps {
  formData: any;
  onClose: () => void;
}

export function ThankYouScreen({ formData, onClose }: ThankYouScreenProps) {
  const { t } = useLanguage();
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-8"
    >
      {/* Success Icon and Message */}
      <motion.div variants={fadeInUp} className="text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">
          {t.thankYouScreen.title}
        </h2>
        <p className="text-lg text-gray-600">
          {t.thankYouScreen.message}
        </p>
      </motion.div>

      {/* Google Calendar Widget */}
      <motion.div variants={fadeInUp} className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 text-center">
          {t.thankYouScreen.calendar.title}
        </h3>
        <p className="text-gray-600 text-center">
          {t.thankYouScreen.calendar.subtitle}
        </p>
        
        {/* Google Calendar Widget */}
        <div className="bg-white rounded-xl shadow-lg p-4">
          <iframe 
            src="https://calendar.google.com/calendar/embed?src=c_fdd9a2fb30183077eeba4c03db10260b67b2f4bf7f2cd42035395927ce878984%40group.calendar.google.com&ctz=America%2FBahia" 
            style={{ border: 0 }} 
            width="100%" 
            height="600" 
            frameBorder="0" 
            scrolling="no"
            className="rounded-lg"
          />
        </div>
      </motion.div>

      {/* Alternative CTA */}
      <motion.div variants={fadeInUp} className="text-center space-y-4">
        <p className="text-gray-600">
          {t.thankYouScreen.whatsapp.label}
        </p>
        <button
          onClick={() => {
            window.open('https://api.whatsapp.com/send/?phone=5511932001771&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+os+servi%C3%A7os+do+PrimeSDR.&type=phone_number&app_absent=0', '_blank');
          }}
          className="inline-flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
        >
          <span>💬</span>
          <span>{t.thankYouScreen.whatsapp.button}</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
