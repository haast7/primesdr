export type Language = 'pt' | 'es' | 'en';

export interface Translations {
  // Header
  header: {
    login: string;
    startFree: string;
    language: string;
  };
  
  // Navigation
  nav: {
    howItWorks: string;
    pricing: string;
    resources: string;
  };

  // Hero Section
  hero: {
    badge: string;
    headline: string;
    headlineHighlight: string;
    subtitle: string;
    proofPoints: {
      responseRate: string;
      roi: string;
      guarantee: string;
    };
    cta: {
      primary: string;
      secondary: string;
    };
    trust: string;
  };

  // Case Study
  caseStudy: {
    headline: string;
    subtitle: string;
    stats: {
      meetings: string;
      pipeline: string;
      clients: string;
      average: string;
    };
    description: string;
    benefits: string[];
  };

  // Differentiators
  differentiators: {
    headline: string;
    subtitle: string;
    features: {
      intelligence: {
        title: string;
        description: string;
        points: string[];
      };
      engagement: {
        title: string;
        description: string;
        points: string[];
      };
      opportunities: {
        title: string;
        description: string;
        points: string[];
      };
    };
    additional: {
      title: string;
      items: {
        title: string;
        description: string;
      }[];
    };
    cta: string;
  };

  // Guarantee
  guarantee: {
    headline: string;
    subtitle: string;
    benefits: {
      title: string;
      description: string;
    }[];
  };

  // Pricing
  pricing: {
    headline: string;
    subtitle: string;
    toggle: {
      monthly: string;
      annual: string;
    };
    plans: {
      starter: {
        name: string;
        description: string;
        price: string;
        features: string[];
        cta: string;
      };
      growth: {
        name: string;
        description: string;
        price: string;
        features: string[];
        cta: string;
        popular: string;
      };
      scale: {
        name: string;
        description: string;
        price: string;
        features: string[];
        cta: string;
      };
    };
    seeAllFeatures: string;
  };

  // How It Works
  howItWorks: {
    headline: string;
    subtitle: string;
    steps: {
      title: string;
      description: string;
      points: string[];
    }[];
  };

  // FAQ
  faq: {
    headline: string;
    subtitle: string;
    questions: {
      question: string;
      answer: string;
    }[];
    notFound: string;
    contact: string;
  };

  // Final CTA
  finalCta: {
    headline: string;
    subtitle: string;
    options: {
      schedule: string;
      seePlans: string;
    };
    form: {
      name: string;
      email: string;
      phone: string;
      company: string;
      submit: string;
    };
  };

