'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Target, 
  Users, 
  Lightbulb, 
  TrendingUp, 
  Shield, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  CheckCircle,
  Star,
  Award,
  Zap,
  Heart,
  Eye,
  Scale,
  UserPlus,
  Rocket,
  BarChart3,
  Calendar,
  DollarSign,
  UserCheck,
  Building2,
  Briefcase,
  GraduationCap,
  Gavel,
  Wrench
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

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Resultados acima de tudo',
      description: 'Não vendemos promessas. Entregamos reuniões qualificadas ou devolvemos seu dinheiro. Simples assim.',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconBg: 'bg-red-100'
    },
    {
      icon: Eye,
      title: 'Transparência radical',
      description: 'Você vê cada métrica, cada mensagem enviada, cada resposta. Sem caixas-pretas. Sem "confia em mim".',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Scale,
      title: 'Ética sempre',
      description: 'Respeitamos limites do LinkedIn, privacidade de dados (LGPD) e nunca enviamos spam. Crescimento sustentável, não queima de imagem.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100'
    },
    {
      icon: UserPlus,
      title: 'Parceria real',
      description: 'Não somos fornecedor. Somos extensão do seu time comercial. Seu sucesso é nosso sucesso.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconBg: 'bg-purple-100'
    },
    {
      icon: Rocket,
      title: 'Inovação constante',
      description: 'Mercado muda. LinkedIn muda. Nós nos adaptamos. Sempre testando, sempre melhorando.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100'
    }
  ];

  const differentiators = [
    {
      other: 'Automação genérica ("envie e torça")',
      prime: 'Você monta a estratégia, automação executa com precisão',
      icon: Target
    },
    {
      other: 'Deixa você sozinho após venda',
      prime: 'SDR humano qualifica e agenda reuniões pra você',
      icon: Users
    },
    {
      other: '"Resultados podem variar" (sem garantia)',
      prime: '30 dias de garantia: não funcionar? Reembolso total',
      icon: Shield
    },
    {
      other: 'Dashboard confuso, métricas de vaidade',
      prime: 'Métricas que importam: reuniões, pipeline, CPR',
      icon: BarChart3
    },
    {
      other: 'Suporte genérico, chatbot que não resolve',
      prime: 'Suporte real, gente respondendo, ajustes em tempo real',
      icon: Phone
    },
    {
      other: 'Risco de ban (não respeitam limites)',
      prime: '100% seguro: operamos há anos sem um único ban',
      icon: CheckCircle
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
    { icon: CheckCircle, title: 'Segurança no LinkedIn', description: 'Respeitamos todos os limites (30-40 convites/dia), variamos cadências, aquecemos perfis. Zero risco de ban.' },
    { icon: Phone, title: 'Suporte real', description: 'Gente de verdade respondendo, ajustando campanhas, otimizando resultados. Não é chatbot, é parceria.' },
    { icon: Award, title: 'Garantia de 30 dias', description: 'Não gerou reuniões qualificadas? Reembolso integral. Sem burocracia, sem desculpas.' }
  ];

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
                <Heart className="w-5 h-5 mr-2" />
                Nossa História
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Cansamos de ver vendas travarem por falta de leads qualificados.
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                A Prime SDR nasceu de uma frustração real: times comerciais talentosos desperdiçando tempo com prospecção manual enquanto decisores estavam a um clique de distância no LinkedIn. Criamos a solução que queríamos ter.
              </p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Nossa História */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      De onde veio a Prime SDR
                    </h2>
                  </div>
                </div>
                
                <div className="prose prose-gray max-w-none space-y-6">
                  <p>
                    Em 2023, trabalhávamos em diferentes empresas B2B enfrentando o mesmo problema: <strong>pipelines vazios, times sobrecarregados e dependência cara de mídia paga.</strong>
                  </p>
                  
                  <p>A rotina era sempre a mesma:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Segunda de manhã: "Precisamos de mais leads"</li>
                    <li>Quarta à tarde: "Esses leads são péssimos"</li>
                    <li>Sexta à noite: "Vamos aumentar o budget de ads"</li>
                  </ul>
                  
                  <p>
                    Testamos tudo: cold call (ninguém atendia), email frio (direto pro spam), SDRs internos (turnover alto, resultados inconsistentes).
                  </p>
                  
                  <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                    <p className="text-primary-800 font-semibold text-lg">
                      Até olharmos pro LinkedIn de forma diferente.
                    </p>
                  </div>
                  
                  <p>
                    Decisores estavam lá. Ativos. Postando. Interagindo. Mas acessá-los de forma escalável e ética parecia impossível.
                  </p>
                  
                  <p>
                    <strong>Então construímos a Prime SDR:</strong> uma operação que combina automação inteligente (respeitando limites do LinkedIn) + SDR humano (que entra quando o lead responde) + transparência total (você vê tudo em tempo real).
                  </p>
                  
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <p className="text-green-800">
                      <strong>O primeiro teste:</strong> 112 reuniões em 45 dias. R$ 6,3M em pipeline. Payback em 13 dias.
                    </p>
                  </div>
                  
                  <p>
                    Pensamos: "Se funciona pra gente, funciona pra todo B2B."
                  </p>
                  
                  <p className="text-lg font-semibold text-gray-900">
                    E aqui estamos.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Missão, Visão e Valores */}
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
                Por que fazemos o que fazemos
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Missão</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Transformar o LinkedIn em um motor de receita previsível para empresas B2B — sem depender de sorte, sem queimar budget e sem sobrecarregar times.
                  </p>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="p-8 h-full">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Visão</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ser a plataforma líder em prospecção B2B no LinkedIn na América Latina, conhecida por resultados reais e transparência total.
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Valores</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className={`p-6 h-full ${value.bgColor} border-0`}>
                      <div className={`w-12 h-12 ${value.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <value.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Como somos diferentes */}
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
                O que nos torna únicos no mercado
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Outras ferramentas de automação</th>
                        <th className="text-left py-4 px-6 text-sm font-semibold text-primary-600">Prime SDR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {differentiators.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-6 text-sm text-gray-600">
                            {item.other}
                          </td>
                          <td className="py-4 px-6 text-sm text-gray-900 font-medium">
                            <div className="flex items-center space-x-2">
                              <item.icon className="w-4 h-4 text-primary-600" />
                              <span>{item.prime}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Números que comprovam */}
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

      {/* Onde estamos */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Onde estamos
                    </h2>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-5 h-5 text-primary-600" />
                      <div>
                        <p className="font-semibold text-gray-900">Prime SDR</p>
                        <p className="text-gray-600">CNPJ: 60.782.822/0001-01</p>
                        <p className="text-gray-600">São Paulo, Brasil</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">Todo Brasil, América e Europa (operação 100% remota)</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">Segunda a sexta, 9h–18h (São Paulo)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">contato@primesdr.com</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">+55 11 94502-2847 (WhatsApp)</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-primary-600" />
                      <span className="text-gray-700">https://primesdr.com</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
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
