'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/lib/contexts/LanguageContext';
import { 
  Search, 
  Calculator, 
  User, 
  FileText, 
  Play, 
  TrendingUp, 
  BookOpen,
  Copy,
  Eye,
  Star,
  Users,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  Filter,
  Grid,
  List,
  Sparkles,
  Download,
  Clock,
  Award
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

export function ResourcesPage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = [
    { id: 'all', label: 'Todos', icon: Grid },
    { id: 'tools', label: 'Ferramentas', icon: Calculator },
    { id: 'guides', label: 'Guias', icon: BookOpen },
    { id: 'videos', label: 'Vídeos', icon: Play },
    { id: 'cases', label: 'Cases', icon: TrendingUp },
  ];

  const tools = [
    {
      id: 'roi-calculator',
      title: 'Calculadora de ROI de Prospecção',
      description: 'Descubra quantas reuniões e quanto pipeline você pode gerar investindo em prospecção no LinkedIn.',
      icon: Calculator,
      category: 'tools',
      badge: 'GRÁTIS',
      badgeColor: 'bg-green-100 text-green-800',
      cta: 'Calcular meu ROI',
      features: ['Investimento estimado', 'Reuniões esperadas', 'Pipeline projetado', 'ROI em %'],
      downloads: '2.341 downloads'
    },
    {
      id: 'profile-analyzer',
      title: 'Analisador de Perfil LinkedIn',
      description: 'Cole a URL do seu perfil e receba análise instantânea com pontos de melhoria.',
      icon: User,
      category: 'tools',
      badge: 'GRÁTIS',
      badgeColor: 'bg-green-100 text-green-800',
      cta: 'Analisar meu perfil',
      features: ['Foto profissional', 'Headline otimizada', 'Sobre com proposta de valor', 'Experiências detalhadas'],
      downloads: '1.892 downloads'
    },
    {
      id: 'headline-generator',
      title: 'Gerador de Headline de LinkedIn',
      description: 'Responda 3 perguntas e receba 5 opções de headline testadas.',
      icon: FileText,
      category: 'tools',
      badge: 'GRÁTIS',
      badgeColor: 'bg-green-100 text-green-800',
      cta: 'Gerar minha headline',
      features: ['5 opções personalizadas', 'Templates testados', 'Por persona', 'Taxa de conversão'],
      downloads: '1.567 downloads'
    },
    {
      id: 'qualification-quiz',
      title: 'Quiz de Qualificação',
      description: '5 perguntas, 60 segundos, resultado personalizado com plano de ação.',
      icon: Target,
      category: 'tools',
      badge: 'NOVO',
      badgeColor: 'bg-purple-100 text-purple-800',
      cta: 'Fazer o quiz',
      features: ['5 perguntas rápidas', 'Resultado personalizado', 'Plano de ação', '60 segundos'],
      downloads: '3.124 downloads'
    }
  ];

  const guides = [
    {
      id: 'complete-playbook',
      title: 'O Playbook Completo de Prospecção no LinkedIn (2025)',
      description: 'Método passo a passo para gerar 100+ reuniões/mês usando LinkedIn. ICP, mensagens, cadências, métricas e automação segura.',
      icon: BookOpen,
      category: 'guides',
      badge: 'MAIS BAIXADO',
      badgeColor: 'bg-blue-100 text-blue-800',
      cta: 'Baixar guia grátis',
      features: ['42 páginas', 'Planilha de acompanhamento', 'Templates inclusos', 'Métricas detalhadas'],
      downloads: '8.742 downloads',
      pages: '42 páginas'
    },
    {
      id: 'fatal-errors',
      title: '7 Erros Fatais que Matam Sua Taxa de Resposta no LinkedIn',
      description: 'Descubra os erros mais comuns (e como corrigi-los) que fazem decisores ignorarem suas mensagens.',
      icon: Zap,
      category: 'guides',
      badge: 'GRÁTIS',
      badgeColor: 'bg-green-100 text-green-800',
      cta: 'Baixar checklist',
      features: ['7 erros identificados', 'Soluções práticas', 'Checklist de verificação', 'Casos reais'],
      downloads: '5.231 downloads'
    },
    {
      id: 'decision-makers',
      title: 'Como Acessar Decisores que Não Atendem Cold Call',
      description: 'CEOs, Diretores e VPs não atendem telefone. Mas eles respondem no LinkedIn — se você souber como.',
      icon: Users,
      category: 'guides',
      badge: 'GRÁTIS',
      badgeColor: 'bg-green-100 text-green-800',
      cta: 'Baixar guia',
      features: ['Estratégias C-level', 'Gatilhos de timing', 'Abordagem consultiva', 'Casos reais'],
      downloads: '3.891 downloads'
    }
  ];


  const videos = [
    {
      id: 'webinar-100-meetings',
      title: 'Como Gerar 100+ Reuniões/Mês no LinkedIn (sem ser chato)',
      description: 'Método completo (ICP → mensagem → follow-up) com demonstração ao vivo da plataforma.',
      icon: Play,
      category: 'videos',
      badge: 'WEBINAR',
      badgeColor: 'bg-red-100 text-red-800',
      cta: 'Assistir agora',
      features: ['47 minutos', 'Demonstração ao vivo', 'Q&A com casos reais', 'Método completo'],
      downloads: '2.456 visualizações',
      duration: '47 min'
    },
    {
      id: '5-messages',
      title: '5 Mensagens que Decisores SEMPRE Respondem',
      description: 'Análise de mensagens com maior taxa de resposta e por que funcionam.',
      icon: Play,
      category: 'videos',
      badge: 'GRÁTIS',
      badgeColor: 'bg-green-100 text-green-800',
      cta: 'Assistir',
      features: ['8 minutos', '5 mensagens testadas', 'Análise detalhada', 'Por que funcionam'],
      downloads: '4.123 visualizações',
      duration: '8 min'
    },
    {
      id: 'behind-scenes',
      title: 'Bastidores: Como Geramos R$ 6,3M em Pipeline em 60 Dias',
      description: 'Case real com métricas, estratégias e lições aprendidas.',
      icon: Play,
      category: 'videos',
      badge: 'CASE REAL',
      badgeColor: 'bg-blue-100 text-blue-800',
      cta: 'Assistir',
      features: ['12 minutos', 'Métricas reais', 'Estratégias detalhadas', 'Lições aprendidas'],
      downloads: '3.789 visualizações',
      duration: '12 min'
    }
  ];

  const cases = [
    {
      id: 'saas-case',
      title: 'SaaS B2B → R$ 6,3M em pipeline (60 dias)',
      description: 'Como transformamos o LinkedIn em máquina de leads para uma SaaS de gestão.',
      icon: TrendingUp,
      category: 'cases',
      badge: 'DESTAQUE',
      badgeColor: 'bg-green-100 text-green-800',
      cta: 'Ver case completo',
      features: ['R$ 6,3M pipeline', '60 dias', '112 reuniões', '12 clientes'],
      downloads: '1.234 visualizações'
    },
    {
      id: 'agency-case',
      title: 'Agência → 403 leads em 90 dias',
      description: 'Estratégia de prospecção para agência de marketing digital.',
      icon: TrendingUp,
      category: 'cases',
      badge: 'CASE',
      badgeColor: 'bg-blue-100 text-blue-800',
      cta: 'Ver case completo',
      features: ['403 leads', '90 dias', 'Agência B2B', 'ROI 1.800%'],
      downloads: '987 visualizações'
    },
    {
      id: 'tech-case',
      title: 'Tech → 87 reuniões em 30 dias',
      description: 'Prospecção para empresa de tecnologia com ticket alto.',
      icon: TrendingUp,
      category: 'cases',
      badge: 'CASE',
      badgeColor: 'bg-blue-100 text-blue-800',
      cta: 'Ver case completo',
      features: ['87 reuniões', '30 dias', 'Ticket alto', 'Tech B2B'],
      downloads: '756 visualizações'
    }
  ];

  const allResources = [...tools, ...guides, ...videos, ...cases];

  const filteredResources = allResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || resource.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleResourceClick = (resource: any) => {
    // Aqui você pode implementar a lógica específica para cada recurso
    console.log('Resource clicked:', resource);
  };

  const resourceStats = [
    { number: '25.000+', label: 'Downloads totais', icon: Download, color: 'from-blue-500 to-blue-600' },
    { number: '42', label: 'Páginas no playbook', icon: BookOpen, color: 'from-green-500 to-green-600' },
    { number: '100%', label: 'Recursos gratuitos', icon: Award, color: 'from-purple-500 to-purple-600' },
    { number: '24/7', label: 'Acesso disponível', icon: Clock, color: 'from-orange-500 to-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
        
        <Container size="lg">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative z-10 text-center max-w-6xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/20"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Recursos Gratuitos
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            >
              Aprenda a dominar{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                prospecção B2B
              </span>{' '}
              no LinkedIn
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed max-w-5xl mx-auto"
            >
              Ferramentas gratuitas, playbooks testados, templates prontos e casos reais. 
              Tudo o que você precisa para encher sua agenda de reuniões qualificadas.
            </motion.p>

            {/* Resource Stats */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-6xl mx-auto"
            >
              {resourceStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Search Bar */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
              className="relative max-w-3xl mx-auto mb-8"
            >
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/60 h-6 w-6" />
              <input
                type="text"
                placeholder="Buscar recursos... ex: 'sequência de mensagens', 'taxa de conversão'"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-white/30 focus:border-white/30 text-lg text-white placeholder-white/60 transition-all duration-300"
              />
            </motion.div>

            {/* Quick Filters */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              {filters.map((filter) => {
                const Icon = filter.icon;
                return (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                      activeFilter === filter.id
                        ? 'bg-white/20 backdrop-blur-sm text-white border-white/30 shadow-lg'
                        : 'bg-white/5 backdrop-blur-sm text-white/80 border-white/20 hover:bg-white/10 hover:border-white/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-5 w-5" />
                    {filter.label}
                  </motion.button>
                );
              })}
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              className="flex justify-center gap-3"
            >
              <motion.button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white/20 backdrop-blur-sm text-white border-white/30 shadow-lg'
                    : 'bg-white/5 backdrop-blur-sm text-white/80 border-white/20 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid className="h-6 w-6" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-xl border transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white/20 backdrop-blur-sm text-white border-white/30 shadow-lg'
                    : 'bg-white/5 backdrop-blur-sm text-white/80 border-white/20 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <List className="h-6 w-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section background="white" padding="lg">
        <Container size="lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeFilter === 'all' ? 'Todos os Recursos' : 
               activeFilter === 'tools' ? 'Ferramentas Gratuitas' :
               activeFilter === 'guides' ? 'Guias & Playbooks' :
               activeFilter === 'videos' ? 'Webinars & Vídeos' :
               activeFilter === 'cases' ? 'Cases de Sucesso' : 'Recursos'}
            </h2>
            <p className="text-gray-600">
              {filteredResources.length} recursos encontrados
            </p>
          </div>

          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} hover className="relative">
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${resource.badgeColor}`}>
                      {resource.badge}
                    </span>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        {resource.downloads && (
                          <p className="text-sm text-gray-500 mt-1">
                            {resource.downloads}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {resource.description}
                    </CardDescription>

                    {resource.features && (
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {resource.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {resource.features.length > 3 && (
                            <li className="text-sm text-gray-500">
                              +{resource.features.length - 3} mais
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <Button 
                      className="w-full" 
                      onClick={() => handleResourceClick(resource)}
                    >
                      {resource.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Nenhum recurso encontrado
              </h3>
              <p className="text-gray-600">
                Tente ajustar sua busca ou filtros para encontrar o que procura.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* CTA Final */}
      <Section background="primary" padding="lg">
        <Container size="lg">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Pronto para colocar em prática?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Você tem o conhecimento. Agora falta a execução.<br />
              A Prime SDR faz isso por você.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Agendar demonstração (15 min)
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary-600">
                Testar 30 dias sem risco
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
