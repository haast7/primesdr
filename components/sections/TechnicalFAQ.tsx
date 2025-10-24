'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Users,
  Shield,
  Clock,
  MessageSquare,
  Settings,
  AlertTriangle
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

export function TechnicalFAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'Preciso de Sales Navigator?',
      answer: 'Recomendado mas não obrigatório. Com Sales Nav, conseguimos listas mais precisas e créditos de InMail.',
      icon: Users,
      category: 'Configuração'
    },
    {
      question: 'Quantos perfis devo conectar?',
      answer: 'Mínimo 1, ideal 3-6 (depende do tamanho do time). Quanto mais perfis, mais escala.',
      icon: Users,
      category: 'Configuração'
    },
    {
      question: 'Meu LinkedIn pode ser banido?',
      answer: 'Não. Respeitamos todos os limites e operamos há 2+ anos sem um único ban.',
      icon: Shield,
      category: 'Segurança'
    },
    {
      question: 'Posso pausar campanhas?',
      answer: 'Sim, a qualquer momento. Pausa e retoma quando quiser.',
      icon: Settings,
      category: 'Controle'
    },
    {
      question: 'Como funciona o SDR humano?',
      answer: 'Quando lead responde, SDR recebe notificação, entra na conversa, qualifica e agenda. Não é bot.',
      icon: MessageSquare,
      category: 'Processo'
    },
    {
      question: 'Posso ver as mensagens antes de enviar?',
      answer: 'Sim. Você aprova todas as mensagens na configuração inicial.',
      icon: MessageSquare,
      category: 'Controle'
    },
    {
      question: 'E se alguém reclamar de spam?',
      answer: 'Raramente acontece (<0,1%), mas se acontecer, pausamos a campanha daquele perfil e ajustamos abordagem.',
      icon: AlertTriangle,
      category: 'Segurança'
    },
    {
      question: 'Quanto tempo até ver resultado?',
      answer: 'Respostas na 1ª semana. Reuniões a partir da 2ª-3ª semana. Ritmo estável em 45-60 dias.',
      icon: Clock,
      category: 'Resultados'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Configuração': 'bg-blue-100 text-blue-700',
      'Segurança': 'bg-green-100 text-green-700',
      'Controle': 'bg-purple-100 text-purple-700',
      'Processo': 'bg-orange-100 text-orange-700',
      'Resultados': 'bg-indigo-100 text-indigo-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <Section background="gray" padding="lg" id="faq-tecnico">
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-2xl mb-6">
              <HelpCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              FAQ Técnico
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Perguntas frequentes sobre o processo
            </p>
          </motion.div>

          {/* FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              >
                <Card className="bg-white border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <faq.icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryColor(faq.category)}`}>
                            {faq.category}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                      >
                        {expandedFAQ === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-600" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-600" />
                        )}
                      </button>
                    </div>

                    {expandedFAQ === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 bg-indigo-50 rounded-xl border border-indigo-200"
                      >
                        <p className="text-indigo-800 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Support */}
          <motion.div
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <HelpCircle className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-gray-900">Ainda tem dúvidas?</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Nossa equipe está sempre disponível para esclarecer qualquer questão técnica
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200">
                  Falar com suporte
                </button>
                <button className="text-indigo-600 hover:text-indigo-700 font-semibold px-6 py-3 border border-indigo-600 rounded-xl transition-colors duration-200">
                  Ver documentação
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}










