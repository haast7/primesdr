'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ArrowRight, Calendar, Clock, Target, Zap, Sparkles, CheckCircle, Users, TrendingUp } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';

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

export function HowItWorksHero() {
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'schedule_demo',
      cta_location: 'how_it_works_hero',
      cta_text: 'Agendar demonstração'
    });
  };

  const trustIndicators = [
    { icon: Clock, text: 'Configuração em 7 dias', highlight: 'Rápido' },
    { icon: Target, text: 'Resultados previsíveis', highlight: 'Confiável' },
    { icon: Zap, text: 'Automação 24/7', highlight: 'Eficiente' }
  ];

  const proofPoints = [
    { number: '112', label: 'Reuniões em 45 dias', icon: Calendar },
    { number: '39%', label: 'Taxa de aceitação', icon: TrendingUp },
    { number: '0', label: 'Bans em 2+ anos', icon: CheckCircle }
  ];

  return (
    <Section background="gradient" padding="xl" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative z-10 text-center max-w-6xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/20"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Como Funciona
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
          >
            Da configuração a resultados{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              em 7 dias
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-5xl mx-auto"
          >
            Veja exatamente como a Prime SDR transforma seu LinkedIn em um motor de reuniões previsíveis, passo a passo.
          </motion.p>

          {/* Proof Points */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto"
          >
            {proofPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{point.number}</div>
                <div className="text-white/80 text-sm">{point.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            className="mb-12"
          >
            <motion.button
              onClick={handleCTAClick}
              className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 text-white font-bold text-xl px-16 py-6 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 group overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efeito de brilho interno */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              {/* Conteúdo do botão */}
              <span className="relative flex items-center justify-center">
                <span className="mr-3 text-2xl">🚀</span>
                Agendar demonstração (15 min)
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-center space-x-4 text-white/90 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <indicator.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{indicator.text}</div>
                  <div className="text-sm text-white/70">{indicator.highlight}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Trust Elements */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/80"
          >
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Demonstração gratuita</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Resultados em 7 dias</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
