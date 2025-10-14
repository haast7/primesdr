'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, CheckCircle, XCircle, AlertCircle, ExternalLink } from 'lucide-react';

interface ProfileAnalysis {
  score: number;
  checks: {
    professionalPhoto: boolean;
    optimizedHeadline: boolean;
    clearValueProposition: boolean;
    detailedExperience: boolean;
    clientRecommendations: boolean;
    relevantSkills: boolean;
    contactInfo: boolean;
    recentActivity: boolean;
  };
  improvements: string[];
}

export function ProfileAnalyzer() {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [analysis, setAnalysis] = useState<ProfileAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeProfile = async () => {
    if (!linkedinUrl) return;
    
    setIsAnalyzing(true);
    
    // Simulação de análise (em produção, isso seria uma API call)
    setTimeout(() => {
      const mockAnalysis: ProfileAnalysis = {
        score: 75,
        checks: {
          professionalPhoto: true,
          optimizedHeadline: false,
          clearValueProposition: true,
          detailedExperience: false,
          clientRecommendations: true,
          relevantSkills: true,
          contactInfo: false,
          recentActivity: true,
        },
        improvements: [
          'Sua headline não está otimizada para vendas. Adicione sua proposta de valor e resultado específico.',
          'Detalhe mais suas experiências profissionais com métricas e conquistas.',
          'Adicione informações de contato (email, telefone) para facilitar o contato de prospects.',
          'Considere adicionar mais recomendações de clientes para aumentar a credibilidade.',
        ]
      };
      
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const CheckItem = ({ label, passed }: { label: string; passed: boolean }) => (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
      {passed ? (
        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
      )}
      <span className="text-sm text-gray-700">{label}</span>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary-100 rounded-lg">
              <User className="h-6 w-6 text-primary-600" />
            </div>
            <div>
              <CardTitle>Analisador de Perfil LinkedIn</CardTitle>
              <CardDescription>
                Cole a URL do seu perfil e receba análise instantânea com pontos de melhoria.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL do seu perfil LinkedIn
              </label>
              <input
                type="url"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                placeholder="https://linkedin.com/in/seu-perfil"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            <Button 
              onClick={analyzeProfile} 
              disabled={!linkedinUrl || isAnalyzing}
              className="w-full"
            >
              {isAnalyzing ? 'Analisando...' : 'Analisar meu perfil'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {analysis && (
        <div className="space-y-6">
          {/* Score Card */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${getScoreBg(analysis.score)} mb-4`}>
                  <span className={`text-3xl font-bold ${getScoreColor(analysis.score)}`}>
                    {analysis.score}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Score do seu perfil
                </h3>
                <p className="text-gray-600">
                  {analysis.score >= 80 
                    ? 'Excelente! Seu perfil está otimizado para prospecção.'
                    : analysis.score >= 60 
                    ? 'Bom, mas há espaço para melhorias significativas.'
                    : 'Seu perfil precisa de otimização para prospecção eficaz.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Checklist */}
          <Card>
            <CardHeader>
              <CardTitle>Checklist de Otimização</CardTitle>
              <CardDescription>
                Pontos verificados no seu perfil LinkedIn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CheckItem 
                  label="Foto profissional" 
                  passed={analysis.checks.professionalPhoto} 
                />
                <CheckItem 
                  label="Headline otimizada para vendas" 
                  passed={analysis.checks.optimizedHeadline} 
                />
                <CheckItem 
                  label="Sobre com proposta de valor clara" 
                  passed={analysis.checks.clearValueProposition} 
                />
                <CheckItem 
                  label="Experiências bem detalhadas" 
                  passed={analysis.checks.detailedExperience} 
                />
                <CheckItem 
                  label="Recomendações de clientes" 
                  passed={analysis.checks.clientRecommendations} 
                />
                <CheckItem 
                  label="Habilidades relevantes" 
                  passed={analysis.checks.relevantSkills} 
                />
                <CheckItem 
                  label="Informações de contato" 
                  passed={analysis.checks.contactInfo} 
                />
                <CheckItem 
                  label="Atividade recente" 
                  passed={analysis.checks.recentActivity} 
                />
              </div>
            </CardContent>
          </Card>

          {/* Improvements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-500" />
                Pontos de Melhoria
              </CardTitle>
              <CardDescription>
                Sugestões para otimizar seu perfil para prospecção
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analysis.improvements.map((improvement, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700">{improvement}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quer otimizar seu perfil com nossa ajuda?
              </h3>
              <p className="text-gray-600 mb-4">
                Nossa equipe pode ajudar você a criar um perfil que converte prospects em clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button>
                  Agendar consultoria gratuita
                </Button>
                <Button variant="outline">
                  Ver exemplos de perfis otimizados
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tips */}
      <Card className="mt-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Dicas para um perfil LinkedIn que converte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Headline eficaz:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Inclua sua proposta de valor</li>
                <li>• Adicione um resultado específico</li>
                <li>• Use palavras-chave relevantes</li>
                <li>• Seja claro sobre quem você ajuda</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Seção "Sobre":</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Fale sobre o problema que resolve</li>
                <li>• Inclua métricas e resultados</li>
                <li>• Adicione prova social</li>
                <li>• Termine com um call-to-action</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
