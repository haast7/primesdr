'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ContactButton } from '@/components/ui/ContactButton';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { ArrowRight, Check, Star, Users, Zap, Crown, MessageCircle, Sparkles, TrendingUp, Clock, Target, DollarSign, UserCheck, Calendar, Shield, X, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/components/Analytics';
import { useLanguage } from '@/lib/contexts/LanguageContext';

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

export function Pricing() {
  const { t } = useLanguage();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleCTAClick = (plan: string, ctaType: string) => {
    trackEvent('cta_click', {
      cta_type: ctaType,
      cta_location: 'pricing_section',
      cta_text: ctaType === 'primary' ? t.pricing.plans.starter.cta : t.pricing.plans.growth.cta,
      plan_name: plan
    });
  };

  const plans = [
    {
      name: 'Starter',
      badge: 'PARA COMEÇAR',
      description: 'Para quem quer provar que funciona antes de escalar.',
      features: [
        'Até 3 perfis LinkedIn ativos',
        '2 campanhas simultâneas por perfil',
        'IA de personalização por cargo/setor',
        'Templates prontos (10+ indústrias)',
        'Dashboard com métricas em tempo real',
        'Integração CRM (HubSpot, Pipedrive, RD)',
        'Suporte via chat (resposta em 24h)',
        '7 dias grátis'
      ],
      idealFor: 'Fundadores e pequenos times testando prospecção sistemática',
      proof: 'Payback no primeiro mês. Ou reembolso integral.',
      cta: {
        primary: 'Começar teste grátis',
        secondary: 'Falar com especialista'
      },
      color: 'blue',
      icon: Users
    },
    {
      name: 'Growth',
      badge: 'MELHOR CUSTO-BENEFÍCIO',
      popular: true,
      description: 'Para times que querem resultados previsíveis sem depender de mídia paga.',
      features: [
        'Tudo do Starter, mais:',
        'Até 10 perfis LinkedIn ativos',
        '4 campanhas simultâneas por perfil',
        'SDR compartilhado (qualifica e agenda reuniões)',
        'Revisão quinzenal de performance',
        'Testes A/B automatizados',
        'Relatórios executivos semanais',
        'Suporte prioritário (resposta em 6h)',
        'Onboarding guiado (7 dias)'
      ],
      idealFor: 'Operações comerciais que precisam encher agenda todo mês',
      proof: 'Cliente agência: 480k em pipeline, 8 clientes, ticket alto/mês',
      cta: {
        primary: 'Começar teste grátis',
        secondary: 'Ver cases do meu segmento'
      },
      color: 'green',
      icon: Zap
    },
    {
      name: 'Scale',
      badge: 'SOLUÇÃO CUSTOMIZADA',
      description: 'Para empresas que precisam de uma solução sob medida.',
      isCustom: true,
      customMessage: 'Plano personalizado',
      features: [
        'Tudo do Growth, mais:',
        'Perfis LinkedIn ilimitados',
        '8+ campanhas simultâneas por perfil',
        'SDR dedicado (exclusivo pra sua operação)',
        'Copy personalizada por ICP',
        'Listas curadas + enriquecimento de dados',
        'Playbooks avançados do seu segmento',
        'Garantia de X reuniões/mês (definida no kickoff)',
        'Account Manager dedicado',
        'Onboarding VIP (3 dias + consultoria estratégica)',
        'Acesso antecipado a novos recursos'
      ],
      idealFor: 'Empresas que querem transformar LinkedIn em motor de receita previsível',
      cta: {
        primary: 'Falar com consultor',
        secondary: 'Agendar reunião estratégica'
      },
      color: 'purple',
      icon: Crown
    }
  ];

  const getPriceColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600'
    };
    return colors[color as keyof typeof colors] || 'text-gray-600';
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      purple: 'bg-purple-100 text-purple-700'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-24">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
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
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              {t.pricing.headline}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.pricing.headline}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {t.pricing.subtitle}
            </p>

          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={fadeInUp}
                transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="relative group"
              >
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-xl">
                      <Star className="w-4 h-4 mr-2" />
                      {t.pricing.plans.growth.popular}
                    </div>
                  </div>
                )}

                <Card className={`h-full relative transition-all duration-300 group-hover:scale-105 ${
                  plan.popular 
                    ? 'border-2 border-blue-300 shadow-2xl bg-gradient-to-br from-white to-blue-50/30' 
                    : 'border border-gray-200 shadow-lg hover:shadow-xl bg-white'
                }`}>
                  <div className="flex flex-col h-full p-8">
                    {/* Conteúdo principal */}
                    <div className="flex-grow space-y-8">
                    {/* Header */}
                    <div className="text-center">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold mb-6 ${getBadgeColor(plan.color)}`}>
                        {plan.badge}
                      </div>
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <plan.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-3">{plan.name}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Price */}
                    <div className="text-center">
                      {plan.isCustom ? (
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900">
                              {plan.customMessage}
                            </h3>
                            <div className="flex items-center justify-center space-x-2 mt-4">
                              <Sparkles className="w-5 h-5 text-purple-500" />
                              <span className="text-purple-600 font-semibold">
                                Consultoria gratuita incluída
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-4">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal For */}
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-100">
                      <p className="text-base text-gray-700 leading-relaxed">
                        <strong className="text-gray-900">Ideal para:</strong> {plan.idealFor}
                      </p>
                    </div>

                    {/* Proof */}
                    {plan.proof && (
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                        <p className="text-base text-blue-800 leading-relaxed">
                          <strong className="text-blue-900">💰</strong> "{plan.proof}"
                        </p>
                      </div>
                    )}
                    </div>

                    {/* CTAs - sempre no final */}
                    <div className="mt-8 space-y-4">
                      {plan.isCustom ? (
                        <>
                          <ContactButton
                            source={`pricing-${plan.name.toLowerCase()}-primary`}
                            className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group relative overflow-hidden"
                          >
                            {/* Efeito de brilho interno */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            
                            <span className="relative flex items-center justify-center">
                              <MessageCircle className="w-6 h-6 mr-3" />
                              {plan.cta.primary}
                              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </ContactButton>
                          
                          <ContactButton
                            source={`pricing-${plan.name.toLowerCase()}-secondary`}
                            className="w-full bg-white border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-purple-700 font-semibold text-base py-3 px-6 rounded-xl transition-all duration-300 group"
                          >
                            <span className="flex items-center justify-center">
                              <Calendar className="w-5 h-5 mr-2" />
                              {plan.cta.secondary}
                            </span>
                          </ContactButton>
                          
                          {/* Trust Indicators */}
                          <div className="text-center space-y-2 pt-2">
                            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Shield className="w-4 h-4 text-green-500" />
                                <span>Consultoria gratuita</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-blue-500" />
                                <span>Resposta em 2h</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-500">
                              Sem compromisso • Sem cartão • Sem pegadinhas
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                      <ContactButton
                        source={`pricing-${plan.name.toLowerCase()}-primary`}
                        size="lg"
                        className={`w-full text-lg font-bold py-4 ${
                          plan.popular 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl' 
                            : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl'
                        }`}
                      >
                        {plan.cta.primary}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </ContactButton>
                      <ContactButton
                        source={`pricing-${plan.name.toLowerCase()}-secondary`}
                        variant="outline"
                        size="lg"
                        className="w-full text-base font-semibold py-3 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                      >
                        {plan.cta.secondary}
                      </ContactButton>
                        </>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Modern Comparison Table */}
          <motion.div 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative"
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl blur-3xl opacity-50"></div>
            
            <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 text-center">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    SDR Interno vs Prime SDR
                </h3>
                  <p className="text-blue-100 text-lg">
                    Veja os números que fazem a diferença
                  </p>
                </div>
              </div>

              {/* Table Container */}
              <div className="p-8">
              <div className="overflow-x-auto">
                  <div className="min-w-full">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <UserCheck className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Estratégia</h4>
                        <p className="text-sm text-gray-500">Despesas fixas</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Zap className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">SDR Interno</h4>
                        <p className="text-sm text-gray-500">Método tradicional</p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-bold text-gray-900">Prime SDR</h4>
                        <p className="text-sm text-gray-500">Método inteligente</p>
                      </div>
                    </div>

                    {/* Comparison Items */}
                    <div className="space-y-4">
                      {/* Custo Mensal */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Custo mensal</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="w-5 h-5 text-red-500" />
                            <span className="text-gray-600 font-medium">Custo alto</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">por pessoa</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-bold">Economia significativa</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">com Prime SDR</p>
                        </div>
                      </motion.div>

                      {/* Perfis Ativos */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Perfis ativos</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="w-5 h-5 text-red-500" />
                            <span className="text-gray-600 font-medium">1 perfil</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-bold">6 perfis simultâneos</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Tempo de Setup */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Tempo de setup</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="w-5 h-5 text-red-500" />
                            <span className="text-gray-600 font-medium">3–6 meses</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">ramp-up</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-bold">7 dias</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">ativo</p>
                        </div>
                      </motion.div>

                      {/* Método */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Método</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="w-5 h-5 text-red-500" />
                            <span className="text-gray-600 font-medium text-sm">Depende da disciplina</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-bold text-sm">Automação + inteligência</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">100+ empresas</p>
                        </div>
                      </motion.div>

                      {/* Reuniões/Mês */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                            <Calendar className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Reuniões/mês</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="w-5 h-5 text-red-500" />
                            <span className="text-gray-600 font-medium">20–30</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">se rodar bem</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-bold">80–120</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">histórico real</p>
                        </div>
                      </motion.div>

                      {/* Disponibilidade */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                            <Shield className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-semibold text-gray-900">Disponibilidade</span>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <X className="w-5 h-5 text-red-500" />
                            <span className="text-gray-600 font-medium text-sm">Férias, turnover</span>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center space-x-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500" />
                            <span className="text-green-600 font-bold">24/7</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">ininterrupta</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
              </div>

                {/* Result Summary */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 p-8 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl text-center relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-3">
                      Resultado Final
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-3xl font-bold mb-1">Economia significativa</div>
                        <div className="text-green-100">Economia mensal</div>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="text-3xl font-bold mb-1">3x mais</div>
                        <div className="text-green-100">Reuniões geradas</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            variants={fadeInUp} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <p className="text-gray-700 font-semibold mb-8 text-lg">
              "Não sabe qual plano escolher?" Fale com um especialista (2 min)
            </p>
            <motion.button
              className="bg-white border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efeito de brilho interno */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <span className="relative flex items-center justify-center">
                <MessageCircle className="w-6 h-6 mr-3" />
              Falar com especialista
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
