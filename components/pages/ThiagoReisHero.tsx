'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { ArrowRight, Zap, TrendingUp, CheckCircle } from 'lucide-react';

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
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image - Mais Evidente */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/thiagoreis.jpg?alt=media&token=3238cfab-341e-4452-9c1a-15677347f7fb"
          alt="Profissionais em reunião de negócios"
          fill
          className="object-cover object-center opacity-60"
          priority
          quality={90}
          unoptimized
        />
        {/* Gradiente intenso da esquerda (azul escuro) para direita (azul claro) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/70 to-blue-700/30"></div>
        {/* Gradiente adicional com azul Prime SDR para mais intensidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-blue-900/40 to-transparent"></div>
        {/* Overlay inferior para destacar conteúdo */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
      </div>

      {/* Efeitos de luz sutis */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10 py-16 md:py-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={{
            initial: {},
            animate: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="text-center max-w-4xl mx-auto px-4"
        >
          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 shadow-xl mb-8 md:mb-10"
          >
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/logo_light.png?alt=media&token=4a6699f4-f27c-422e-a7dd-38056b04e128"
              alt="Prime SDR"
              width={32}
              height={32}
              className="h-6 w-6 object-contain"
              priority
              unoptimized
            />
            <span className="text-white font-bold text-sm drop-shadow-lg">Oferta exclusiva até 13 de fevereiro</span>
          </motion.div>

          {/* Main Headline - Melhor espaçamento e simetria */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] drop-shadow-2xl mb-6 md:mb-8"
          >
            <span className="block">Gere mais de</span>
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-xl mt-2">
              15 reuniões qualificadas por mês no LinkedIn
            </span>
            <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-black text-green-400 leading-tight drop-shadow-xl">
              sem risco: ou funciona, ou você não paga.
            </span>
          </motion.h1>

          {/* Benefits - Lado a lado no desktop, fonte menor */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12"
          >
            <div className="flex items-center gap-2 md:gap-3 text-white drop-shadow-lg bg-white/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/20 w-full md:w-auto">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold">Média de 400+ conexões/mês</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-white drop-shadow-lg bg-white/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/20 w-full md:w-auto">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold">15-25 reuniões agendadas garantidas</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-white drop-shadow-lg bg-white/10 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/20 w-full md:w-auto">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm md:text-base font-semibold">ROI positivo em 60 dias</span>
            </div>
          </motion.div>

          {/* CTA Button - Estilo elaborado do segundo print */}
          <motion.div
            variants={fadeInUp}
            className="mb-4"
          >
            <button
              onClick={scrollToForm}
              className="group relative inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white font-bold text-lg md:text-xl rounded-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity -z-10"></div>
              {/* Ícone TrendingUp */}
              <TrendingUp className="w-6 h-6 md:w-7 md:h-7" />
              <span>Começar teste de 90 dias</span>
              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          {/* Texto abaixo do botão */}
          <motion.p
            variants={fadeInUp}
            className="text-sm md:text-base text-white/90 drop-shadow-md font-medium"
          >
            Sem contratar SDR. Sem perder tempo. Sem riscos.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
