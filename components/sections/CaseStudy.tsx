'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { IMAGES } from '@/lib/images';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowRight, TrendingUp, Users, Calendar, DollarSign } from 'lucide-react';
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

export function CaseStudy() {
  const handleCTAClick = () => {
    trackEvent('cta_click', {
      cta_type: 'case_study',
      cta_location: 'case_study_section',
      cta_text: 'Replicar isso no meu negócio'
    });
  };

  const metrics = [
    {
      icon: Calendar,
      value: '112',
      label: 'Reuniões qualificadas',
      period: '403 MQLs gerados',
      extraText: 'Taxa de aceitação: 35%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: DollarSign,
      value: 'R$ 480 mil',
      label: 'de Pipeline',
      period: '90 dias de operação',
      extraText: '8 clientes X R$60k/ano',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Users,
      value: 'Clientes',
      label: 'Fechando agora',
      period: 'Contrato de 12 meses',
      extraText: 'Ticket médio: R$ 5k/mês',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: TrendingUp,
      value: 'Payback',
      label: 'no primeiro mês',
      period: 'ROI de 4.066% sobre o valor anual dos contratos',
      extraText: 'Em 90 dias de operação',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-gray-50 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="relative space-y-20"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200/50 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">Caso Real • Agência de Marketing</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                R$ 480 mil
              </span>
              <br />
              <span className="text-gray-800">em pipeline</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-lg font-semibold text-gray-700">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                112 reuniões
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                90 dias
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                payback no primeiro mês
              </div>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Uma agência de marketing digital vivia com o time apagando incêndio, zero tempo pra prospectar. 
              <span className="font-semibold text-gray-800"> Rodamos a operação da Prime SDR:</span>
            </p>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 text-center hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 group-hover:border-blue-200/50">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 ${metric.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <metric.icon className={`w-8 h-8 ${metric.color}`} />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{metric.value}</div>
                    <div className="text-base font-semibold text-gray-700 mb-2">{metric.label}</div>
                    <div className="text-sm text-gray-500 font-medium mb-1">{metric.period}</div>
                    <div className="text-sm text-gray-600 font-semibold">{metric.extraText}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Case Details */}
          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
            {/* Content - Methodology + Testimonial */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Methodology */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100/50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">?</span>
                  </div>
                  Como conseguimos isso?
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">Você monta, a gente executa ➡️ SDR fecha.</span> Você configura a cadência (mensagens, timing, ações). Nossa automação roda 24/7 com precisão. Lead respondeu? Pausa automática e SDR humano qualifica e agenda no seu CRM.
                </p>
              </div>

              {/* Testimonial */}
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 shadow-2xl shadow-blue-500/5">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl font-bold">"</span>
                  </div>
                  
                  <blockquote className="text-xl text-gray-800 leading-relaxed mb-8 font-medium">
                    "Antes do Prime SDR, a gente vivia correndo atrás de lead. Agora é o contrário: os leads é que correm atrás da gente. A agenda tá lotada pelas próximas três semanas. Mudou completamente o jogo."
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden">
                      <Image
                        src={IMAGES.profile}
                        alt="Erick Oliveira"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Erick Oliveira</div>
                      <div className="text-sm text-gray-600 font-medium">Dono de Agência</div>
                      <div className="text-xs text-blue-600 font-semibold mt-1">Haast - Marketing Digital</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </Container>
      
      {/* CTA - Full Width */}
      <motion.div variants={fadeInUp} className="text-center mt-24">
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-12 w-full shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-purple-500/10"></div>
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          
          <div className="relative">
            <h3 className="text-3xl font-bold text-white mb-6">
              Saiba se o Prime SDR é para você
            </h3>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            60 segundos pra saber se sua operação pode gerar 100+ reuniões por mês no LinkedIn.
            </p>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-lg px-8 py-4"
              onClick={handleCTAClick}
            >
              Começar agora
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

