'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export function ThiagoReisHero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('thiagoreis-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 min-h-[90vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10 py-12 md:py-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="text-center max-w-5xl mx-auto space-y-6 md:space-y-8 px-4"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold text-sm">Condições exclusivas até 11 de fevereiro</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            <span className="block mb-3">Ou você gera</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              400 novas conexões
            </span>
            <span className="block mt-3">e marca reuniões</span>
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              10x mais rápido
            </span>
            <span className="block mt-3 text-2xl md:text-3xl lg:text-4xl">ou devolvemos seu dinheiro</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Transforme seu LinkedIn em uma máquina de geração de leads. 
            <span className="block mt-2 font-semibold text-white">
              Sem contratar SDR. Sem perder tempo. Sem riscos.
            </span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            className="pt-2"
          >
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-base md:text-lg rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              <span>Garantir meu acesso</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6 pt-4 md:pt-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm">Garantia de 90 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm">Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs md:text-sm">Resultados em 30 dias</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
