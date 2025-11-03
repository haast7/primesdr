'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Clock } from 'lucide-react';
import { Button } from './Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';

interface ComingSoonModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceTitle?: string;
}

export function ComingSoonModal({ isOpen, onClose, resourceTitle }: ComingSoonModalProps) {
  const { t, language } = useLanguage();
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full -mr-16 -mt-16 opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-full -ml-12 -mb-12 opacity-30" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                aria-label="Fechar"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <Sparkles className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-gray-900 mb-4"
                >
                  {t.comingSoon.title}
                </motion.h2>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 mb-6"
                >
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {language === 'pt' ? (
                      <>Estamos preparando o <strong className="text-primary-600">melhor conteúdo possível</strong> para você.</>
                    ) : language === 'es' ? (
                      <>Estamos preparando el <strong className="text-primary-600">mejor contenido posible</strong> para ti.</>
                    ) : (
                      <>We&apos;re preparing the <strong className="text-primary-600">best possible content</strong> for you.</>
                    )}
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t.comingSoon.message2}
                  </p>

                  {resourceTitle && (
                    <div className="bg-primary-50 rounded-xl p-4 border border-primary-100">
                      <p className="text-sm text-primary-800 font-medium">
                        <Clock className="w-4 h-4 inline mr-2" />
                        <strong>{resourceTitle}</strong> {t.comingSoon.availableSoon}
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {t.comingSoon.button}
                  </Button>
                </motion.div>

                {/* Footer message */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-gray-500 mt-6"
                >
                  {t.comingSoon.footer}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

