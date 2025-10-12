'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function FinalCTA() {
  const handleCTAClick = (ctaType: string) => {
    trackEvent('cta_click', {
      cta_type: ctaType,
      cta_location: 'final_cta_section',
      cta_text: ctaType === 'primary' ? 'Começar agora sem risco' : 'Falar com especialista'
    });
  };

  const benefits = [
    {
      icon: Shield,
      title: 'Garantia de 90 dias',
      description: 'Não bateu meta? Reembolso integral'
    },
    {
      icon: Clock,
      title: 'Ativo em 7 dias',
      description: 'Do kickoff aos primeiros resultados'
    },
    {
      icon: CheckCircle,
      title: 'Sem compromisso',
      description: 'Teste grátis, cancele quando quiser'
    }
  ];

  return (
    <Section background="gradient" padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-display font-bold text-white leading-tight">
                Pronto para encher a agenda do seu time?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Teste 7 dias grátis. Não precisa cartão. Cancela quando quiser.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-50 group text-lg px-8 py-4"
                onClick={() => handleCTAClick('primary')}
              >
                Começar agora sem risco
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="text-white border-white/30 hover:bg-white/10 group text-lg px-8 py-4"
                onClick={() => handleCTAClick('secondary')}
              >
                Falar com especialista
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="pt-8 border-t border-white/20"
            >
              <p className="text-white/80 text-sm mb-4">
                Mais de 2.000 perfis ativos gerando reuniões agora
              </p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                {/* Placeholder for client logos */}
                <div className="h-8 w-24 bg-white/20 rounded"></div>
                <div className="h-8 w-24 bg-white/20 rounded"></div>
                <div className="h-8 w-24 bg-white/20 rounded"></div>
                <div className="h-8 w-24 bg-white/20 rounded"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

