'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BookOpen, Search, TrendingUp, Users, Target, MessageSquare, Clock, DollarSign } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  example?: string;
  relatedTerms?: string[];
}

export function ProspectingGlossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const terms: GlossaryTerm[] = [
    {
      term: 'MQL (Marketing Qualified Lead)',
      definition: 'Lead que demonstrou interesse através de ações de marketing mas ainda não foi qualificado por vendas.',
      category: 'Qualificação',
      example: 'Alguém que baixou um ebook ou assistiu a um webinar.',
      relatedTerms: ['SQL', 'Lead', 'Qualificação']
    },
    {
      term: 'SQL (Sales Qualified Lead)',
      definition: 'Lead qualificado por vendas, pronto para reunião e com potencial de compra.',
      category: 'Qualificação',
      example: 'Prospect que respondeu positivamente a uma mensagem e agendou uma reunião.',
      relatedTerms: ['MQL', 'Lead', 'Qualificação']
    },
    {
      term: 'CPR (Custo por Reunião)',
      definition: 'Investimento total dividido pelo número de reuniões agendadas.',
      category: 'Métricas',
      example: 'Se você investiu R$ 1.000 e agendou 10 reuniões, seu CPR é R$ 100.',
      relatedTerms: ['ROI', 'CAC', 'LTV']
    },
    {
      term: 'Taxa de Aceitação',
      definition: 'Percentual de convites de conexão que são aceitos no LinkedIn.',
      category: 'Métricas',
      example: 'Se você enviou 100 convites e 35 foram aceitos, sua taxa é 35%.',
      relatedTerms: ['Taxa de Resposta', 'Engajamento']
    },
    {
      term: 'Taxa de Resposta',
      definition: 'Percentual de mensagens que recebem resposta dos prospects.',
      category: 'Métricas',
      example: 'Se você enviou 100 mensagens e 22 receberam resposta, sua taxa é 22%.',
      relatedTerms: ['Taxa de Aceitação', 'Engajamento']
    },
    {
      term: 'Cadência',
      definition: 'Sequência automatizada de mensagens ao longo do tempo para um prospect.',
      category: 'Processo',
      example: 'Convite → Mensagem D+0 → Follow-up D+3 → Follow-up D+7 → Reativação D+30.',
      relatedTerms: ['Sequência', 'Follow-up', 'Automação']
    },
    {
      term: 'ICP (Ideal Customer Profile)',
      definition: 'Perfil detalhado do cliente ideal baseado em características demográficas, firmográficas e comportamentais.',
      category: 'Estratégia',
      example: 'CEOs de SaaS B2B com 50-200 funcionários, receita anual de R$ 5M-50M.',
      relatedTerms: ['Persona', 'Segmentação', 'Target']
    },
    {
      term: 'Persona',
      definition: 'Representação semi-fictícia do seu cliente ideal baseada em dados reais e pesquisas.',
      category: 'Estratégia',
      example: 'Carlos, 35 anos, CTO de uma fintech, preocupado com segurança e escalabilidade.',
      relatedTerms: ['ICP', 'Segmentação', 'Target']
    },
    {
      term: 'Cold Outreach',
      definition: 'Abordagem inicial a prospects que não têm relação prévia com sua empresa.',
      category: 'Processo',
      example: 'Primeira mensagem no LinkedIn para alguém que você nunca conversou.',
      relatedTerms: ['Prospecção', 'Cold Call', 'Warm Outreach']
    },
    {
      term: 'Warm Outreach',
      definition: 'Abordagem a prospects que já tiveram algum contato ou interação com sua marca.',
      category: 'Processo',
      example: 'Mensagem para alguém que baixou seu ebook ou visitou seu site.',
      relatedTerms: ['Cold Outreach', 'Lead Nurturing']
    },
    {
      term: 'Lead Nurturing',
      definition: 'Processo de desenvolvimento de relacionamento com prospects ao longo do tempo.',
      category: 'Processo',
      example: 'Envio de conteúdo educativo e follow-ups para manter o interesse.',
      relatedTerms: ['Warm Outreach', 'Cadência', 'Automação']
    },
    {
      term: 'Sales Navigator',
      definition: 'Ferramenta premium do LinkedIn para busca avançada e prospecção de leads.',
      category: 'Ferramentas',
      example: 'Permite filtrar por cargo, empresa, localização e outras características.',
      relatedTerms: ['LinkedIn', 'Prospecção', 'CRM']
    },
    {
      term: 'CRM (Customer Relationship Management)',
      definition: 'Sistema para gerenciar relacionamentos e interações com clientes e prospects.',
      category: 'Ferramentas',
      example: 'HubSpot, Salesforce, Pipedrive são exemplos de CRMs.',
      relatedTerms: ['Sales Navigator', 'Automação', 'Pipeline']
    },
    {
      term: 'Pipeline',
      definition: 'Representação visual do funil de vendas com todas as oportunidades em andamento.',
      category: 'Métricas',
      example: 'Prospects → Qualificados → Propostas → Negociação → Fechamento.',
      relatedTerms: ['Funil de Vendas', 'Oportunidades', 'Forecast']
    },
    {
      term: 'ROI (Return on Investment)',
      definition: 'Retorno sobre investimento, calculado como (Receita - Investimento) / Investimento x 100.',
      category: 'Métricas',
      example: 'Se você investiu R$ 1.000 e gerou R$ 5.000 em vendas, seu ROI é 400%.',
      relatedTerms: ['CPR', 'CAC', 'LTV']
    },
    {
      term: 'CAC (Customer Acquisition Cost)',
      definition: 'Custo total para adquirir um novo cliente, incluindo marketing e vendas.',
      category: 'Métricas',
      example: 'Se você gastou R$ 10.000 para adquirir 10 clientes, seu CAC é R$ 1.000.',
      relatedTerms: ['ROI', 'LTV', 'CPR']
    },
    {
      term: 'LTV (Lifetime Value)',
      definition: 'Valor total que um cliente gera para sua empresa durante todo o relacionamento.',
      category: 'Métricas',
      example: 'Se um cliente paga R$ 1.000/mês por 24 meses, seu LTV é R$ 24.000.',
      relatedTerms: ['CAC', 'ROI', 'Churn']
    },
    {
      term: 'Churn Rate',
      definition: 'Taxa de cancelamento de clientes em um período específico.',
      category: 'Métricas',
      example: 'Se você tinha 100 clientes e 5 cancelaram no mês, seu churn é 5%.',
      relatedTerms: ['LTV', 'Retenção', 'Renovação']
    },
    {
      term: 'A/B Testing',
      definition: 'Teste de duas versões diferentes de uma mensagem, email ou campanha para ver qual performa melhor.',
      category: 'Otimização',
      example: 'Enviar versão A para 50% dos prospects e versão B para os outros 50%.',
      relatedTerms: ['Otimização', 'Conversão', 'Métricas']
    },
    {
      term: 'Engajamento',
      definition: 'Nível de interação e participação dos prospects com seu conteúdo e mensagens.',
      category: 'Métricas',
      example: 'Likes, comentários, compartilhamentos e respostas às mensagens.',
      relatedTerms: ['Taxa de Resposta', 'Alcance', 'Impressões']
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos', icon: BookOpen },
    { id: 'Qualificação', label: 'Qualificação', icon: Target },
    { id: 'Métricas', label: 'Métricas', icon: TrendingUp },
    { id: 'Processo', label: 'Processo', icon: MessageSquare },
    { id: 'Estratégia', label: 'Estratégia', icon: Users },
    { id: 'Ferramentas', label: 'Ferramentas', icon: Clock },
    { id: 'Otimização', label: 'Otimização', icon: DollarSign }
  ];

  const filteredTerms = terms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData?.icon || BookOpen;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Glossário de Prospecção B2B
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Termos que você precisa conhecer para dominar prospecção no LinkedIn.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar termos... ex: 'ROI', 'ICP', 'cadência'"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-full border transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white border-primary-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-primary-300'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTerms.map((term, index) => {
          const Icon = getCategoryIcon(term.category);
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-4 w-4 text-primary-600" />
                      <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                        {term.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{term.term}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {term.definition}
                </CardDescription>

                {term.example && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Exemplo:</h4>
                    <p className="text-sm text-gray-600 italic">
                      {term.example}
                    </p>
                  </div>
                )}

                {term.relatedTerms && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Termos relacionados:</h4>
                    <div className="flex flex-wrap gap-1">
                      {term.relatedTerms.map((relatedTerm, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {relatedTerm}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredTerms.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Nenhum termo encontrado
            </h3>
            <p className="text-gray-600">
              Tente ajustar sua busca ou filtros para encontrar o que procura.
            </p>
          </CardContent>
        </Card>
      )}

      {/* CTA */}
      <Card className="mt-12 bg-primary-50 border-primary-200">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Quer dominar todos esses conceitos na prática?
          </h3>
          <p className="text-gray-600 mb-6">
            Nossa equipe pode ajudar você a implementar uma estratégia de prospecção completa e eficaz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Agendar consultoria gratuita
            </Button>
            <Button variant="outline" size="lg">
              Baixar guia completo
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
