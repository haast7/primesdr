'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Check, 
  Star, 
  Users, 
  Zap, 
  Crown, 
  MessageCircle, 
  Sparkles, 
  TrendingUp, 
  Clock, 
  Target, 
  DollarSign, 
  UserCheck, 
  Calendar, 
  Shield, 
  X, 
  CheckCircle2,
  ArrowRight,
  Heart,
  Award,
  BarChart3,
  Globe,
  Phone,
  Mail,
  Building2,
  Briefcase,
  GraduationCap,
  Gavel,
  Wrench,
  Eye,
  Scale,
  UserPlus,
  Rocket,
  Lightbulb,
  MapPin
} from 'lucide-react';

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

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      badge: 'PARA COMEÇAR',
      description: 'Para quem quer provar que funciona antes de escalar.',
      monthlyPrice: 134,
      yearlyPrice: 1.365,
      yearlyDiscount: 15,
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
      monthlyPrice: 115,
      yearlyPrice: 1.115,
      yearlyDiscount: 20,
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
      proof: 'Cliente agência: R$ 480k em pipeline, 8 clientes, ticket R$ 5k/mês',
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

  const stats = [
    { number: '+2.000', label: 'Perfis LinkedIn ativos gerando conexões agora', icon: Users },
    { number: '112', label: 'Reuniões geradas em média por cliente nos primeiros 45 dias', icon: Calendar },
    { number: '39%', label: 'Taxa média de aceitação de conexão (3x acima da média do mercado)', icon: TrendingUp },
    { number: '22%', label: 'Taxa média de resposta (leads engajados, não robôs)', icon: Mail },
    { number: '95%', label: 'Clientes com ROI positivo em até 90 dias', icon: DollarSign },
    { number: '0', label: 'Banimentos do LinkedIn em 2+ anos de operação', icon: Shield }
  ];

  const segments = [
    { icon: Building2, title: 'SaaS & Tech', description: 'Plataformas, softwares, fintechs, HRtechs, marktechs' },
    { icon: Briefcase, title: 'Consultorias', description: 'Estratégia, transformação digital, gestão, RH' },
    { icon: Zap, title: 'Agências', description: 'Marketing, performance, branding, desenvolvimento' },
    { icon: Wrench, title: 'Indústria', description: 'Fornecedores B2B, equipamentos, soluções industriais' },
    { icon: GraduationCap, title: 'Educação corporativa', description: 'Treinamentos, capacitação, desenvolvimento de líderes' },
    { icon: Gavel, title: 'Serviços profissionais', description: 'Jurídico, contábil, auditoria, facilities' }
  ];

  const commitments = [
    { icon: Eye, title: 'Transparência total', description: 'Você acompanha tudo: mensagens enviadas, taxas de aceitação, respostas, reuniões. Dashboard atualizado em tempo real.' },
    { icon: Shield, title: 'Conformidade com LGPD', description: 'Tratamos dados pessoais com responsabilidade. Política de privacidade clara, sem letra miúda.' },
    { icon: CheckCircle2, title: 'Segurança no LinkedIn', description: 'Respeitamos todos os limites (30-40 convites/dia), variamos cadências, aquecemos perfis. Zero risco de ban.' },
    { icon: Phone, title: 'Suporte real', description: 'Gente de verdade respondendo, ajustando campanhas, otimizando resultados. Não é chatbot, é parceria.' },
    { icon: Award, title: 'Garantia de 30 dias', description: 'Não gerou reuniões qualificadas? Reembolso integral. Sem burocracia, sem desculpas.' }
  ];

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-700',
      green: 'bg-green-100 text-green-700',
      purple: 'bg-purple-100 text-purple-700'
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <>
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white font-semibold text-sm mb-6">
                <Sparkles className="w-5 h-5 mr-2" />
                Planos e Preços
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Escolha o plano ideal para sua empresa
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Garantia de 30 dias, sem taxa de setup e ROI positivo em até 90 dias. Teste sem risco.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Pricing Plans */}
      <Section background="white" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-20 relative z-10"
          >
            {/* Billing Toggle */}
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center space-x-6">
                <span className={`text-lg font-semibold transition-colors ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
                  Mensal
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-8 w-14 items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-lg"
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-all duration-300 ${
                      billingCycle === 'yearly' ? 'translate-x-7' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-lg font-semibold transition-colors ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>
                  Anual
                  <span className="ml-2 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full font-medium">
                    -20%
                  </span>
                </span>
              </div>
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
                        MAIS POPULAR
                      </div>
                    </div>
                  )}

                  <Card className={`h-full relative transition-all duration-300 group-hover:scale-105 ${
                    plan.popular 
                      ? 'border-2 border-blue-300 shadow-2xl bg-gradient-to-br from-white to-blue-50/30' 
                      : 'border border-gray-200 shadow-lg hover:shadow-xl bg-white'
                  }`}>
                    <div className="flex flex-col h-full p-8">
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
                          ) : (
                            <>
                              <div className="flex items-baseline justify-center">
                                <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                  R$ {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                                </span>
                                <span className="text-gray-600 ml-2 text-lg">/usuário/mês</span>
                              </div>
                              {billingCycle === 'yearly' && (
                                <div className="flex items-center justify-center space-x-3 mt-3">
                                  <span className="text-lg text-gray-500 line-through">R$ {plan.monthlyPrice}</span>
                                  <span className="text-lg text-green-600 font-bold">
                                    Economize {plan.yearlyDiscount}%
                                  </span>
                                </div>
                              )}
                            </>
                          )}
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

                      {/* CTAs */}
                      <div className="mt-8 space-y-4">
                        {plan.isCustom ? (
                          <>
                            <Button
                              size="lg"
                              className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold text-lg py-4 px-6 rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                            >
                              <MessageCircle className="w-6 h-6 mr-3" />
                              {plan.cta.primary}
                              <ArrowRight className="w-6 h-6 ml-3" />
                            </Button>
                            
                            <Button
                              variant="outline"
                              size="lg"
                              className="w-full border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 text-purple-700 font-semibold text-base py-3 px-6 rounded-xl transition-all duration-300"
                            >
                              <Calendar className="w-5 h-5 mr-2" />
                              {plan.cta.secondary}
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              size="lg"
                              className={`w-full text-lg font-bold py-4 ${
                                plan.popular 
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl' 
                                  : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-lg hover:shadow-xl'
                              }`}
                            >
                              {plan.cta.primary}
                              <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="lg"
                              className="w-full text-base font-semibold py-3 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                            >
                              {plan.cta.secondary}
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Números que comprovam */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Números que comprovam
              </h2>
              <p className="text-xl text-gray-600">
                Resultados reais de quem usa Prime SDR
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-8 text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <stat.icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {stat.label}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Para quem servimos */}
      <Section background="white" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Para quem servimos
              </h2>
              <p className="text-xl text-gray-600">
                Empresas B2B que confiam na Prime SDR
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segments.map((segment, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <segment.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {segment.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {segment.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Nossos compromissos */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Nossos compromissos
              </h2>
              <p className="text-xl text-gray-600">
                Garantias que você pode cobrar
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <commitment.icon className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {commitment.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {commitment.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* CTA Final */}
      <Section background="primary" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Pronto para encher sua agenda?
              </h2>
              
              <p className="text-xl text-primary-100 leading-relaxed">
                Mais de 2.000 perfis já estão gerando reuniões com a Prime SDR. Teste 30 dias sem risco.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Agendar demonstração (15 min)
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Ver casos de sucesso
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
