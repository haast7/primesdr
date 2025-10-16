'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Target, 
  Users, 
  MessageSquare, 
  Settings, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  Calendar,
  Search,
  FileText,
  Zap,
  Shield
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

export function ConfigurationStep() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const kickoffItems = [
    'Seu ICP ideal (cargo, setor, tamanho de empresa, localização)',
    'Proposta de valor e diferenciais competitivos',
    'Metas claras (ex: 100 reuniões/mês, 400 MQLs em 90 dias)',
    'Tom de voz e posicionamento da marca'
  ];

  const campaignTypes = [
    {
      icon: Users,
      title: 'Campanha do LinkedIn',
      description: 'Prospecção direta via perfis pessoais conectados',
      popular: true
    },
    {
      icon: MessageSquare,
      title: 'Campanha InMail',
      description: 'Mensagens diretas para leads fora da sua rede',
      note: 'Requer Sales Navigator'
    },
    {
      icon: Users,
      title: 'Campanha de grupo',
      description: 'Engajamento com membros de grupos específicos',
      note: 'Do seu nicho'
    },
    {
      icon: Calendar,
      title: 'Campanha de eventos',
      description: 'Conexão com participantes/palestrantes',
      note: 'De eventos relevantes'
    },
    {
      icon: Users,
      title: 'Campanha da empresa',
      description: 'Prospecção via página empresarial',
      note: 'Seguidores, visitantes, engajados'
    },
    {
      icon: MessageSquare,
      title: 'Campanha de e-mail',
      description: 'Complemento multicanal',
      note: 'LinkedIn + email automático'
    },
    {
      icon: Zap,
      title: 'Campanha multicanal',
      description: 'Combinação de LinkedIn + Email + InMail',
      note: 'Para máxima cobertura'
    }
  ];

  const audienceOptions = [
    {
      icon: Search,
      title: 'Pesquisa no LinkedIn',
      description: 'Nossa ferramenta integrada busca perfis por cargo, setor, tamanho da empresa e localização'
    },
    {
      icon: Users,
      title: 'URL do LinkedIn/Sales Navigator',
      description: 'Cole o link de uma pesquisa salva e importamos até 2.500 leads segmentados automaticamente'
    },
    {
      icon: FileText,
      title: 'Carregar CSV',
      description: 'Importe sua própria lista de leads (formato CSV com nome, cargo, empresa, LinkedIn URL)'
    },
    {
      icon: Search,
      title: 'Pesquisas do Sales Navigator',
      description: 'Sincronizamos diretamente com listas e pesquisas salvas no Sales Navigator'
    },
    {
      icon: Users,
      title: 'Conexões de 1º Grau',
      description: 'Direcione suas conexões existentes no LinkedIn para fortalecer relacionamentos'
    },
    {
      icon: MessageSquare,
      title: 'Postagens',
      description: 'Gere leads instantaneamente a partir de qualquer publicação do LinkedIn com apenas um URL'
    },
    {
      icon: Users,
      title: 'Página da empresa',
      description: 'Segmente funcionários de organizações específicas usando URL da página empresarial'
    },
    {
      icon: MessageSquare,
      title: 'Anúncios do LinkedIn',
      description: 'Capture leads diretamente de anúncios copiando a URL de qualquer publicação promovida'
    },
    {
      icon: FileText,
      title: 'Boletins informativos',
      description: 'Alcance assinantes de newsletters do LinkedIn — basta colar o URL para começar'
    }
  ];

  const sequenceExample = [
    {
      day: 'Dia 0',
      action: 'Curtir publicação',
      description: 'Engajamento prévio'
    },
    {
      day: 'Dia 1',
      action: 'Ver perfil',
      description: 'Despertar curiosidade'
    },
    {
      day: 'Dia 2',
      action: 'Solicitar conexão',
      description: 'Com note personalizada ≤200 caracteres',
      note: `"{{firstName}}, vi seu trabalho em {{company}}. Posso te mandar um caso de 112 reuniões em 45 dias? Zero pitch."`
    },
    {
      day: 'Dia 3',
      action: 'Mensagem pós-conexão',
      description: 'Se aceitar conexão',
      note: '"Valeu por aceitar! Contexto rápido: ajudamos times B2B a gerarem reuniões via LinkedIn. Te mostro em 2 min?"'
    },
    {
      day: 'Dia 6',
      action: 'Follow-up 1',
      description: 'Se não responder',
      note: `"{{firstName}}, vale 15 min pra te mostrar como colocamos 100+ reuniões no calendário do seu time?"`
    },
    {
      day: 'Dia 10',
      action: 'Follow-up 2',
      description: 'Se não responder',
      note: '"Último toque. Posso te enviar vídeo de 2 min com caso real? Se não fizer sentido, encerro aqui."'
    }
  ];

  const safetyLimits = [
    '30-40 convites/dia por perfil (zona segura)',
    'Intervalos randomizados entre ações (parece humano)',
    'Aquecimento automático (começa devagar e acelera gradualmente)',
    'Pausa automática quando lead responde (SDR humano assume)'
  ];

  return (
    <Section background="gray" padding="lg" id="configuracao">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div 
            variants={fadeInUp} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Etapa 1: Configuração (Dias 1-7)
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Definimos sua estratégia de prospecção
            </p>
          </motion.div>

          {/* Kickoff Estratégico */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-white border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1.1 Kickoff Estratégico (60 minutos)</h3>
                      <p className="text-gray-600">Reunião com você para entender:</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSection('kickoff')}
                    className="flex items-center space-x-2"
                  >
                    <span>{expandedSection === 'kickoff' ? 'Menos detalhes' : 'Ver detalhes'}</span>
                    {expandedSection === 'kickoff' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {kickoffItems.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                {expandedSection === 'kickoff' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-6 bg-blue-50 rounded-xl border border-blue-200"
                  >
                    <h4 className="font-semibold text-blue-900 mb-3">O que acontece na reunião:</h4>
                    <ul className="space-y-2 text-blue-800">
                      <li>• Análise do seu negócio e mercado</li>
                      <li>• Definição precisa do ICP ideal</li>
                      <li>• Mapeamento da jornada do cliente</li>
                      <li>• Criação de mensagens personalizadas</li>
                      <li>• Definição de metas realistas</li>
                    </ul>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Escolha do Tipo de Campanha */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-white border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1.2 Escolha do Tipo de Campanha</h3>
                      <p className="text-gray-600">Com base no seu ICP e objetivo, definimos qual(is) campanha(s) rodar:</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSection('campaigns')}
                    className="flex items-center space-x-2"
                  >
                    <span>{expandedSection === 'campaigns' ? 'Menos detalhes' : 'Ver detalhes'}</span>
                    {expandedSection === 'campaigns' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {campaignTypes.map((campaign, index) => (
                    <div key={index} className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                      campaign.popular ? 'border-green-300 bg-green-50' : 'border-gray-200 bg-white'
                    }`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          campaign.popular ? 'bg-green-100' : 'bg-gray-100'
                        }`}>
                          <campaign.icon className={`w-5 h-5 ${
                            campaign.popular ? 'text-green-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{campaign.title}</h4>
                          {campaign.popular && (
                            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                              Padrão
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{campaign.description}</p>
                      {campaign.note && (
                        <p className="text-xs text-gray-500 italic">{campaign.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Definição de Público */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-white border-2 border-purple-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1.3 Definição de Público</h3>
                      <p className="text-gray-600">Você escolhe como vamos encontrar seus leads ideais:</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSection('audience')}
                    className="flex items-center space-x-2"
                  >
                    <span>{expandedSection === 'audience' ? 'Menos detalhes' : 'Ver detalhes'}</span>
                    {expandedSection === 'audience' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {audienceOptions.map((option, index) => (
                    <div key={index} className="p-4 rounded-xl border-2 border-gray-200 bg-white hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <option.icon className="w-5 h-5 text-purple-600" />
                        </div>
                        <h4 className="font-semibold text-gray-900">{option.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Construção da Sequência */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-white border-2 border-orange-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1.4 Construção da Sequência</h3>
                      <p className="text-gray-600">Você tem 2 opções:</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleSection('sequence')}
                    className="flex items-center space-x-2"
                  >
                    <span>{expandedSection === 'sequence' ? 'Menos detalhes' : 'Ver detalhes'}</span>
                    {expandedSection === 'sequence' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-3">Opção A: Construir sequência manualmente</h4>
                    <p className="text-orange-800 text-sm mb-4">Você escolhe cada etapa da cadência:</p>
                    <ul className="space-y-2 text-orange-800 text-sm">
                      <li>• Curtir última publicação (engajamento prévio)</li>
                      <li>• Ver perfil do LinkedIn (despertar curiosidade)</li>
                      <li>• Solicitar conexão (com note personalizada ≤200 caracteres)</li>
                      <li>• Enviar mensagem do LinkedIn (após aceitar conexão)</li>
                      <li>• Follow-ups encadeados (2º, 3º mensagem com intervalos definidos)</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">Opção B: Biblioteca de modelos</h4>
                    <p className="text-blue-800 text-sm mb-4">Use templates prontos e testados por segmento:</p>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li>• SaaS & Tech</li>
                      <li>• Agências de Marketing</li>
                      <li>• Consultorias</li>
                      <li>• Indústria B2B</li>
                      <li>• Educação Corporativa</li>
                    </ul>
                  </div>
                </div>

                {expandedSection === 'sequence' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Exemplo de cadência completa:</h4>
                    {sequenceExample.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-16 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-semibold text-orange-700">{step.day}</span>
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">{step.action}</h5>
                          <p className="text-sm text-gray-600 mb-1">{step.description}</p>
                          {step.note && (
                            <div className="p-3 bg-white rounded-lg border border-gray-200">
                              <p className="text-sm text-gray-700 italic">"{step.note}"</p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Personalização e Limites */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Card className="bg-white border-2 border-indigo-200 hover:shadow-xl transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <Settings className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">1.5 Personalização de Mensagens</h3>
                      <p className="text-gray-600">Você escreve as mensagens usando variáveis dinâmicas:</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Variáveis disponíveis:</h4>
                    <div className="space-y-2">
                      {[`{{firstName}} → Nome do lead`, `{{lastName}} → Sobrenome`, `{{company}} → Empresa atual`, `{{position}} → Cargo`, `{{industry}} → Setor`].map((variable, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-indigo-50 rounded-lg">
                          <code className="text-sm font-mono text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
                            {variable.split(' → ')[0]}
                          </code>
                          <span className="text-sm text-gray-600">{variable.split(' → ')[1]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Exemplo de mensagem:</h4>
                    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <p className="text-sm text-gray-700 italic">
                        &quot;Oi {`{{firstName}}`}, vi que você lidera {`{{position}}`} na {`{{company}}`}. Ajudamos empresas de {`{{industry}}`} a gerarem reuniões no LinkedIn. Faz sentido trocar uma ideia?&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-green-900">1.6 Definição de Limites e Segurança</h4>
                  </div>
                  <p className="text-green-800 text-sm mb-4">Configuramos limites seguros para evitar ban do LinkedIn:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {safetyLimits.map((limit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-green-800">{limit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
