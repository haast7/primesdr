'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ContactButton } from '@/components/ui/ContactButton';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`animated-number-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2500; // 2.5 segundos para animação mais suave
    const steps = 100; // Mais steps para animação mais fluida
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
  }, [value, isVisible]);

  return (
    <span 
      id={`animated-number-${value}`}
      className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Componente do carrossel de logos
function LogoCarousel() {
  const logos = [
    { name: 'Cliente 1', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/1.png?alt=media&token=e5ff13f9-d2ad-422f-94db-d6d80b297caa' },
    { name: 'Cliente 2', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/2.png?alt=media&token=78d45119-6f39-4ddc-b90e-3d3d8a2426a9' },
    { name: 'Cliente 3', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/3.png?alt=media&token=68721a73-d1b8-4af2-865a-29e376b98b89' },
    { name: 'Cliente 4', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/4.png.webp?alt=media&token=e0bc679b-d2bb-4336-b719-7f12a2e461a8' },
    { name: 'Cliente 5', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/5.png?alt=media&token=2521dce8-2667-4cf6-9c85-0ff3369aa809' },
    { name: 'Cliente 6', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/6.jpg?alt=media&token=6974823e-c6ca-4120-b5e3-0e32893c9b47' },
    { name: 'Cliente 7', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/7.jpg?alt=media&token=1ffd07c1-c5a2-4190-9ae8-8744a5c1631e' },
    { name: 'Cliente 8', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/8.png?alt=media&token=4bfe0d81-bd3b-48ad-a112-49de2cccde40' },
    { name: 'Cliente 9', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/9.png?alt=media&token=b26d6c7b-67f7-4b1f-9f35-3da7aef0e637' },
    { name: 'Cliente 10', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/10.png?alt=media&token=65e6a3a5-7fde-4a04-bfc7-4929ae99f825' },
    { name: 'Cliente 11', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/11.png?alt=media&token=1cd560df-07eb-4f0b-9f64-96f1812848d1' },
    { name: 'Cliente 12', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/12.png?alt=media&token=90c1af78-4935-4abb-b67a-cde62a0d350d' },
    { name: 'Cliente 13', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/13.png?alt=media&token=aabb4da4-e105-40d9-b7c6-e1358d1bc53f' },
    { name: 'Cliente 14', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/14.png?alt=media&token=8b017220-8ff8-4770-99ff-eec9b40c6c2d' },
    { name: 'Cliente 15', src: 'https://firebasestorage.googleapis.com/v0/b/prime-sdr.firebasestorage.app/o/15.png?alt=media&token=96f100f9-051e-468e-8fcb-7fe670d0515f' },
  ];

  return (
    <div className="relative overflow-hidden w-full bg-white rounded-2xl p-6 shadow-md">
      <div 
        className="flex space-x-12"
        style={{
          animation: 'logoScroll 15s linear infinite',
          willChange: 'transform'
        }}
      >
        {/* Primeira passada */}
        {logos.map((logo, index) => (
          <div 
            key={`first-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={80}
              height={80}
              className="h-12 w-auto md:h-16 object-contain"
              quality={90}
              unoptimized={false}
            />
          </div>
        ))}
        {/* Segunda passada para loop */}
        {logos.map((logo, index) => (
          <div 
            key={`second-${index}`}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={80}
              height={80}
              className="h-12 w-auto md:h-16 object-contain"
              quality={90}
              unoptimized={false}
            />
          </div>
        ))}
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
      number: 37148,
      prefix: '',
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
      number: 90,
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
                  +2.000 empresas confiam na Prime SDR
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
                🛡️ Garantia Prime: resultados em 90 dias ou reembolso total.
              </h3>
              
              <p className="text-xl md:text-2xl text-white/90 font-medium">
                📈 Resultados previsíveis. Zero risco.
              </p>

              <div className="pt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ContactButton
                    source="social-proof-cta"
                    size="lg"
                    className="bg-white text-primary-600 hover:bg-gray-50 group text-xl px-12 py-6 shadow-2xl font-bold rounded-2xl"
                  >
                    Conversar com especialista
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </ContactButton>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      <style jsx global>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Section>
  );
}
