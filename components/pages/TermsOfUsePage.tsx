'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  FileText, 
  Shield, 
  Users, 
  CreditCard, 
  AlertTriangle, 
  XCircle, 
  CheckCircle, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe,
  Lock,
  Scale,
  UserCheck,
  Settings,
  DollarSign,
  Calendar,
  Ban,
  AlertCircle
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

export function TermsOfUsePage() {
  const sections = [
    {
      id: 'aceitacao',
      title: '1. ACEITAÇÃO DOS TERMOS',
      icon: CheckCircle,
      content: (
        <div className="space-y-4">
          <p>
            Bem-vindo à <strong>Prime SDR</strong> ("nós", "nosso" ou "Plataforma"), de propriedade da empresa Prime SDR, inscrita sob o CNPJ 60.782.822/0001-01.
          </p>
          <p>
            Estes Termos de Uso ("Termos") regem o acesso e utilização da plataforma Prime SDR, incluindo o site, serviços de automação de prospecção no LinkedIn, SDR humano, integrações e demais funcionalidades oferecidas.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="text-blue-800">
              <strong>Ao criar uma conta, acessar ou utilizar nossos serviços, você concorda integralmente com estes Termos.</strong> Caso não concorde com qualquer disposição, não utilize a plataforma.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'definicoes',
      title: '2. DEFINIÇÕES',
      icon: FileText,
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Plataforma:</strong> Sistema web da Prime SDR que oferece automação de prospecção no LinkedIn, qualificação de leads e agendamento de reuniões.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Usuário/Cliente:</strong> Pessoa física ou jurídica que contrata e utiliza os serviços da Prime SDR.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Serviços:</strong> Conjunto de funcionalidades oferecidas pela Prime SDR, incluindo automação de cadências no LinkedIn, SDR humano, integrações com CRM, dashboards e relatórios.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Conta:</strong> Perfil individual criado pelo usuário para acessar a plataforma.
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Plano:</strong> Modalidade de assinatura contratada (Starter, Growth ou Scale).
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'elegibilidade',
      title: '3. ELEGIBILIDADE E CADASTRO',
      icon: UserCheck,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.1. Requisitos:</h4>
            <p className="mb-3">Para utilizar a Prime SDR, você deve:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ter capacidade jurídica plena (maior de 18 anos).</li>
              <li>Representar legalmente uma empresa (em caso de pessoa jurídica).</li>
              <li>Possuir perfil ativo no LinkedIn.</li>
              <li>Fornecer informações verdadeiras, precisas e atualizadas.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.2. Criação de conta:</h4>
            <p className="mb-3">Ao criar uma conta, você concorda em:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fornecer dados cadastrais completos e verídicos (nome, email, telefone, empresa, CNPJ).</li>
              <li>Manter suas credenciais de acesso (login e senha) em sigilo.</li>
              <li>Notificar imediatamente a Prime SDR em caso de uso não autorizado da sua conta.</li>
              <li>Ser o único responsável por todas as atividades realizadas sob sua conta.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">3.3. Proibições:</h4>
            <p className="mb-3">É proibido:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Criar múltiplas contas para obter vantagens indevidas.</li>
              <li>Fornecer informações falsas ou de terceiros sem autorização.</li>
              <li>Utilizar a conta de outra pessoa sem permissão expressa.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'servicos',
      title: '4. DESCRIÇÃO DOS SERVIÇOS',
      icon: Settings,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.1. O que a Prime SDR oferece:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Automação de prospecção no LinkedIn:</strong> Envio automatizado de convites de conexão, mensagens personalizadas, follow-ups, curtidas em posts e interações em grupos/eventos.</li>
              <li><strong>Configuração de cadências:</strong> Criação de sequências de mensagens, definição de timing e ações (conexão, mensagem, curtida).</li>
              <li><strong>SDR humano:</strong> Qualificação de leads que respondem e agendamento de reuniões no CRM do cliente.</li>
              <li><strong>Integrações:</strong> Conexão com HubSpot, Pipedrive, RD Station, Google Calendar, Slack e outras ferramentas.</li>
              <li><strong>Dashboard e relatórios:</strong> Métricas em tempo real (taxa de aceitação, resposta, MQLs, reuniões agendadas, CPR).</li>
              <li><strong>Suporte técnico:</strong> Assistência via chat, email e WhatsApp (conforme o plano contratado).</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">4.2. O que a Prime SDR NÃO oferece:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Redação de mensagens:</strong> Você é responsável por criar ou adaptar as mensagens (oferecemos templates como referência).</li>
              <li><strong>Garantia de resultados absolutos:</strong> Embora tenhamos casos de sucesso comprovados, resultados podem variar conforme ICP, mercado, mensagens e timing.</li>
              <li><strong>Acesso direto ao LinkedIn:</strong> A plataforma opera via automação autorizada, respeitando os limites e políticas do LinkedIn.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'planos-pagamento',
      title: '5. PLANOS E PAGAMENTO',
      icon: CreditCard,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.1. Planos disponíveis:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <strong>Starter:</strong> A partir de $79/usuário/mês (até 3 perfis ativos).
              </div>
              <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                <strong>Growth:</strong> A partir de $115/usuário/mês (até 10 perfis ativos, SDR compartilhado).
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                <strong>Scale:</strong> Sob consulta (perfis ilimitados, SDR dedicado, account manager).
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.2. Formas de pagamento:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Cartão de crédito internacional.</li>
              <li>Pix (com conversão de dólar para real pela cotação do dia + IOF).</li>
              <li>Boleto bancário (sob consulta).</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.3. Cobrança e renovação:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Ciclo de cobrança:</strong> Mensal (recorrente), debitado automaticamente na data de contratação.</li>
              <li><strong>Renovação automática:</strong> Sua assinatura renova automaticamente a cada mês, salvo cancelamento prévio.</li>
              <li><strong>Impostos:</strong> Valores podem estar sujeitos a IOF, impostos locais e taxas de conversão cambial.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.4. Atraso no pagamento:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Em caso de inadimplência, o acesso à plataforma será suspenso após 5 dias de atraso.</li>
              <li>Após 15 dias de inadimplência, a conta poderá ser cancelada e os dados excluídos (conforme Política de Privacidade).</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">5.5. Alteração de plano:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Upgrade:</strong> Imediato, com cobrança proporcional (pro-rata).</li>
              <li><strong>Downgrade:</strong> Válido a partir do próximo ciclo de cobrança.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'garantia',
      title: '6. GARANTIA DE SATISFAÇÃO (30 DIAS)',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6.1. Condições da garantia:</h4>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <p className="text-green-800">
                Oferecemos <strong>30 dias de garantia de satisfação</strong> a partir da data de contratação:
              </p>
              <ul className="list-disc list-inside space-y-2 text-green-700 mt-3">
                <li>Se você não estiver satisfeito com os resultados ou serviços prestados, pode solicitar reembolso integral dentro desse prazo.</li>
                <li>Não é necessário justificar o motivo do cancelamento.</li>
              </ul>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6.2. Como solicitar reembolso:</h4>
            <p className="mb-3">Entre em contato via email (contato@primesdr.com) ou WhatsApp (+55 11 94502-2847) informando:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Dados da conta (nome, email cadastrado).</li>
              <li>Solicitação de cancelamento e reembolso.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6.3. Processamento:</h4>
            <p>O reembolso será processado em até <strong>7 dias úteis</strong> após a solicitação, no mesmo método de pagamento utilizado.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">6.4. Após 30 dias:</h4>
            <p>Cancelamentos solicitados após 30 dias <strong>não geram direito a reembolso</strong>, mas a conta permanecerá ativa até o fim do período pago.</p>
          </div>
        </div>
      )
    },
    {
      id: 'cancelamento',
      title: '7. CANCELAMENTO E RESCISÃO',
      icon: XCircle,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.1. Cancelamento pelo cliente:</h4>
            <p className="mb-3">Você pode cancelar sua assinatura a qualquer momento através de:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Painel da plataforma (área "Configurações" > "Cancelar assinatura").</li>
              <li>Email: contato@primesdr.com.</li>
              <li>WhatsApp: +55 11 94502-2847.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.2. Efeitos do cancelamento:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Dentro de 30 dias:</strong> Reembolso integral conforme garantia.</li>
              <li><strong>Após 30 dias:</strong> Conta permanece ativa até o fim do período pago, sem reembolso proporcional.</li>
              <li><strong>Dados:</strong> Seus dados serão mantidos por 5 anos para fins legais e fiscais, podendo ser excluídos mediante solicitação expressa (conforme LGPD).</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">7.3. Cancelamento pela Prime SDR:</h4>
            <p className="mb-3">Reservamo-nos o direito de suspender ou cancelar sua conta, sem reembolso, nas seguintes situações:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Violação destes Termos de Uso.</li>
              <li>Uso indevido da plataforma (spam, fraude, atividades ilegais).</li>
              <li>Inadimplência superior a 15 dias.</li>
              <li>Comportamento abusivo ou ofensivo com a equipe ou outros usuários.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'uso-aceitavel',
      title: '8. USO ACEITÁVEL E PROIBIÇÕES',
      icon: Ban,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">8.1. Você concorda em utilizar a Prime SDR apenas para:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Prospecção B2B legítima e ética.</li>
              <li>Comunicação com leads dentro do seu ICP (Ideal Customer Profile).</li>
              <li>Operações comerciais lícitas e em conformidade com a legislação brasileira.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">8.2. É estritamente proibido:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <strong>Envio de spam:</strong> Mensagens não solicitadas, irrelevantes ou em massa para públicos fora do contexto B2B.
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <strong>Violação das políticas do LinkedIn:</strong> Ultrapassar limites de convites/mensagens, utilizar perfis falsos, comprar conexões.
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <strong>Conteúdo ilegal ou ofensivo:</strong> Enviar mensagens com conteúdo discriminatório, difamatório, pornográfico, violento ou que viole direitos de terceiros.
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <strong>Fraude ou falsidade ideológica:</strong> Representar-se falsamente ou utilizar dados de terceiros sem autorização.
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <strong>Engenharia reversa:</strong> Tentar acessar, copiar, modificar ou descompilar o código-fonte da plataforma.
              </div>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <strong>Ataques cibernéticos:</strong> Realizar ou tentar realizar ataques, injeção de malware, phishing ou qualquer atividade que comprometa a segurança da plataforma.
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">8.3. Consequências:</h4>
            <p>Violações podem resultar em:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Suspensão imediata da conta.</li>
              <li>Cancelamento sem reembolso.</li>
              <li>Responsabilização civil e criminal, conforme a legislação aplicável.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'responsabilidades',
      title: '9. RESPONSABILIDADES DO USUÁRIO',
      icon: Users,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">9.1. Conteúdo das mensagens:</h4>
            <p>Você é <strong>inteiramente responsável</strong> pelo conteúdo das mensagens enviadas via Prime SDR, incluindo:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Veracidade das informações.</li>
              <li>Conformidade com leis de proteção de dados (LGPD, GDPR).</li>
              <li>Respeito aos direitos de propriedade intelectual e imagem de terceiros.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">9.2. Perfil LinkedIn:</h4>
            <p>Você declara ser o legítimo proprietário ou ter autorização para conectar e operar os perfis LinkedIn vinculados à plataforma.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">9.3. Conformidade legal:</h4>
            <p>Você se compromete a utilizar os serviços em conformidade com:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</li>
              <li>Marco Civil da Internet (Lei nº 12.965/2014).</li>
              <li>Código de Defesa do Consumidor (Lei nº 8.078/1990).</li>
              <li>Políticas e Termos de Uso do LinkedIn.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'responsabilidades-prime',
      title: '10. RESPONSABILIDADES DA PRIME SDR',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">10.1. Obrigações:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Fornecer a plataforma em condições de funcionamento adequadas.</li>
              <li>Realizar manutenções preventivas e corretivas (com aviso prévio, quando possível).</li>
              <li>Proteger dados pessoais conforme Política de Privacidade e LGPD.</li>
              <li>Oferecer suporte técnico conforme o plano contratado.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">10.2. Limitações de responsabilidade:</h4>
            <p>A Prime SDR <strong>NÃO se responsabiliza por:</strong></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <strong>Suspensão ou banimento do LinkedIn:</strong> Embora operemos dentro dos limites seguros, o LinkedIn pode alterar suas políticas a qualquer momento.
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <strong>Resultados comerciais:</strong> Não garantimos número específico de reuniões, vendas ou receita.
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <strong>Conteúdo das mensagens:</strong> Você é o único responsável pelo que envia aos seus leads.
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                <strong>Integrações de terceiros:</strong> Instabilidades ou falhas em APIs de terceiros estão fora do nosso controle.
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">10.3. Disponibilidade:</h4>
            <p>Buscamos manter a plataforma disponível 24/7, mas não garantimos disponibilidade ininterrupta devido a:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Manutenções programadas (avisadas previamente).</li>
              <li>Falhas de infraestrutura (AWS, Google Cloud).</li>
              <li>Casos de força maior.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'propriedade-intelectual',
      title: '11. PROPRIEDADE INTELECTUAL',
      icon: Lock,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">11.1. Direitos da Prime SDR:</h4>
            <p>Todo o conteúdo da plataforma (código-fonte, design, textos, logos, marcas, templates) é de propriedade exclusiva da Prime SDR e protegido por direitos autorais e propriedade intelectual.</p>
            <p className="mt-3">É proibido:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Reproduzir, copiar, distribuir ou modificar qualquer parte da plataforma sem autorização expressa.</li>
              <li>Utilizar a marca "Prime SDR" ou logos em materiais próprios sem permissão.</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">11.2. Direitos do usuário:</h4>
            <p>Você mantém todos os direitos sobre:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
              <li>Conteúdo das suas mensagens.</li>
              <li>Dados dos seus leads.</li>
              <li>Informações do seu CRM.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">11.3. Licença de uso:</h4>
            <p>Ao utilizar a plataforma, concedemos a você uma licença <strong>limitada, não exclusiva, intransferível e revogável</strong> para acessar e usar os serviços conforme estes Termos.</p>
          </div>
        </div>
      )
    },
    {
      id: 'privacidade',
      title: '12. PRIVACIDADE E PROTEÇÃO DE DADOS',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <p>
            O tratamento de dados pessoais pela Prime SDR é regido pela nossa <strong>Política de Privacidade</strong>, disponível em <a href="/privacidade" className="text-primary-600 hover:text-primary-700 underline">link</a>.
          </p>
          <p>
            Ao aceitar estes Termos, você também concorda com a Política de Privacidade.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="text-lg font-semibold text-blue-900 mb-3">Resumo:</h4>
            <ul className="list-disc list-inside space-y-2 text-blue-800">
              <li>Coletamos apenas dados necessários para prestação dos serviços.</li>
              <li>Não vendemos, alugamos ou comercializamos seus dados.</li>
              <li>Cumprimos integralmente a LGPD.</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'legislacao',
      title: '17. LEGISLAÇÃO E FORO',
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p>
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
          </p>
          <p>
            Eventuais controvérsias serão dirimidas no foro da Comarca de <strong>São Paulo/SP</strong>, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
          </p>
        </div>
      )
    },
    {
      id: 'contato',
      title: '18. CONTATO',
      icon: Mail,
      content: (
        <div className="space-y-6">
          <p>Para dúvidas, sugestões ou reclamações sobre estes Termos de Uso:</p>
          
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border border-primary-200">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Informações de Contato</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Prime SDR</p>
                    <p className="text-gray-600">CNPJ: 60.782.822/0001-01</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">contato@primesdr.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">+55 11 94502-2847</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">https://primesdr.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">São Paulo, SP - Brasil</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700">Seg - Sex: 9h às 18h</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="text-yellow-800">
              <strong>Ao utilizar os serviços da Prime SDR, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso.</strong>
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="white" padding="lg" className="border-b border-gray-200">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-primary-100 rounded-full text-primary-700 font-semibold text-sm mb-6">
                <FileText className="w-5 h-5 mr-2" />
                Termos e Condições
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Termos de Uso
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Conheça as condições e regras para utilização de nossa plataforma de automação de prospecção no LinkedIn.
              </p>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Última atualização: 13 de outubro de 2025</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Content */}
      <Section background="gray" padding="xl">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  <div className="prose prose-gray max-w-none">
                    {section.content}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>
    </>
  );
}