  // Resources
  resources: {
    hero: {
      title: string;
      subtitle: string;
      searchPlaceholder: string;
    };
    filters: {
      all: string;
      tools: string;
      guides: string;
      videos: string;
      cases: string;
    };
    tools: {
      roiCalculator: {
        title: string;
        description: string;
        cta: string;
      };
      profileAnalyzer: {
        title: string;
        description: string;
        cta: string;
      };
      headlineGenerator: {
        title: string;
        description: string;
        cta: string;
      };
      qualificationQuiz: {
        title: string;
        description: string;
        cta: string;
      };
    };
    guides: {
      completePlaybook: {
        title: string;
        description: string;
        cta: string;
      };
      fatalErrors: {
        title: string;
        description: string;
        cta: string;
      };
      decisionMakers: {
        title: string;
        description: string;
        cta: string;
      };
    };
    videos: {
      webinar100Meetings: {
        title: string;
        description: string;
        cta: string;
      };
      fiveMessages: {
        title: string;
        description: string;
        cta: string;
      };
      behindScenes: {
        title: string;
        description: string;
        cta: string;
      };
    };
    cases: {
      saasCase: {
        title: string;
        description: string;
        cta: string;
      };
      agencyCase: {
        title: string;
        description: string;
        cta: string;
      };
      techCase: {
        title: string;
        description: string;
        cta: string;
      };
    };
    finalCta: {
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
  };

  // Footer
  footer: {
    company: {
      title: string;
      description: string;
    };
    links: {
      company: string;
      resources: string;
      legal: string;
    };
    sections: {
      company: string[];
      resources: string[];
      legal: string[];
    };
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    header: {
      login: 'Entrar',
      startFree: 'Teste Grátis',
      language: 'Idioma'
    },
    nav: {
      howItWorks: 'Como Funciona',
      pricing: 'Preços',
      resources: 'Recursos'
    },
    hero: {
      badge: 'Mais de 2.000 perfis ativos gerando reuniões agora',
      headline: 'Seu time não tem tempo pra prospectar.',
      headlineHighlight: 'A gente faz isso por você.',
      subtitle: '112 reuniões em 45 dias no calendário do seu comercial — sem contratar SDR, sem perder tempo com cadências e sem depender de mídia paga que queima budget.',
      proofPoints: {
        responseRate: 'Taxa média de resposta: 22%',
        roi: 'ROI médio: 2.100% em 60 dias',
        guarantee: 'Garantia de 90 dias'
      },
      cta: {
        primary: 'Quero 100+ reuniões em 45 dias',
        secondary: 'Ver caso completo (2 min)'
      },
      trust: 'Confiam em nós:'
    },
    caseStudy: {
      headline: 'R$ 6,3 milhões em pipeline. 112 reuniões. 45 dias.',
      subtitle: 'Resultados reais de um cliente que implementou nossa metodologia completa.',
      stats: {
        meetings: '112 Reuniões agendadas',
        pipeline: 'R$ 6,3M em pipeline',
        clients: '12 Clientes ativos',
        average: '13 dias de média'
      },
      description: 'Em apenas 45 dias, conseguimos transformar o LinkedIn em uma máquina de geração de leads para nosso cliente. Veja como:',
      benefits: [
        'Identificação precisa do ICP ideal',
        'Cadências personalizadas por persona',
        'Follow-up automatizado e humanizado',
        'Relatórios detalhados de performance'
      ]
    },
    differentiators: {
      headline: 'A tríade que ninguém mais tem',
      subtitle: 'Combinamos três elementos únicos que garantem resultados consistentes.',
      features: {
        intelligence: {
          title: 'Inteligência de mercado',
          description: 'Análise profunda do seu mercado e concorrência.',
          points: [
            'Mapeamento completo do ICP',
            'Análise de concorrência',
            'Identificação de oportunidades',
            'Benchmarking de performance'
          ]
        },
        engagement: {
          title: 'Engajamento com valor',
          description: 'Cada mensagem entrega valor real para o prospect.',
          points: [
            'Conteúdo personalizado por persona',
            'Insights relevantes do mercado',
            'Propostas de valor únicas',
            'Follow-up contextual'
          ]
        },
        opportunities: {
          title: 'Novas oportunidades',
          description: 'Descobrimos leads que você nem sabia que existiam.',
          points: [
            'Expansão de mercado',
            'Novos segmentos',
            'Oportunidades sazonais',
            'Parcerias estratégicas'
          ]
        }
      },
      additional: {
        title: 'Benefícios adicionais',
        items: [
          {
            title: 'Setup em 7 dias',
            description: 'Do kickoff aos primeiros resultados em uma semana.'
          },
          {
            title: 'Suporte dedicado',
            description: 'Equipe especializada disponível para seu sucesso.'
          },
          {
            title: 'Relatórios detalhados',
            description: 'Acompanhe cada métrica em tempo real.'
          }
        ]
      },
      cta: 'Quero agendar uma reunião'
    },
    guarantee: {
      headline: 'Teste 90 dias. Se não bater meta, você não paga. Nada.',
      subtitle: 'Estamos tão confiantes nos nossos resultados que oferecemos uma garantia única no mercado.',
      benefits: [
        {
          title: 'Sem riscos',
          description: 'Teste por 90 dias sem compromisso financeiro.'
        },
        {
          title: 'Resultados garantidos',
          description: 'Se não atingir a meta, reembolso integral.'
        },
        {
          title: 'Suporte total',
          description: 'Nossa equipe trabalha para o seu sucesso.'
        }
      ]
    },
    pricing: {
      headline: 'Escolha seu plano. Domine seu mercado.',
      subtitle: 'Planos flexíveis para empresas de todos os tamanhos.',
      toggle: {
        monthly: 'Mensal',
        annual: 'Anual'
      },
      plans: {
        starter: {
          name: 'Starter',
          description: 'Para quem quer provar que funciona antes de escalar',
          price: '$799/mês',
          features: [
            'Até 500 prospects/mês',
            '1 SDR dedicado',
            'Setup em 7 dias',
            'Relatórios básicos',
            'Suporte por email'
          ],
          cta: 'Começar agora'
        },
        growth: {
          name: 'Growth',
          description: 'Para times que querem resultados previsíveis sem depender de mídia paga',
          price: '$1.299/mês',
          features: [
            'Até 1.000 prospects/mês',
            '2 SDRs dedicados',
            'Setup em 5 dias',
            'Relatórios avançados',
            'Suporte prioritário',
            'Integração com CRM'
          ],
          cta: 'Começar agora',
          popular: 'Mais popular'
        },
        scale: {
          name: 'Scale',
          description: 'Para quem quer ser inevitável no mercado',
          price: '$2.499/mês',
          features: [
            'Até 2.000 prospects/mês',
            '3 SDRs dedicados',
            'Setup em 3 dias',
            'Relatórios customizados',
            'Suporte dedicado',
            'Integração completa',
            'Consultoria estratégica'
          ],
          cta: 'Entrar em contato'
        }
      },
      seeAllFeatures: 'Ver todos os recursos'
    },
    howItWorks: {
      headline: 'De kickoff a resultados - em 7 dias',
      subtitle: 'Nosso processo comprovado para transformar seu LinkedIn em máquina de leads.',
      steps: [
        {
          title: 'Kickoff',
          description: 'Alinhamento completo da estratégia e objetivos.',
          points: [
            'Definição do ICP ideal',
            'Análise da concorrência',
            'Estratégia de abordagem',
            'Cronograma de execução'
          ]
        },
        {
          title: 'Setup da conta',
          description: 'Configuração técnica e otimização do perfil.',
          points: [
            'Otimização do perfil LinkedIn',
            'Configuração de ferramentas',
            'Criação de templates',
            'Testes de conectividade'
          ]
        },
        {
          title: 'Lista de prospects',
          description: 'Identificação e qualificação dos leads ideais.',
          points: [
            'Pesquisa avançada no LinkedIn',
            'Filtros por persona',
            'Validação de contatos',
            'Segmentação por prioridade'
          ]
        },
        {
          title: 'Cadências personalizadas',
          description: 'Criação de sequências únicas para cada persona.',
          points: [
            'Templates personalizados',
            'Timing otimizado',
            'A/B testing',
            'Refinamento contínuo'
          ]
        },
        {
          title: 'Execução',
          description: 'Início das campanhas e monitoramento.',
          points: [
            'Disparo das mensagens',
            'Monitoramento em tempo real',
            'Ajustes dinâmicos',
            'Follow-up automático'
          ]
        },
        {
          title: 'Qualificação',
          description: 'Filtragem e qualificação dos leads interessados.',
          points: [
            'Análise de respostas',
            'Score de qualificação',
            'Agendamento de reuniões',
            'Handoff para vendas'
          ]
        },
        {
          title: 'Resultados',
          description: 'Entrega de leads qualificados e relatórios.',
          points: [
            'Reuniões agendadas',
            'Pipeline gerado',
            'Relatórios detalhados',
            'Otimizações contínuas'
          ]
        }
      ]
    },
    faq: {
      headline: 'Perguntas que todo mundo faz',
      subtitle: 'Esclarecemos as principais dúvidas sobre nosso serviço.',
      questions: [
        {
          question: 'Isso viola as regras do LinkedIn?',
          answer: 'Não. Respeitamos todos os limites, variamos cadência e nunca disparamos spam. Operamos há anos sem um único ban.'
        },
        {
          question: 'Funciona pro meu nicho?',
          answer: 'Se é B2B com ticket ≥ R$ 3k e venda consultiva, sim. SaaS, serviços, indústria, tech, consultorias — todos funcionam.'
        },
        {
          question: 'Quanto tempo até ver resultado?',
          answer: 'Respostas na 1ª semana. Reuniões a partir da 2ª–3ª semana. Pipeline robusto em 45–60 dias.'
        },
        {
          question: 'E se não funcionar?',
          answer: '90 dias de teste. Não bateu meta? Reembolso integral. Simples assim.'
        },
        {
          question: 'Preciso ter LinkedIn Premium?',
          answer: 'Não é obrigatório, mas recomendamos para melhor performance. Incluímos no plano Growth e Scale.'
        },
        {
          question: 'Como vocês garantem a qualidade dos leads?',
          answer: 'Usamos score de qualificação, análise de perfil e validação manual para garantir que apenas leads interessados cheguem até você.'
        }
      ],
      notFound: 'Não encontrou sua resposta?',
      contact: 'Fale com a gente'
    },
    finalCta: {
      headline: 'Pronto para encher a agenda do seu time?',
      subtitle: 'Junte-se a centenas de empresas que já transformaram o LinkedIn em sua principal fonte de leads.',
      options: {
        schedule: 'Agende uma reunião',
        seePlans: 'Ver planos'
      },
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefone',
        company: 'Empresa',
        submit: 'Agendar reunião'
      }
    },
    resources: {
      hero: {
        title: 'Aprenda a dominar prospecção B2B no LinkedIn.',
        subtitle: 'Ferramentas gratuitas, playbooks testados e casos reais. Tudo o que você precisa para encher sua agenda de reuniões qualificadas.',
        searchPlaceholder: 'Buscar recursos... ex: "sequência de mensagens", "taxa de conversão"'
      },
      filters: {
        all: 'Todos',
        tools: 'Ferramentas',
        guides: 'Guias',
        videos: 'Vídeos',
        cases: 'Cases'
      },
      tools: {
        roiCalculator: {
          title: 'Calculadora de ROI de Prospecção',
          description: 'Descubra quantas reuniões e quanto pipeline você pode gerar investindo em prospecção no LinkedIn.',
          cta: 'Calcular meu ROI'
        },
        profileAnalyzer: {
          title: 'Analisador de Perfil LinkedIn',
          description: 'Cole a URL do seu perfil e receba análise instantânea com pontos de melhoria.',
          cta: 'Analisar meu perfil'
        },
        headlineGenerator: {
          title: 'Gerador de Headline de LinkedIn',
          description: 'Responda 3 perguntas e receba 5 opções de headline testadas.',
          cta: 'Gerar minha headline'
        },
        qualificationQuiz: {
          title: 'Quiz de Qualificação',
          description: '5 perguntas, 60 segundos, resultado personalizado com plano de ação.',
          cta: 'Fazer o quiz'
        }
      },
      guides: {
        completePlaybook: {
          title: 'O Playbook Completo de Prospecção no LinkedIn (2025)',
          description: 'Método passo a passo para gerar 100+ reuniões/mês usando LinkedIn. ICP, mensagens, cadências, métricas e automação segura.',
          cta: 'Baixar guia grátis'
        },
        fatalErrors: {
          title: '7 Erros Fatais que Matam Sua Taxa de Resposta no LinkedIn',
          description: 'Descubra os erros mais comuns (e como corrigi-los) que fazem decisores ignorarem suas mensagens.',
          cta: 'Baixar checklist'
        },
        decisionMakers: {
          title: 'Como Acessar Decisores que Não Atendem Cold Call',
          description: 'CEOs, Diretores e VPs não atendem telefone. Mas eles respondem no LinkedIn — se você souber como.',
          cta: 'Baixar guia'
        }
      },
      videos: {
        webinar100Meetings: {
          title: 'Como Gerar 100+ Reuniões/Mês no LinkedIn (sem ser chato)',
          description: 'Método completo (ICP → mensagem → follow-up) com demonstração ao vivo da plataforma.',
          cta: 'Assistir agora'
        },
        fiveMessages: {
          title: '5 Mensagens que Decisores SEMPRE Respondem',
          description: 'Análise de mensagens com maior taxa de resposta e por que funcionam.',
          cta: 'Assistir'
        },
        behindScenes: {
          title: 'Bastidores: Como Geramos R$ 6,3M em Pipeline em 60 Dias',
          description: 'Case real com métricas, estratégias e lições aprendidas.',
          cta: 'Assistir'
        }
      },
      cases: {
        saasCase: {
          title: 'SaaS B2B → R$ 6,3M em pipeline (60 dias)',
          description: 'Como transformamos o LinkedIn em máquina de leads para uma SaaS de gestão.',
          cta: 'Ver case completo'
        },
        agencyCase: {
          title: 'Agência → 403 leads em 90 dias',
          description: 'Estratégia de prospecção para agência de marketing digital.',
          cta: 'Ver case completo'
        },
        techCase: {
          title: 'Tech → 87 reuniões em 30 dias',
          description: 'Prospecção para empresa de tecnologia com ticket alto.',
          cta: 'Ver case completo'
        }
      },
      finalCta: {
        title: 'Pronto para colocar em prática?',
        subtitle: 'Você tem o conhecimento. Agora falta a execução. A Prime SDR faz isso por você.',
        primaryCta: 'Agendar demonstração (15 min)',
        secondaryCta: 'Testar 90 dias sem risco'
      }
    },
    footer: {
      company: {
        title: 'Prime SDR',
        description: 'Transformamos LinkedIn em motor de receita previsível para empresas B2B.'
      },
      links: {
        company: 'Empresa',
        resources: 'Recursos',
        legal: 'Legal'
      },
      sections: {
        company: ['Sobre nós', 'Carreiras', 'Contato', 'Blog'],
        resources: ['Como funciona', 'Cases de sucesso', 'Preços', 'FAQ'],
        legal: ['Termos de uso', 'Política de privacidade', 'Cookies', 'LGPD']
      },
      copyright: '© 2024 Prime SDR. Todos os direitos reservados.'
    }
  },
  es: {
    header: {
      login: 'Iniciar sesión',
      startFree: 'Prueba gratis',
      language: 'Idioma'
    },
    nav: {
      howItWorks: 'Cómo funciona',
      pricing: 'Precios',
      resources: 'Recursos'
    },
    hero: {
      badge: 'Más de 2.000 perfiles activos generando reuniones ahora',
      headline: 'Tu equipo no tiene tiempo para prospectar.',
      headlineHighlight: 'Nosotros lo hacemos por ti.',
      subtitle: '112 reuniones en 45 días en el calendario de tu comercial — sin contratar SDR, sin perder tiempo con cadencias y sin depender de medios pagados que queman presupuesto.',
      proofPoints: {
        responseRate: 'Tasa promedio de respuesta: 22%',
        roi: 'ROI promedio: 2.100% en 60 días',
        guarantee: 'Garantía de 90 días'
      },
      cta: {
        primary: 'Quiero 100+ reuniones en 45 días',
        secondary: 'Ver caso completo (2 min)'
      },
      trust: 'Confían en nosotros:'
    },
    caseStudy: {
      headline: 'R$ 6,3 millones en pipeline. 112 reuniones. 45 días.',
      subtitle: 'Resultados reales de un cliente que implementó nuestra metodología completa.',
      stats: {
        meetings: '112 Reuniones agendadas',
        pipeline: 'R$ 6,3M en pipeline',
        clients: '12 Clientes activos',
        average: '13 días de promedio'
      },
      description: 'En solo 45 días, logramos transformar LinkedIn en una máquina de generación de leads para nuestro cliente. Mira cómo:',
      benefits: [
        'Identificación precisa del ICP ideal',
        'Cadencias personalizadas por persona',
        'Follow-up automatizado y humanizado',
        'Reportes detallados de performance'
      ]
    },
    differentiators: {
      headline: 'La tríada que nadie más tiene',
      subtitle: 'Combinamos tres elementos únicos que garantizan resultados consistentes.',
      features: {
        intelligence: {
          title: 'Inteligencia de mercado',
          description: 'Análisis profundo de tu mercado y competencia.',
          points: [
            'Mapeo completo del ICP',
            'Análisis de competencia',
            'Identificación de oportunidades',
            'Benchmarking de performance'
          ]
        },
        engagement: {
          title: 'Engagement con valor',
          description: 'Cada mensaje entrega valor real para el prospect.',
          points: [
            'Contenido personalizado por persona',
            'Insights relevantes del mercado',
            'Propuestas de valor únicas',
            'Follow-up contextual'
          ]
        },
        opportunities: {
          title: 'Nuevas oportunidades',
          description: 'Descubrimos leads que ni siquiera sabías que existían.',
          points: [
            'Expansión de mercado',
            'Nuevos segmentos',
            'Oportunidades estacionales',
            'Alianzas estratégicas'
          ]
        }
      },
      additional: {
        title: 'Beneficios adicionales',
        items: [
          {
            title: 'Setup en 7 días',
            description: 'Del kickoff a los primeros resultados en una semana.'
          },
          {
            title: 'Soporte dedicado',
            description: 'Equipo especializado disponible para tu éxito.'
          },
          {
            title: 'Reportes detallados',
            description: 'Acompaña cada métrica en tiempo real.'
          }
        ]
      },
      cta: 'Quiero agendar una reunión'
    },
    guarantee: {
      headline: 'Prueba 90 días. Si no cumples la meta, no pagas. Nada.',
      subtitle: 'Estamos tan seguros de nuestros resultados que ofrecemos una garantía única en el mercado.',
      benefits: [
        {
          title: 'Sin riesgos',
          description: 'Prueba por 90 días sin compromiso financiero.'
        },
        {
          title: 'Resultados garantizados',
          description: 'Si no alcanzas la meta, reembolso integral.'
        },
        {
          title: 'Soporte total',
          description: 'Nuestro equipo trabaja para tu éxito.'
        }
      ]
    },
    pricing: {
      headline: 'Elige tu plan. Domina tu mercado.',
      subtitle: 'Planes flexibles para empresas de todos los tamaños.',
      toggle: {
        monthly: 'Mensual',
        annual: 'Anual'
      },
      plans: {
        starter: {
          name: 'Starter',
          description: 'Para quien quiere probar que funciona antes de escalar',
          price: '$799/mes',
          features: [
            'Hasta 500 prospects/mes',
            '1 SDR dedicado',
            'Setup en 7 días',
            'Reportes básicos',
            'Soporte por email'
          ],
          cta: 'Comenzar ahora'
        },
        growth: {
          name: 'Growth',
          description: 'Para equipos que quieren resultados predecibles sin depender de medios pagados',
          price: '$1.299/mes',
          features: [
            'Hasta 1.000 prospects/mes',
            '2 SDRs dedicados',
            'Setup en 5 días',
            'Reportes avanzados',
            'Soporte prioritario',
            'Integración con CRM'
          ],
          cta: 'Comenzar ahora',
          popular: 'Más popular'
        },
        scale: {
          name: 'Scale',
          description: 'Para quien quiere ser inevitable en el mercado',
          price: '$2.499/mes',
          features: [
            'Hasta 2.000 prospects/mes',
            '3 SDRs dedicados',
            'Setup en 3 días',
            'Reportes personalizados',
            'Soporte dedicado',
            'Integración completa',
            'Consultoría estratégica'
          ],
          cta: 'Contactar'
        }
      },
      seeAllFeatures: 'Ver todos los recursos'
    },
    howItWorks: {
      headline: 'De kickoff a resultados - en 7 días',
      subtitle: 'Nuestro proceso comprobado para transformar tu LinkedIn en máquina de leads.',
      steps: [
        {
          title: 'Kickoff',
          description: 'Alineación completa de la estrategia y objetivos.',
          points: [
            'Definición del ICP ideal',
            'Análisis de la competencia',
            'Estrategia de abordaje',
            'Cronograma de ejecución'
          ]
        },
        {
          title: 'Setup de la cuenta',
          description: 'Configuración técnica y optimización del perfil.',
          points: [
            'Optimización del perfil LinkedIn',
            'Configuración de herramientas',
            'Creación de templates',
            'Pruebas de conectividad'
          ]
        },
        {
          title: 'Lista de prospects',
          description: 'Identificación y calificación de los leads ideales.',
          points: [
            'Búsqueda avanzada en LinkedIn',
            'Filtros por persona',
            'Validación de contactos',
            'Segmentación por prioridad'
          ]
        },
        {
          title: 'Cadencias personalizadas',
          description: 'Creación de secuencias únicas para cada persona.',
          points: [
            'Templates personalizados',
            'Timing optimizado',
            'A/B testing',
            'Refinamiento continuo'
          ]
        },
        {
          title: 'Ejecución',
          description: 'Inicio de las campañas y monitoreo.',
          points: [
            'Disparo de mensajes',
            'Monitoreo en tiempo real',
            'Ajustes dinámicos',
            'Follow-up automático'
          ]
        },
        {
          title: 'Calificación',
          description: 'Filtrado y calificación de los leads interesados.',
          points: [
            'Análisis de respuestas',
            'Score de calificación',
            'Agendamiento de reuniones',
            'Handoff para ventas'
          ]
        },
        {
          title: 'Resultados',
          description: 'Entrega de leads calificados y reportes.',
          points: [
            'Reuniones agendadas',
            'Pipeline generado',
            'Reportes detallados',
            'Optimizaciones continuas'
          ]
        }
      ]
    },
    faq: {
      headline: 'Preguntas que todos hacen',
      subtitle: 'Aclaramos las principales dudas sobre nuestro servicio.',
      questions: [
        {
          question: '¿Esto viola las reglas de LinkedIn?',
          answer: 'No. Respetamos todos los límites, variamos cadencia y nunca disparamos spam. Operamos hace años sin una sola suspensión.'
        },
        {
          question: '¿Funciona para mi nicho?',
          answer: 'Si es B2B con ticket ≥ R$ 3k y venta consultiva, sí. SaaS, servicios, industria, tech, consultorías — todos funcionan.'
        },
        {
          question: '¿Cuánto tiempo hasta ver resultado?',
          answer: 'Respuestas en la 1ª semana. Reuniones a partir de la 2ª–3ª semana. Pipeline robusto en 45–60 días.'
        },
        {
          question: '¿Y si no funciona?',
          answer: '90 días de prueba. ¿No cumpliste la meta? Reembolso integral. Así de simple.'
        },
        {
          question: '¿Necesito LinkedIn Premium?',
          answer: 'No es obligatorio, pero recomendamos para mejor performance. Incluimos en el plan Growth y Scale.'
        },
        {
          question: '¿Cómo garantizan la calidad de los leads?',
          answer: 'Usamos score de calificación, análisis de perfil y validación manual para garantizar que solo leads interesados lleguen hasta ti.'
        }
      ],
      notFound: '¿No encontraste tu respuesta?',
      contact: 'Habla con nosotros'
    },
    finalCta: {
      headline: '¿Listo para llenar la agenda de tu equipo?',
      subtitle: 'Únete a cientos de empresas que ya transformaron LinkedIn en su principal fuente de leads.',
      options: {
        schedule: 'Agendar una reunión',
        seePlans: 'Ver planes'
      },
      form: {
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        company: 'Empresa',
        submit: 'Agendar reunión'
      }
    },
    resources: {
      hero: {
        title: 'Aprende a dominar prospección B2B en LinkedIn.',
        subtitle: 'Herramientas gratuitas, playbooks probados y casos reales. Todo lo que necesitas para llenar tu agenda de reuniones calificadas.',
        searchPlaceholder: 'Buscar recursos... ej: "secuencia de mensajes", "tasa de conversión"'
      },
      filters: {
        all: 'Todos',
        tools: 'Herramientas',
        guides: 'Guías',
        videos: 'Videos',
        cases: 'Casos'
      },
      tools: {
        roiCalculator: {
          title: 'Calculadora de ROI de Prospección',
          description: 'Descubre cuántas reuniones y cuánto pipeline puedes generar invirtiendo en prospección en LinkedIn.',
          cta: 'Calcular mi ROI'
        },
        profileAnalyzer: {
          title: 'Analizador de Perfil LinkedIn',
          description: 'Pega la URL de tu perfil y recibe análisis instantáneo con puntos de mejora.',
          cta: 'Analizar mi perfil'
        },
        headlineGenerator: {
          title: 'Generador de Headline de LinkedIn',
          description: 'Responde 3 preguntas y recibe 5 opciones de headline probadas.',
          cta: 'Generar mi headline'
        },
        qualificationQuiz: {
          title: 'Quiz de Calificación',
          description: '5 preguntas, 60 segundos, resultado personalizado con plan de acción.',
          cta: 'Hacer el quiz'
        }
      },
      guides: {
        completePlaybook: {
          title: 'El Playbook Completo de Prospección en LinkedIn (2025)',
          description: 'Método paso a paso para generar 100+ reuniones/mes usando LinkedIn. ICP, mensajes, cadencias, métricas y automatización segura.',
          cta: 'Descargar guía gratis'
        },
        fatalErrors: {
          title: '7 Errores Fatales que Matan Tu Tasa de Respuesta en LinkedIn',
          description: 'Descubre los errores más comunes (y cómo corregirlos) que hacen que los decisores ignoren tus mensajes.',
          cta: 'Descargar checklist'
        },
        decisionMakers: {
          title: 'Cómo Acceder a Decisores que No Atienden Cold Call',
          description: 'CEOs, Directores y VPs no atienden teléfono. Pero responden en LinkedIn — si sabes cómo.',
          cta: 'Descargar guía'
        }
      },
      videos: {
        webinar100Meetings: {
          title: 'Cómo Generar 100+ Reuniones/Mes en LinkedIn (sin ser molesto)',
          description: 'Método completo (ICP → mensaje → follow-up) con demostración en vivo de la plataforma.',
          cta: 'Ver ahora'
        },
        fiveMessages: {
          title: '5 Mensajes que Decisores SIEMPRE Responden',
          description: 'Análisis de mensajes con mayor tasa de respuesta y por qué funcionan.',
          cta: 'Ver'
        },
        behindScenes: {
          title: 'Bastidores: Cómo Generamos R$ 6,3M en Pipeline en 60 Días',
          description: 'Proceso completo desde la configuración hasta los resultados finales.',
          cta: 'Ver caso completo'
        }
      },
      cases: {
        saasCase: {
          title: 'SaaS: 89 Reuniones en 30 Días',
          description: 'Cómo una startup de SaaS logró 89 reuniones calificadas en su primer mes.',
          cta: 'Ver caso'
        },
        agencyCase: {
          title: 'Agencia: R$ 2,1M em Pipeline',
          description: 'Agencia de marketing digital que generó R$ 2,1M em pipeline em 45 días.',
          cta: 'Ver caso'
        },
        techCase: {
          title: 'Tech: 156 Reuniones em 60 Días',
          description: 'Empresa de tecnologia que transformou LinkedIn em sua principal fonte de leads.',
          cta: 'Ver caso'
        }
      },
      finalCta: {
        title: 'Listo para generar 100+ reuniones calificadas?',
        subtitle: 'Tienes el conocimiento. Ahora falta la ejecución. Prime SDR lo hace por ti.',
        primaryCta: 'Agendar demostración (15 min)',
        secondaryCta: 'Probar 30 días sin riesgo'
      }
    },
    footer: {
      company: {
        title: 'Prime SDR',
        description: 'Transformamos LinkedIn en motor de ingresos predecible para empresas B2B.'
      },
      links: {
        company: 'Empresa',
        resources: 'Recursos',
        legal: 'Legal'
      },
      sections: {
        company: ['Sobre nosotros', 'Carreras', 'Contacto', 'Blog'],
        resources: ['Cómo funciona', 'Casos de éxito', 'Precios', 'FAQ'],
        legal: ['Términos de uso', 'Política de privacidad', 'Cookies', 'LGPD']
      },
      copyright: '© 2024 Prime SDR. Todos los derechos reservados.'
    }
  },
  en: {
    header: {
      login: 'Login',
      startFree: 'Free Trial',
      language: 'Language'
    },
    nav: {
      howItWorks: 'How It Works',
      pricing: 'Pricing',
      resources: 'Resources'
    },
    hero: {
      badge: 'Over 2,000 active profiles generating meetings now',
      headline: 'Your team doesn\'t have time to prospect.',
      headlineHighlight: 'We do it for you.',
      subtitle: '112 meetings in 45 days in your sales calendar — without hiring SDRs, without wasting time on cadences, and without depending on paid media that burns budget.',
      proofPoints: {
        responseRate: 'Average response rate: 22%',
        roi: 'Average ROI: 2,100% in 60 days',
        guarantee: '90-day guarantee'
      },
      cta: {
        primary: 'I want 100+ meetings in 45 days',
        secondary: 'See full case study (2 min)'
      },
      trust: 'Trusted by:'
    },
    caseStudy: {
      headline: 'R$ 6.3 million in pipeline. 112 meetings. 45 days.',
      subtitle: 'Real results from a client who implemented our complete methodology.',
      stats: {
        meetings: '112 Meetings scheduled',
        pipeline: 'R$ 6.3M in pipeline',
        clients: '12 Active clients',
        average: '13 days average'
      },
      description: 'In just 45 days, we managed to transform LinkedIn into a lead generation machine for our client. See how:',
      benefits: [
        'Precise identification of ideal ICP',
        'Personalized cadences by persona',
        'Automated and humanized follow-up',
        'Detailed performance reports'
      ]
    },
    differentiators: {
      headline: 'The triad no one else has',
      subtitle: 'We combine three unique elements that guarantee consistent results.',
      features: {
        intelligence: {
          title: 'Market intelligence',
          description: 'Deep analysis of your market and competition.',
          points: [
            'Complete ICP mapping',
            'Competition analysis',
            'Opportunity identification',
            'Performance benchmarking'
          ]
        },
        engagement: {
          title: 'Value-driven engagement',
          description: 'Every message delivers real value to the prospect.',
          points: [
            'Content personalized by persona',
            'Relevant market insights',
            'Unique value propositions',
            'Contextual follow-up'
          ]
        },
        opportunities: {
          title: 'New opportunities',
          description: 'We discover leads you didn\'t even know existed.',
          points: [
            'Market expansion',
            'New segments',
            'Seasonal opportunities',
            'Strategic partnerships'
          ]
        }
      },
      additional: {
        title: 'Additional benefits',
        items: [
          {
            title: 'Setup in 7 days',
            description: 'From kickoff to first results in one week.'
          },
          {
            title: 'Dedicated support',
            description: 'Specialized team available for your success.'
          },
          {
            title: 'Detailed reports',
            description: 'Track every metric in real-time.'
          }
        ]
      },
      cta: 'I want to schedule a meeting'
    },
    guarantee: {
      headline: 'Test 90 days. If you don\'t hit the goal, you don\'t pay. Nothing.',
      subtitle: 'We\'re so confident in our results that we offer a unique guarantee in the market.',
      benefits: [
        {
          title: 'No risks',
          description: 'Test for 90 days with no financial commitment.'
        },
        {
          title: 'Guaranteed results',
          description: 'If you don\'t reach the goal, full refund.'
        },
        {
          title: 'Total support',
          description: 'Our team works for your success.'
        }
      ]
    },
    pricing: {
      headline: 'Choose your plan. Dominate your market.',
      subtitle: 'Flexible plans for companies of all sizes.',
      toggle: {
        monthly: 'Monthly',
        annual: 'Annual'
      },
      plans: {
        starter: {
          name: 'Starter',
          description: 'For those who want to prove it works before scaling',
          price: '$799/month',
          features: [
            'Up to 500 prospects/month',
            '1 dedicated SDR',
            'Setup in 7 days',
            'Basic reports',
            'Email support'
          ],
          cta: 'Start now'
        },
        growth: {
          name: 'Growth',
          description: 'For teams that want predictable results without depending on paid media',
          price: '$1,299/month',
          features: [
            'Up to 1,000 prospects/month',
            '2 dedicated SDRs',
            'Setup in 5 days',
            'Advanced reports',
            'Priority support',
            'CRM integration'
          ],
          cta: 'Start now',
          popular: 'Most popular'
        },
        scale: {
          name: 'Scale',
          description: 'For those who want to be inevitable in the market',
          price: '$2,499/month',
          features: [
            'Up to 2,000 prospects/month',
            '3 dedicated SDRs',
            'Setup in 3 days',
            'Custom reports',
            'Dedicated support',
            'Complete integration',
            'Strategic consulting'
          ],
          cta: 'Contact us'
        }
      },
      seeAllFeatures: 'See all features'
    },
    howItWorks: {
      headline: 'From kickoff to results - in 7 days',
      subtitle: 'Our proven process to transform your LinkedIn into a lead machine.',
      steps: [
        {
          title: 'Kickoff',
          description: 'Complete alignment of strategy and objectives.',
          points: [
            'Definition of ideal ICP',
            'Competition analysis',
            'Approach strategy',
            'Execution timeline'
          ]
        },
        {
          title: 'Account setup',
          description: 'Technical configuration and profile optimization.',
          points: [
            'LinkedIn profile optimization',
            'Tool configuration',
            'Template creation',
            'Connectivity tests'
          ]
        },
        {
          title: 'Prospect list',
          description: 'Identification and qualification of ideal leads.',
          points: [
            'Advanced LinkedIn search',
            'Persona filters',
            'Contact validation',
            'Priority segmentation'
          ]
        },
        {
          title: 'Personalized cadences',
          description: 'Creation of unique sequences for each persona.',
          points: [
            'Personalized templates',
            'Optimized timing',
            'A/B testing',
            'Continuous refinement'
          ]
        },
        {
          title: 'Execution',
          description: 'Campaign launch and monitoring.',
          points: [
            'Message delivery',
            'Real-time monitoring',
            'Dynamic adjustments',
            'Automatic follow-up'
          ]
        },
        {
          title: 'Qualification',
          description: 'Filtering and qualification of interested leads.',
          points: [
            'Response analysis',
            'Qualification score',
            'Meeting scheduling',
            'Sales handoff'
          ]
        },
        {
          title: 'Results',
          description: 'Delivery of qualified leads and reports.',
          points: [
            'Scheduled meetings',
            'Generated pipeline',
            'Detailed reports',
            'Continuous optimizations'
          ]
        }
      ]
    },
    faq: {
      headline: 'Questions everyone asks',
      subtitle: 'We clarify the main doubts about our service.',
      questions: [
        {
          question: 'Does this violate LinkedIn rules?',
          answer: 'No. We respect all limits, vary cadence and never send spam. We\'ve been operating for years without a single ban.'
        },
        {
          question: 'Does it work for my niche?',
          answer: 'If it\'s B2B with ticket ≥ R$ 3k and consultative selling, yes. SaaS, services, industry, tech, consultancies — all work.'
        },
        {
          question: 'How long until I see results?',
          answer: 'Responses in the 1st week. Meetings from the 2nd–3rd week. Robust pipeline in 45–60 days.'
        },
        {
          question: 'What if it doesn\'t work?',
          answer: '90-day test. Didn\'t hit the goal? Full refund. It\'s that simple.'
        },
        {
          question: 'Do I need LinkedIn Premium?',
          answer: 'It\'s not mandatory, but we recommend it for better performance. We include it in the Growth and Scale plans.'
        },
        {
          question: 'How do you guarantee lead quality?',
          answer: 'We use qualification scoring, profile analysis and manual validation to ensure only interested leads reach you.'
        }
      ],
      notFound: 'Didn\'t find your answer?',
      contact: 'Talk to us'
    },
    finalCta: {
      headline: 'Ready to fill your team\'s calendar?',
      subtitle: 'Join hundreds of companies that have already transformed LinkedIn into their main lead source.',
      options: {
        schedule: 'Schedule a meeting',
        seePlans: 'See plans'
      },
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        company: 'Company',
        submit: 'Schedule meeting'
      }
    },
    resources: {
      hero: {
        title: 'Learn to master B2B prospecting on LinkedIn.',
        subtitle: 'Free tools, tested playbooks and real cases. Everything you need to fill your calendar with qualified meetings.',
        searchPlaceholder: 'Search resources... ex: "message sequence", "conversion rate"'
      },
      filters: {
        all: 'All',
        tools: 'Tools',
        guides: 'Guides',
        videos: 'Videos',
        cases: 'Cases'
      },
      tools: {
        roiCalculator: {
          title: 'Prospecting ROI Calculator',
          description: 'Discover how many meetings and how much pipeline you can generate by investing in LinkedIn prospecting.',
          cta: 'Calculate my ROI'
        },
        profileAnalyzer: {
          title: 'LinkedIn Profile Analyzer',
          description: 'Paste your profile URL and get instant analysis with improvement points.',
          cta: 'Analyze my profile'
        },
        headlineGenerator: {
          title: 'LinkedIn Headline Generator',
          description: 'Answer 3 questions and get 5 tested headline options.',
          cta: 'Generate my headline'
        },
        qualificationQuiz: {
          title: 'Qualification Quiz',
          description: '5 questions, 60 seconds, personalized result with action plan.',
          cta: 'Take the quiz'
        }
      },
      guides: {
        completePlaybook: {
          title: 'The Complete LinkedIn Prospecting Playbook (2025)',
          description: 'Step-by-step method to generate 100+ meetings/month using LinkedIn. ICP, messages, cadences, metrics and safe automation.',
          cta: 'Download free guide'
        },
        fatalErrors: {
          title: '7 Fatal Errors That Kill Your Response Rate on LinkedIn',
          description: 'Discover the most common errors (and how to fix them) that make decision makers ignore your messages.',
          cta: 'Download checklist'
        },
        decisionMakers: {
          title: 'How to Access Decision Makers Who Don\'t Answer Cold Calls',
          description: 'CEOs, Directors and VPs don\'t answer the phone. But they respond on LinkedIn — if you know how.',
          cta: 'Download guide'
        }
      },
      videos: {
        webinar100Meetings: {
          title: 'How to Generate 100+ Meetings/Month on LinkedIn (without being annoying)',
          description: 'Complete method (ICP → message → follow-up) with live platform demonstration.',
          cta: 'Watch now'
        },
        fiveMessages: {
          title: '5 Messages That Decision Makers ALWAYS Respond To',
          description: 'Analysis of messages with highest response rate and why they work.',
          cta: 'Watch'
        },
        behindScenes: {
          title: 'Behind the Scenes: How We Generated R$ 6.3M in Pipeline in 60 Days',
          description: 'Complete process from setup to final results.',
          cta: 'Watch full case'
        }
      },
      cases: {
        saasCase: {
          title: 'SaaS: 89 Meetings in 30 Days',
          description: 'How a SaaS startup achieved 89 qualified meetings in their first month.',
          cta: 'View case'
        },
        agencyCase: {
          title: 'Agency: R$ 2.1M in Pipeline',
          description: 'Digital marketing agency that generated R$ 2.1M in pipeline in 45 days.',
          cta: 'View case'
        },
        techCase: {
          title: 'Tech: 156 Meetings in 60 Days',
          description: 'Technology company that transformed LinkedIn into their main lead source.',
          cta: 'View case'
        }
      },
      finalCta: {
        title: 'Ready to generate 100+ qualified meetings?',
        subtitle: 'You have the knowledge. Now you need execution. Prime SDR does it for you.',
        primaryCta: 'Schedule demo (15 min)',
        secondaryCta: 'Try 30 days risk-free'
      }
    },
    footer: {
      company: {
        title: 'Prime SDR',
        description: 'We transform LinkedIn into a predictable revenue engine for B2B companies.'
      },
      links: {
        company: 'Company',
        resources: 'Resources',
        legal: 'Legal'
      },
      sections: {
        company: ['About us', 'Careers', 'Contact', 'Blog'],
        resources: ['How it works', 'Success cases', 'Pricing', 'FAQ'],
        legal: ['Terms of use', 'Privacy policy', 'Cookies', 'LGPD']
      },
      copyright: '© 2024 Prime SDR. All rights reserved.'
    }
  }
};

export const getLanguageFromCode = (code: string): Language => {
  return (code as Language) || 'pt';
};

export const getLanguageName = (code: Language): string => {
  const names = {
    pt: 'Português (BR)',
    es: 'Español (ES)',
    en: 'English (US)'
  };
  return names[code];
};

export const getLanguageFlag = (code: Language): string => {
  const flags = {
    pt: '🇧🇷',
    es: '🇪🇸',
    en: '🇺🇸'
  };
  return flags[code];
};







