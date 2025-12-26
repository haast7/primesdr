'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Calculator, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  ArrowRight,
  CheckCircle,
  Info,
  Zap
} from 'lucide-react';

interface ROIResult {
  investment: number;
  meetings: number;
  pipeline: number;
  roi: number;
  closedDeals: number;
  revenue: number;
  licenses?: number;
  costPerMeeting?: number;
  usingPrime: boolean;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export function ROICalculatorPage() {
  const [sellers, setSellers] = useState<number>(1);
  const [meetingsNeeded, setMeetingsNeeded] = useState<number>(50);
  const [averageTicket, setAverageTicket] = useState<number>(10000);
  const [conversionRate, setConversionRate] = useState<number>(15);
  const [usingPrime, setUsingPrime] = useState<boolean>(true);
  const [costPerMeeting, setCostPerMeeting] = useState<number>(150);
  const [result, setResult] = useState<ROIResult | null>(null);

  const calculateROI = () => {
    const conversionRateDecimal = conversionRate / 100; // Converte % para decimal
    const pipelineMultiplier = 3; // Pipeline é 3x o valor das vendas fechadas
    const totalMeetings = meetingsNeeded * sellers;

    let investment = 0;
    let licenses = 0;
    let actualCostPerMeeting = costPerMeeting;

    if (usingPrime) {
      // Lógica com Prime SDR
      const licenseCost = 700; // Custo por licença
      const meetingsPerLicense = 20; // Média entre 15-25 reuniões por licença
      
      // Calcula quantas licenças são necessárias
      licenses = Math.ceil(totalMeetings / meetingsPerLicense);
      investment = licenses * licenseCost;
      actualCostPerMeeting = investment / totalMeetings;
    } else {
      // Lógica sem Prime - usa o custo por reunião informado
      investment = totalMeetings * costPerMeeting;
      actualCostPerMeeting = costPerMeeting;
    }

    const closedDeals = Math.round(totalMeetings * conversionRateDecimal);
    const revenue = closedDeals * averageTicket;
    const pipeline = revenue * pipelineMultiplier;
    const roi = investment > 0 ? ((pipeline - investment) / investment) * 100 : 0;

    setResult({
      investment,
      meetings: totalMeetings,
      pipeline,
      roi,
      closedDeals,
      revenue,
      licenses: usingPrime ? licenses : undefined,
      costPerMeeting: actualCostPerMeeting,
      usingPrime
    });
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <Section background="gradient" padding="xl" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <Container size="lg">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-4xl mx-auto py-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold text-sm mb-8 border border-white/20">
              <Calculator className="w-5 h-5 mr-2" />
              Ferramenta Gratuita
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Calculadora de ROI de Prospecção
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Descubra quantas reuniões e quanto pipeline você pode gerar investindo em prospecção no LinkedIn
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Calculator Section */}
      <Section background="white" padding="lg">
        <Container size="lg">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Preencha os dados abaixo
                  </h2>
                  <p className="text-gray-600">
                    Cálculo simples e direto, como uma conta de padaria
                  </p>
                </div>

                {/* Toggle Prime SDR */}
                <div className="mb-6 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl border-2 border-primary-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary-600 rounded-lg">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Usar Prime SDR?</h3>
                        <p className="text-sm text-gray-600">
                          {usingPrime 
                            ? 'Calculando com licenças Prime (R$ 700/licença, 15-25 reuniões/licença)'
                            : 'Calculando com custo personalizado por reunião'}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setUsingPrime(!usingPrime);
                        setResult(null); // Limpa resultado ao mudar
                      }}
                      className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                        usingPrime ? 'bg-primary-600' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                          usingPrime ? 'translate-x-8' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Users className="w-5 h-5 inline mr-2 text-primary-600" />
                      Quantos vendedores você tem?
                    </label>
                    <input
                      type="number"
                      value={sellers}
                      onChange={(e) => setSellers(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-lg"
                      min="1"
                      max="50"
                    />
                    <p className="text-xs text-gray-500 mt-2">Número de vendedores no seu time</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Target className="w-5 h-5 inline mr-2 text-primary-600" />
                      Quantas reuniões/mês você precisa?
                    </label>
                    <input
                      type="number"
                      value={meetingsNeeded}
                      onChange={(e) => setMeetingsNeeded(Math.max(10, Number(e.target.value)))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-lg"
                      min="10"
                      max="500"
                    />
                    <p className="text-xs text-gray-500 mt-2">Meta de reuniões por mês</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <DollarSign className="w-5 h-5 inline mr-2 text-primary-600" />
                      Qual seu ticket médio?
                    </label>
                    <input
                      type="number"
                      value={averageTicket}
                      onChange={(e) => setAverageTicket(Math.max(1000, Number(e.target.value)))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-lg"
                      min="1000"
                      max="1000000"
                      step="1000"
                    />
                    <p className="text-xs text-gray-500 mt-2">Valor médio de cada venda (R$)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <TrendingUp className="w-5 h-5 inline mr-2 text-primary-600" />
                      Taxa de conversão (%)
                    </label>
                    <input
                      type="number"
                      value={conversionRate}
                      onChange={(e) => setConversionRate(Math.max(1, Math.min(100, Number(e.target.value))))}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-lg"
                      min="1"
                      max="100"
                    />
                    <p className="text-xs text-gray-500 mt-2">% de reuniões que viram vendas (padrão: 15%)</p>
                  </div>

                  {!usingPrime && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        <DollarSign className="w-5 h-5 inline mr-2 text-primary-600" />
                        Custo por reunião (R$)
                      </label>
                      <input
                        type="number"
                        value={costPerMeeting}
                        onChange={(e) => {
                          setCostPerMeeting(Math.max(1, Number(e.target.value)));
                          setResult(null); // Limpa resultado ao mudar
                        }}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all text-lg"
                        min="1"
                        step="10"
                      />
                      <p className="text-xs text-gray-500 mt-2">Quanto você gasta para gerar cada reunião qualificada</p>
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={calculateROI} 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calcular meu ROI
                </Button>
              </CardContent>
            </Card>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Result Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-blue-500 rounded-xl">
                          <DollarSign className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Investimento Mensal</p>
                          <p className="text-3xl font-bold text-gray-900">
                            {formatCurrency(result.investment)}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {result.usingPrime 
                          ? `${result.licenses} licença${result.licenses !== 1 ? 's' : ''} Prime SDR`
                          : `Custo para gerar ${result.meetings} reuniões`}
                      </p>
                      {result.usingPrime && (
                        <p className="text-xs text-gray-500 mt-1">
                          ~{formatCurrency(result.costPerMeeting || 0)} por reunião
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-green-500 rounded-xl">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Reuniões Geradas</p>
                          <p className="text-3xl font-bold text-gray-900">
                            {result.meetings}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {result.closedDeals} vendas fechadas ({conversionRate}%)
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-purple-500 rounded-xl">
                          <Target className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 font-medium">Pipeline Gerado</p>
                          <p className="text-3xl font-bold text-gray-900">
                            {formatCurrency(result.pipeline)}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2">
                        {formatCurrency(result.revenue)} em receita
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* ROI Highlight Card */}
                <Card className="bg-gradient-to-r from-primary-600 to-primary-700 border-0 shadow-2xl">
                  <CardContent className="p-8 text-white">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="text-white/90 text-sm font-medium mb-2">ROI Estimado</p>
                        <p className="text-5xl font-bold">
                          {result.roi.toFixed(0)}%
                        </p>
                        <p className="text-white/80 text-sm mt-2">
                          Retorno sobre investimento mensal
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Explanation Card */}
                <Card className="bg-gray-50 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Info className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          Como funciona o cálculo?
                        </h3>
                        <div className="space-y-2 text-sm text-gray-700">
                          {result.usingPrime ? (
                            <>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <p><strong>Licenças necessárias:</strong> {result.meetings} reuniões ÷ 20 reuniões/licença = {result.licenses} licença{result.licenses !== 1 ? 's' : ''}</p>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                <p><strong>Investimento:</strong> {result.licenses} licença{result.licenses !== 1 ? 's' : ''} × R$ 700 = {formatCurrency(result.investment)}</p>
                              </div>
                            </>
                          ) : (
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <p><strong>Investimento:</strong> {result.meetings} reuniões × {formatCurrency(result.costPerMeeting || 0)} = {formatCurrency(result.investment)}</p>
                            </div>
                          )}
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p><strong>Vendas fechadas:</strong> {result.meetings} reuniões × {conversionRate}% = {result.closedDeals} vendas</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p><strong>Receita:</strong> {result.closedDeals} vendas × {formatCurrency(averageTicket)} = {formatCurrency(result.revenue)}</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p><strong>Pipeline:</strong> {formatCurrency(result.revenue)} × 3 = {formatCurrency(result.pipeline)}</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <p><strong>ROI:</strong> ({formatCurrency(result.pipeline)} - {formatCurrency(result.investment)}) ÷ {formatCurrency(result.investment)} × 100 = {result.roi.toFixed(0)}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* CTA Card */}
                <Card className="bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Quer gerar esses resultados na prática?
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Fale com nosso time e descubra como podemos ajudar você a alcançar essas metas
                      </p>
                      <Button 
                        className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-xl"
                        onClick={() => window.location.href = '/contato'}
                      >
                        Falar com especialista
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Info Section */}
            {!result && (
              <Card className="mt-8 bg-gray-50 border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Métricas utilizadas
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {usingPrime ? (
                        <>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-primary-600" />
                            <span>Licença Prime SDR: <strong>R$ 700/mês</strong></span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-primary-600" />
                            <span>15-25 reuniões qualificadas por licença (média: 20)</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-primary-600" />
                            <span>Custo médio: <strong>~R$ 35 por reunião</strong></span>
                          </div>
                        </>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Custo por reunião: <strong>{formatCurrency(costPerMeeting)}</strong> (personalizado)</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Pipeline é 3x o valor das vendas</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Baseado em dados reais da Prime SDR</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Cálculo simples e transparente</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </Container>
      </Section>
    </div>
  );
}

