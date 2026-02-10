'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ArrowRight, TrendingUp } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export function ThiagoReisCTA() {
  const scrollToForm = () => {
    const formElement = document.getElementById('thiagoreis-form');
    formElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="text-center max-w-4xl mx-auto space-y-8"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Pronto para Gerar{' '}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              400 Conexões
            </span>{' '}
            e Marcar Reuniões{' '}
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              10x Mais Rápido
            </span>
            ?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-200"
          >
            Garanta sua condição exclusiva e descubra como transformar seu Linkedin em uma máquina de leads
          </motion.p>

          <motion.div variants={fadeInUp} className="pt-4">
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold text-lg md:text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-6 h-6" />
              <span>Garantir meu acesso</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
            </button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 pt-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Garantia de 90 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Resultados garantidos</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
