'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ArrowRight, Shield, TrendingUp, Users, Calendar, CheckCircle } from 'lucide-react';
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

// Componente para animação de números
function AnimatedNumber({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Componente do carrossel de logos
function LogoCarousel() {
  const logos = [
    { name: 'LABO', src: '/clientes/1-removebg-preview (1).png' },
    { name: 'cicatriclin', src: '/clientes/2-removebg-preview (1).png' },
    { name: 'owempay', src: '/clientes/3-removebg-preview (1).png' },
    { name: 'Backlinks', src: '/clientes/4-removebg-preview (1).png' },
    { name: 'Microlins', src: '/clientes/5-removebg-preview (1).png' },
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex animate-scroll space-x-16">
        {/* Múltiplas passadas para loop infinito suave */}
        {[...Array(6)].map((_, pass) =>
          logos.map((logo, index) => (
            <motion.div 
              key={`${pass}-${index}`} 
              className="flex-shrink-0"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={96}
                height={96}
                className="h-24 w-auto transition-all duration-300 hover:drop-shadow-xl"
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export function SocialProof() {
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'specialist_conversation',
      cta_location: 'social_proof_section',
      cta_text: 'Conversar com especialista'
    });
  };

  const metrics = [
    {
      icon: Users,
      number: 2347,
      suffix: '',
      title: 'Perfis ativos gerando conexões agora',
      color: 'text-white',
      bgGradient: 'from-blue-500 to-blue-600',
      iconBg: 'bg-white/20'
    },
    {
      icon: Calendar,
      number: 37000,
      prefix: '+',
      title: 'Reuniões agendadas com decisores B2B',
      color: 'text-white',
      bgGradient: 'from-emerald-500 to-emerald-600',
      iconBg: 'bg-white/20'
    },
    {
      icon: TrendingUp,
      number: 94,
      suffix: '%',
      title: 'Clientes com ROI positivo em até 90 dias',
      color: 'text-white',
      bgGradient: 'from-orange-500 to-orange-600',
      iconBg: 'bg-white/20'
    },
    {
      icon: Shield,
      number: 30,
      suffix: ' dias',
      title: 'Garantia de reembolso total se não gerar resultado',
      color: 'text-white',
      bgGradient: 'from-purple-500 to-purple-600',
      iconBg: 'bg-white/20'
    }
  ];

  const categories = [
    { name: 'SaaS', color: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' },
    { name: 'Consultorias', color: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg' },
    { name: 'Indústrias', color: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg' },
    { name: 'Agências', color: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg' }
  ];

  return (
    <Section background="white" padding="xl" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-40" />
      </div>
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-20 relative z-10"
        >
          {/* Header */}
            <motion.div 
              variants={fadeInUp} 
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-center max-w-5xl mx-auto space-y-8"
            >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full text-primary-700 font-semibold text-sm mb-4">
              ✨ Resultados comprovados
            </div>
            <h2 className="text-display font-bold bg-gradient-to-r from-gray-900 via-primary-600 to-accent-600 bg-clip-text text-transparent leading-tight">
              Empresas reais enchendo suas agendas com o Prime SDR agora.
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Mais de 2.000 perfis ativos gerando reuniões todos os dias, de startups a grandes corporações.
            </p>
          </motion.div>

          {/* Métricas */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${metric.bgGradient} rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 relative overflow-hidden group`}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
                
                <div className={`w-20 h-20 ${metric.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg backdrop-blur-sm`}>
                  <metric.icon className={`w-10 h-10 ${metric.color}`} />
                </div>
                <div className="mb-6">
                  <AnimatedNumber 
                    value={metric.number} 
                    prefix={metric.prefix} 
                    suffix={metric.suffix} 
                  />
                </div>
                <p className={`${metric.color} text-sm font-semibold leading-relaxed`}>
                  {metric.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof - Logos */}
          <motion.div 
            variants={fadeInUp} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-100 to-primary-100 rounded-full text-accent-700 font-semibold text-sm mb-4">
                🏆 Parceiros de sucesso
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
                Empresas que confiam no Prime SDR
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <motion.span
                    key={category.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full text-sm font-bold ${category.color} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {category.name}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <LogoCarousel />
              <div className="text-center">
                <motion.span 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  +200 empresas confiam na Prime SDR
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Garantia e CTA */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden"
          >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full" />
            
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
              <div className="flex items-center justify-center space-x-6 mb-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-8 h-8" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                🛡️ Garantia Prime: resultados em 30 dias ou reembolso total.
              </h3>
              
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                📈 Resultados previsíveis. Zero risco.
              </p>

              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-50 group text-xl px-12 py-6 shadow-2xl font-bold rounded-2xl"
                    onClick={handleCTAClick}
                  >
                    Conversar com especialista
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-16.66%);
          }
        }
        
        .animate-scroll {
          animation: scroll 50s linear infinite;
        }
      `}</style>
    </Section>
  );
}
