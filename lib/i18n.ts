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
    mainHeadline: {
      line1: string;
      line2: string;
    };
    bulletPoints: {
      desktop: string[];
      mobile: string[];
    };
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
    badge: string;
    metrics: {
      qualifiedMeetings: {
        value: string;
        label: string;
        period: string;
        extraText: string;
      };
      pipeline: {
        value: string;
        label: string;
        period: string;
        extraText: string;
      };
      closingClients: {
        value: string;
        label: string;
        period: string;
        extraText: string;
      };
      payback: {
        value: string;
        label: string;
        period: string;
        extraText: string;
      };
    };
    methodology: {
      title: string;
      description: string;
    };
    testimonial: {
      quote: string;
      author: string;
      role: string;
      company: string;
    };
    cta: {
      title: string;
      subtitle: string;
      button: string;
    };
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
    cards: {
      linkedinFirst: {
        title: string;
        description: string;
        features: string[];
      };
      youBuild: {
        title: string;
        description: string;
        features: string[];
      };
      humanSdr: {
        title: string;
        description: string;
        features: string[];
      };
      youControl: {
        title: string;
        description: string;
        features: string[];
      };
    };
    results: {
      title: string;
      agendaFull: {
        title: string;
        description: string;
      };
      operation247: {
        title: string;
        description: string;
      };
      totalGuarantee: {
        title: string;
        description: string;
      };
    };
    ctaButton: {
      text: string;
      urgency: string;
    };
  };

  // Guarantee
  guarantee: {
    headline: string;
    subtitle: string;
    benefits: {
      title: string;
      description: string;
    }[];
    badge: string;
    steps: {
      step1: {
        title: string;
        description: string;
      };
      step2: {
        title: string;
        description: string;
      };
      step3: {
        title: string;
        description: string;
      };
    };
    transparency: {
      title: string;
      subtitle: string;
      features: string[];
      dashboard: {
        meta: string;
        meetings: string;
        rate: string;
      };
    };
    cta: string;
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
        badge: string;
        description: string;
        features: string[];
        idealFor: string;
        proof: string;
        cta: {
          primary: string;
          secondary: string;
        };
      };
      growth: {
        name: string;
        badge: string;
        description: string;
        features: string[];
        idealFor: string;
        proof: string;
        popular: string;
        cta: {
          primary: string;
          secondary: string;
        };
      };
      scale: {
        name: string;
        badge: string;
        description: string;
        customMessage: string;
        freeConsultation: string;
        features: string[];
        idealFor: string;
        cta: {
          primary: string;
          secondary: string;
        };
        trustIndicators: {
          freeConsultation: string;
          fastResponse: string;
          noCommitment: string;
        };
      };
    };
    comparison: {
      title: string;
      subtitle: string;
      columns: {
        strategy: {
          title: string;
          subtitle: string;
        };
        internalSdr: {
          title: string;
          subtitle: string;
        };
        salesNavigator: {
          title: string;
          subtitle: string;
        };
        primeSdr: {
          title: string;
          subtitle: string;
        };
      };
      rows: {
        monthlyCost: {
          label: string;
          internalSdr: string;
          salesNavigator: {
            value: string;
            detail: string;
          };
          primeSdr: {
            value: string;
            detail: string;
          };
        };
        activeProfiles: {
          label: string;
          internalSdr: string;
          salesNavigator: string;
          primeSdr: string;
        };
        setupTime: {
          label: string;
          internalSdr: {
            value: string;
            detail: string;
          };
          salesNavigator: {
            value: string;
            detail: string;
          };
          primeSdr: {
            value: string;
            detail: string;
          };
        };
        method: {
          label: string;
          internalSdr: string;
          salesNavigator: {
            value: string;
            detail: string;
          };
          primeSdr: {
            value: string;
            detail: string;
          };
        };
        meetingsPerMonth: {
          label: string;
          internalSdr: {
            value: string;
            detail: string;
          };
          salesNavigator: {
            value: string;
            detail: string;
          };
          primeSdr: {
            value: string;
            detail: string;
          };
        };
        availability: {
          label: string;
          internalSdr: string;
          salesNavigator: {
            value: string;
            detail: string;
          };
          primeSdr: {
            value: string;
            detail: string;
          };
        };
        dashboard: {
          label: string;
          internalSdr: string;
          salesNavigator: string;
          primeSdr: string;
        };
        proprietaryData: {
          label: string;
          internalSdr: string;
          salesNavigator: string;
          primeSdr: string;
        };
        cadences: {
          label: string;
          internalSdr: string;
          salesNavigator: string;
          primeSdr: string;
        };
      };
      result: {
        title: string;
        savings: {
          value: string;
          label: string;
        };
        meetings: {
          value: string;
          label: string;
        };
      };
    };
    finalCta: {
      question: string;
      button: string;
    };
    seeAllFeatures: string;
  };

  // How It Works
  howItWorks: {
    headline: string;
    subtitle: string;
    flowchart?: {
      title: string;
      subtitle: string;
      dailyFlow: {
        d1: { time: string; action: string; detail: string };
        d3: { time: string; action: string; detail: string };
        d5: { time: string; action: string; detail: string };
        d7: { time: string; action: string; detail: string };
        instant: { time: string; action: string; detail: string };
        d10: { time: string; action: string; detail: string };
        conversion: { time: string; action: string; detail: string };
      };
      summary: {
        invites: string;
        acceptances: string;
        responses: string;
        meetings: string;
      };
      typeLabels?: {
        automation: string;
        human: string;
        result: string;
      };
      progressLabel?: string;
    };
    timeline?: {
      title: string;
      subtitle: string;
      week1to2: { title: string; description: string };
      week3to6: { title: string; description: string };
      month2to3: { title: string; description: string };
      stats: {
        initial: string;
        stable: string;
        optimized: string;
      };
      processLabel?: string;
    };
    cta?: {
      button: string;
      trust: {
        demo: string;
        noCommitment: string;
        results: string;
      };
    };
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
    badge: string;
    ctaSection: {
      title: string;
      subtitle: string;
      button: string;
    };
  };

  // Final CTA
  finalCta: {
    badge: string;
    headline: string;
    subtitle: string;
    demoTitle: string;
    demoFeatures: {
      title: string;
      description: string;
      highlight: string;
    }[];
    stats: {
      activeProfiles: string;
      meetings45Days: string;
      acceptanceRate: string;
      bans: string;
    };
    primaryButton: string;
    secondaryButton: string;
    guarantees: {
      text: string;
      highlight: string;
    }[];
    finalMessage: {
      title: string;
      description: string;
    };
  };
  socialProof: {
    header: {
      badge: string;
      title: string;
      subtitle: string;
    };
    metrics: {
      activeProfiles: string;
      meetings: string;
      roi: string;
      guarantee: string;
    };
    logos: {
      badge: string;
      title: string;
      categories: string[];
      trustMessage: string;
    };
    guarantee: {
      title: string;
      subtitle: string;
      cta: string;
    };
  };

  // Contact Modal
  contactModal: {
    title: string;
    subtitle: string;
    form: {
      heading: string;
      description: string;
      name: string;
      email: string;
      phone: string;
      company: string;
      role: string;
      linkedin: string;
      linkedinPlaceholder: string;
      submit: string;
      submitting: string;
      country: string;
      selectCountry: string;
    };
    validation: {
      nameRequired: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      linkedinInvalid: string;
    };
  };

  // About Page
  aboutPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    story: {
      title: string;
      content: {
        paragraph1: string;
        paragraph2: string;
        list: string[];
        paragraph3: string;
        highlight1: string;
        paragraph4: string;
        paragraph5: string;
        highlight2: string;
        paragraph6: string;
        paragraph7: string;
      };
    };
    mission: {
      title: string;
      missionTitle: string;
      missionDescription: string;
      visionTitle: string;
      visionDescription: string;
      valuesTitle: string;
      values: {
        results: { title: string; description: string; };
        transparency: { title: string; description: string; };
        ethics: { title: string; description: string; };
        partnership: { title: string; description: string; };
        innovation: { title: string; description: string; };
      };
    };
      differentiators: {
        title: string;
        otherTools: string;
        primeSdr: string;
        items: {
          automation: { other: string; prime: string; };
          support: { other: string; prime: string; };
          guarantee: { other: string; prime: string; };
          dashboard: { other: string; prime: string; };
          supportGeneric: { other: string; prime: string; };
          banRisk: { other: string; prime: string; };
        };
      };
    stats: {
      title: string;
      subtitle: string;
      stats: {
        profiles: string;
        meetings: string;
        acceptanceRate: string;
        responseRate: string;
        roi: string;
        bans: string;
      };
    };
    segments: {
      title: string;
      subtitle: string;
      segments: {
        saas: { title: string; description: string; };
        consulting: { title: string; description: string; };
        agencies: { title: string; description: string; };
        industry: { title: string; description: string; };
        education: { title: string; description: string; };
        services: { title: string; description: string; };
      };
    };
    commitments: {
      title: string;
      subtitle: string;
      commitments: {
        transparency: { title: string; description: string; };
        lgpd: { title: string; description: string; };
        security: { title: string; description: string; };
        support: { title: string; description: string; };
        guarantee: { title: string; description: string; };
      };
    };
    location: {
      title: string;
      company: string;
      cnpj: string;
      city: string;
      region: string;
      schedule: string;
      email: string;
      phone: string;
      website: string;
    };
    cta: {
      title: string;
      subtitle: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };

  // Contact Page
  contactPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
    };
    methods: {
      title: string;
      subtitle: string;
      email: { title: string; description: string; action: string; };
      whatsapp: { title: string; description: string; action: string; };
      call: { title: string; description: string; action: string; };
    };
    form: {
      title: string;
      subtitle: string;
      fields: {
        name: string;
        email: string;
        phone: string;
        company: string;
        role: string;
        budget: string;
        message: string;
      };
      roleOptions: {
        select: string;
        ceo: string;
        cmo: string;
        sales: string;
        marketing: string;
        commercial: string;
        other: string;
      };
      budgetOptions: {
        select: string;
        range1: string;
        range2: string;
        range3: string;
        range4: string;
        range5: string;
      };
      messagePlaceholder: string;
      submit: string;
      submitting: string;
    };
    benefits: {
      title: string;
      specialists: { title: string; description: string; };
      fast: { title: string; description: string; };
      noCommitment: { title: string; description: string; };
    };
    contactInfo: {
      title: string;
      email: string;
      phone: string;
      address: string;
      schedule: string;
      socialMedia: string;
    };
    success: {
      title: string;
      message: string;
      primaryButton: string;
      secondaryButton: string;
    };
  };

  // Thank You Screen
  thankYouScreen: {
    title: string;
    message: string;
    calendar: {
      title: string;
      subtitle: string;
    };
    whatsapp: {
      label: string;
      button: string;
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
      cta: string;
      social: string;
    };

  // Coming Soon Modal
  comingSoon: {
    title: string;
    message1: string;
    message2: string;
    availableSoon: string;
    button: string;
    footer: string;
  };

  // Resources Page
  resourcesPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      searchPlaceholder: string;
    };
    stats: {
      totalDownloads: string;
      playbookPages: string;
      freeResources: string;
      availableAccess: string;
    };
    filters: {
      all: string;
      tools: string;
      guides: string;
      videos: string;
      cases: string;
    };
    resourceTypes: {
      all: string;
      tools: string;
      guides: string;
      videos: string;
      cases: string;
    };
    noResults: {
      title: string;
      message: string;
    };
    finalCta: {
      title: string;
      subtitle: string;
      primaryCta: string;
      secondaryCta: string;
    };
    badges: {
      free: string;
      new: string;
      mostDownloaded: string;
      webinar: string;
      caseReal: string;
      highlight: string;
      case: string;
    };
  };
  // Terms of Use Page
  termsOfUsePage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      lastUpdate: string;
    };
  };
  // Cookies Policy Page
  cookiesPolicyPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      lastUpdate: string;
    };
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
      trust: 'Confiam em nós:',
      mainHeadline: {
        line1: 'Leads qualificados do LinkedIn na sua agenda.',
        line2: 'Ou seu dinheiro de volta.'
      },
      bulletPoints: {
        desktop: ['Sem contratar SDR.', 'Sem cadências manuais.', 'Sem queimar budget em ads.'],
        mobile: ['Sem contratar SDR ou inflar a equipe.', 'Sem perder tempo com cadências manuais.', 'Sem gastar com mídia paga que queima seu budget.']
      }
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
      ],
      badge: 'Caso Real • Agência de Marketing',
      metrics: {
        qualifiedMeetings: {
          value: '112',
          label: 'Reuniões qualificadas',
          period: '403 MQLs gerados',
          extraText: 'Taxa de aceitação: 35%'
        },
        pipeline: {
          value: 'R$ 480 mil',
          label: 'de Pipeline',
          period: '90 dias de operação',
          extraText: '8 clientes X R$60k/ano'
        },
        closingClients: {
          value: 'Clientes',
          label: 'Fechando agora',
          period: 'Contrato de 12 meses',
          extraText: 'Ticket médio: R$ 5k/mês'
        },
        payback: {
          value: 'Payback',
          label: 'no primeiro mês',
          period: 'ROI de 4.066% sobre o valor anual dos contratos',
          extraText: 'Em 90 dias de operação'
        }
      },
      methodology: {
        title: 'Como conseguimos isso?',
        description: 'Você monta, a gente executa ➡️ SDR fecha. Você configura a cadência (mensagens, timing, ações). Nossa automação roda 24/7 com precisão. Lead respondeu? Pausa automática e SDR humano qualifica e agenda no seu CRM.'
      },
      testimonial: {
        quote: 'Antes do Prime SDR, a gente vivia correndo atrás de lead. Agora é o contrário: os leads é que correm atrás da gente. A agenda tá lotada pelas próximas três semanas. Mudou completamente o jogo.',
        author: 'Erick Oliveira',
        role: 'Dono de Agência',
        company: 'Haast - Marketing Digital'
      },
      cta: {
        title: 'Saiba se o Prime SDR é para você',
        subtitle: '60 segundos pra saber se sua operação pode gerar 30+ reuniões por mês no LinkedIn.',
        button: 'Começar agora'
      }
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
      cta: 'Quero agendar uma reunião',
      cards: {
        linkedinFirst: {
          title: 'LinkedIn-first de verdade',
          description: 'Não é "mais um CRM com integração". Fomos desenhados 100% pro LinkedIn: limites seguros, aquecimento automático, cadências corretas. Zero risco de ban.',
          features: ['Limites seguros respeitados', 'Aquecimento automático', 'Cadências otimizadas', 'Zero risco de ban']
        },
        youBuild: {
          title: 'Você monta. A gente executa.',
          description: 'Você cria a cadência ideal ou usa nossos templates testados, define timing e ações, e nossa automação roda com precisão. Lead respondeu? Pausa automática e SDR humano assume.',
          features: ['Mensagens personalizadas por cargo', 'Sequência adaptada por setor', 'Quando solicitar conexão ou curtir posts', 'Dias e horários de cada disparo']
        },
        humanSdr: {
          title: 'SDR humano que fecha',
          description: 'Lead respondeu? SDR real assume em tempo real, qualifica e agenda. Nada de deixar esfriar. Nada de bot respondendo.',
          features: ['Resposta em tempo real', 'Qualificação humana', 'Agendamento direto', 'Sem bots']
        },
        youControl: {
          title: 'Você no controle. Sempre.',
          description: 'Pare de mandar mensagem no escuro sem saber o que funciona.',
          features: ['Dashboard em tempo real', 'Testes A/B automatizados', 'Métricas que importam (não vaidade)', 'Decisões baseadas em dados']
        }
      },
      results: {
        title: 'Automação para linkedin focada em resultados.',
        agendaFull: {
          title: 'Sua agenda enche',
          description: 'Previsível. Escalável. Sem você mexer um dedo.'
        },
        operation247: {
          title: 'Operação 24/7',
          description: 'Automação inteligente + SDR humano sempre disponível.'
        },
        totalGuarantee: {
          title: 'Garantia total',
          description: '90 dias de teste. Sem ROI? Reembolso integral.'
        }
      },
      ctaButton: {
        text: 'Agendar demonstração (15 min)',
        urgency: '⚡ Vagas limitadas esta semana'
      }
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
      ],
      badge: 'Garantia Brutal',
      steps: {
        step1: {
          title: 'Definimos as metas no kickoff',
          description: 'Ex: 400 MQLs ou X reuniões/mês'
        },
        step2: {
          title: 'Rodamos a operação por 90 dias',
          description: 'Automação + SDR humano trabalhando'
        },
        step3: {
          title: 'Não bateu? Reembolso integral',
          description: 'Sem letra miúda. Sem "depende"'
        }
      },
      transparency: {
        title: 'Transparência total via dashboard',
        subtitle: 'Acompanhe tudo em tempo real',
        features: [
          'Transparência total via dashboard',
          'Métricas em tempo real',
          'Relatórios semanais',
          'Acesso completo aos dados'
        ],
        dashboard: {
          meta: 'Meta: 100 reuniões',
          meetings: 'Reuniões',
          rate: 'Taxa'
        }
      },
      cta: 'Começar teste de 90 dias'
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
          badge: 'PARA COMEÇAR',
          description: 'Para quem quer provar que funciona antes de escalar.',
          features: [
            'Até 2 perfis LinkedIn ativos',
            '2 campanhas simultâneas por perfil',
            'Templates prontos (5+ indústrias)',
            'Dashboard com métricas em tempo real',
            'Integração via webhook',
            'Suporte via chat (resposta em 24h)',
            'Teste de 90 dias'
          ],
          idealFor: 'Fundadores e pequenos times testando prospecção sistemática',
          proof: 'Payback no primeiro mês. Ou reembolso integral.',
          cta: {
            primary: 'Começar teste grátis',
            secondary: 'Falar com especialista'
          }
        },
        growth: {
          name: 'Growth 20%OFF',
          badge: 'MELHOR CUSTO-BENEFÍCIO',
          description: 'Para times que querem resultados previsíveis sem depender de mídia paga.',
          features: [
            'Tudo do Starter, mais:',
            'Até 10 perfis LinkedIn ativos',
            'Campanhas ilimitadas simultâneas por perfil',
            'Revisão quinzenal de performance',
            'Testes A/B automatizados',
            'Relatórios executivos semanais (em breve)',
            'Suporte prioritário (resposta em 6h)',
            'Onboarding guiado'
          ],
          idealFor: 'Operações comerciais que precisam encher agenda todo mês',
          proof: 'Cliente agência: 480k em pipeline, 8 clientes, ticket alto/mês',
          popular: 'Mais popular',
          cta: {
            primary: 'Começar teste grátis',
            secondary: 'Ver cases do meu segmento'
          }
        },
        scale: {
          name: 'Scale',
          badge: 'SOLUÇÃO CUSTOMIZADA',
          description: 'Para empresas que precisam de uma solução sob medida.',
          customMessage: 'Plano personalizado',
          freeConsultation: 'Consultoria gratuita incluída',
          features: [
            'Tudo do Growth, mais:',
            'Perfis LinkedIn ilimitados',
            'Campanhas ilimitadas simultâneas por perfil',
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
          trustIndicators: {
            freeConsultation: 'Consultoria gratuita',
            fastResponse: 'Resposta em 2h',
            noCommitment: 'Sem compromisso • Sem cartão • Sem pegadinhas'
          }
        }
      },
      comparison: {
        title: 'SDR Interno vs Prime SDR',
        subtitle: 'Veja os números que fazem a diferença',
        columns: {
          strategy: {
            title: 'Estratégia',
            subtitle: 'Despesas fixas'
          },
          internalSdr: {
            title: 'SDR Interno',
            subtitle: 'Método tradicional'
          },
          salesNavigator: {
            title: 'Sales Navigator',
            subtitle: 'Ferramenta LinkedIn'
          },
          primeSdr: {
            title: 'Prime SDR',
            subtitle: 'Método inteligente'
          }
        },
        rows: {
          monthlyCost: {
            label: 'Custo mensal',
            internalSdr: 'Custo alto por pessoa',
            salesNavigator: {
              value: 'Custo baixo',
              detail: '(~R$ 640)'
            },
            primeSdr: {
              value: 'Economia significativa',
              detail: 'com Prime SDR'
            }
          },
          activeProfiles: {
            label: 'Perfis ativos',
            internalSdr: '1 perfil',
            salesNavigator: '1 perfil',
            primeSdr: 'Sem limite de perfis ativos'
          },
          setupTime: {
            label: 'Tempo de setup',
            internalSdr: {
              value: '3–6 meses',
              detail: 'ramp-up'
            },
            salesNavigator: {
              value: 'Imediato',
              detail: '(mas manual)'
            },
            primeSdr: {
              value: '7 dias',
              detail: 'ativo'
            }
          },
          method: {
            label: 'Método',
            internalSdr: 'Depende da disciplina',
            salesNavigator: {
              value: '50 msg/mês',
              detail: '(LIMITE!)'
            },
            primeSdr: {
              value: 'Automação + inteligência',
              detail: '1.200+ msg/mês'
            }
          },
          meetingsPerMonth: {
            label: 'Reuniões/mês',
            internalSdr: {
              value: '20–30',
              detail: 'se rodar bem'
            },
            salesNavigator: {
              value: '5–10',
              detail: '(manual)'
            },
            primeSdr: {
              value: '80–120',
              detail: 'histórico real'
            }
          },
          availability: {
            label: 'Disponibilidade',
            internalSdr: 'Férias, turnover',
            salesNavigator: {
              value: '24/7',
              detail: 'mas sem automação real'
            },
            primeSdr: {
              value: '24/7',
              detail: 'ininterrupta'
            }
          },
          dashboard: {
            label: 'Dashboard',
            internalSdr: '❌ Sem dashboard',
            salesNavigator: '❌ Sem dashboard',
            primeSdr: '✅ Dashboard completo'
          },
          proprietaryData: {
            label: 'Dados proprietários',
            internalSdr: '❌ Sem dados proprietários',
            salesNavigator: '❌ Sem dados proprietários',
            primeSdr: '✅ Dados proprietários'
          },
          cadences: {
            label: 'Cadências',
            internalSdr: '❌ Cadências manuais ↓',
            salesNavigator: '❌ Cadências manuais ↓',
            primeSdr: '✅ Cadências automatizadas'
          }
        },
        result: {
          title: 'Resultado Final',
          savings: {
            value: 'Economia significativa',
            label: 'Economia mensal'
          },
          meetings: {
            value: '3x mais',
            label: 'Reuniões geradas'
          }
        }
      },
      finalCta: {
        question: '"Não sabe qual plano escolher?" Fale com um especialista (2 min)',
        button: 'Falar com especialista'
      },
      seeAllFeatures: 'Ver todos os recursos'
    },
    howItWorks: {
      headline: 'De kickoff a resultados - em 7 dias',
      subtitle: 'Nosso processo comprovado para transformar seu LinkedIn em máquina de leads.',
      flowchart: {
        title: 'Fluxo de Automação Inteligente',
        subtitle: 'Veja na prática, como o Prime trabalha 24/7 para gerar reuniões',
        dailyFlow: {
          d1: {
            time: 'D1',
            action: 'Automação envia 120 convites',
            detail: '3 perfis x 40/dia'
          },
          d3: {
            time: 'D3',
            action: '49 aceitações chegam',
            detail: 'Taxa de aceitação: 49%'
          },
          d5: {
            time: 'D5',
            action: 'Mensagem pós-aceite',
            detail: 'Via Automação'
          },
          d7: {
            time: 'D7',
            action: '20 leads respondem',
            detail: 'Com interesse real - 33,9% dos conectados responderam.'
          },
          instant: {
            time: 'Na hora',
            action: 'SDR entra na conversa',
            detail: 'Notificação instantânea'
          },
          d10: {
            time: 'D10',
            action: 'SDR agenda 8 reuniões',
            detail: '40% dos que responderam marcaram reunião.'
          },
          conversion: {
            time: 'Conversão',
            action: 'Você Fecha!',
            detail: 'A taxa de conversão é sua, mas o lead qualificaso é com a gente!'
          }
        },
        summary: {
          invites: 'Convites enviados',
          acceptances: 'Aceitações',
          responses: 'Respostas',
          meetings: 'Reuniões agendadas'
        }
      },
      timeline: {
        title: 'Resultado Esperado',
        subtitle: 'Evolução da performance ao longo do tempo',
        week1to2: {
          title: 'Semana 1–2',
          description: 'Primeiras respostas e reuniões'
        },
        week3to6: {
          title: 'Semana 3–6',
          description: 'Ritmo estável (20–30 reuniões/mês por perfil ativo)'
        },
        month2to3: {
          title: 'Mês 2–3',
          description: 'Escala e otimização (25–40 reuniões/mês no Growth)'
        },
        stats: {
          initial: 'Reuniões/mês inicial',
          stable: 'Reuniões/mês estável',
          optimized: 'Reuniões/mês otimizado'
        },
        processLabel: 'do processo'
      },
      cta: {
        button: 'Ver demonstração',
        trust: {
          demo: 'Demonstração gratuita',
          noCommitment: 'Sem compromisso',
          results: 'Resultados em 7 dias'
        }
      },
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
      contact: 'Fale com a gente',
      badge: 'FAQ',
      ctaSection: {
        title: 'Saber se Prime SDR é para você',
        subtitle: '60 segundos para saber se sua operação pode gerar 30+ reuniões por mês no LinkedIn.',
        button: 'Começar agora'
      }
    },
    finalCta: {
      badge: 'Pronto para Começar?',
      headline: 'Transforme seu LinkedIn em um motor de reuniões',
      subtitle: 'Veja a Prime SDR funcionando ao vivo em uma demonstração de 15 minutos.',
      demoTitle: 'Na demo, você vai ver:',
      demoFeatures: [
        {
          title: 'Interface completa em funcionamento',
          description: 'Veja o dashboard real com métricas ao vivo',
          highlight: 'Tempo real'
        },
        {
          title: 'Como criar uma campanha do zero',
          description: 'Processo completo de configuração passo a passo',
          highlight: 'Passo a passo'
        },
        {
          title: 'Exemplos de mensagens que convertem',
          description: 'Templates testados e otimizados por segmento',
          highlight: 'Comprovado'
        },
        {
          title: 'Dashboard com métricas reais',
          description: 'Dados reais de clientes (anônimos)',
          highlight: 'Dados reais'
        },
        {
          title: 'Calculadora de ROI com seus números',
          description: 'Projeção personalizada para seu negócio',
          highlight: 'Personalizado'
        }
      ],
      stats: {
        activeProfiles: 'Perfis ativos',
        meetings45Days: 'Reuniões em 45 dias',
        acceptanceRate: 'Taxa de aceitação',
        bans: 'Bans em 2+ anos'
      },
      primaryButton: 'Agendar demonstração (15 min)',
      secondaryButton: 'Ver casos de sucesso',
      guarantees: [
        { text: 'Demonstração gratuita', highlight: 'Sem custo' },
        { text: 'Sem compromisso', highlight: 'Flexível' },
        { text: 'Resultados em 7 dias', highlight: 'Rápido' },
        { text: 'Garantia de 90 dias', highlight: 'Seguro' }
      ],
      finalMessage: {
        title: 'Da configuração a resultados em apenas 7 dias',
        description: 'Junte-se a mais de 2.000 perfis LinkedIn que já transformaram sua prospecção em um motor de reuniões previsíveis e escaláveis.'
      }
    },
    socialProof: {
      header: {
        badge: '✨ Resultados comprovados',
        title: 'Empresas reais enchendo suas agendas com o Prime SDR agora.',
        subtitle: 'Mais de 2.000 perfis ativos gerando reuniões todos os dias, de startups a grandes corporações.'
      },
      metrics: {
        activeProfiles: 'Perfis ativos gerando conexões agora',
        meetings: 'Reuniões agendadas com decisores B2B',
        roi: 'Clientes com ROI positivo em até 90 dias',
        guarantee: 'Garantia de reembolso total se não gerar resultado'
      },
      logos: {
        badge: '🏆 Parceiros de sucesso',
        title: 'Empresas que confiam no Prime SDR',
        categories: ['SaaS', 'Consultorias', 'Indústrias', 'Agências'],
        trustMessage: '+2.000 empresas confiam na Prime SDR'
      },
      guarantee: {
        title: '🛡️ Garantia Prime: resultados em 90 dias ou reembolso total.',
        subtitle: '📈 Resultados previsíveis. Zero risco.',
        cta: 'Conversar com especialista'
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
        description: 'Transformamos LinkedIn em motor de receita previsível para empresas B2B. Automação inteligente + SDR humano = resultados garantidos.'
      },
      links: {
        company: 'Empresa',
        resources: 'Recursos',
        legal: 'Legal'
      },
      sections: {
        company: ['Sobre', 'Contato', 'Termos de Uso', 'Política de Privacidade', 'Cookies'],
        resources: ['Blog', 'Cases', 'Playbooks', 'FAQ'],
        legal: ['Termos de uso', 'Política de privacidade', 'Cookies', 'LGPD']
      },
      copyright: '© 2024 Prime SDR. Todos os direitos reservados.',
      cta: 'Teste 90 dias sem risco',
      social: 'Social'
    },
    contactModal: {
      title: 'Vamos agendar uma conversa estratégica',
      subtitle: 'Preencha seus dados e escolha o melhor horário para você',
      form: {
        heading: 'Quase lá! Onde te encontramos?',
        description: 'Preencha seus dados para agendarmos uma conversa estratégica',
        name: 'Nome completo',
        email: 'E-mail corporativo',
        phone: 'Telefone',
        company: 'Empresa',
        role: 'Cargo',
        linkedin: 'LinkedIn (opcional)',
        linkedinPlaceholder: 'https://linkedin.com/in/seu-perfil',
        submit: 'Agendar conversa',
        submitting: 'Agendando...',
        country: 'País',
        selectCountry: 'Selecione o país'
      },
      validation: {
        nameRequired: 'Nome é obrigatório',
        emailRequired: 'E-mail é obrigatório',
        emailInvalid: 'E-mail inválido',
        phoneRequired: 'Telefone é obrigatório',
        linkedinInvalid: 'URL do LinkedIn inválida'
      }
    },
    aboutPage: {
      hero: {
        badge: 'Nossa História',
        title: 'Cansamos de ver vendas travarem por falta de leads qualificados.',
        subtitle: 'A Prime SDR nasceu de uma frustração real: times comerciais talentosos desperdiçando tempo com prospecção manual enquanto decisores estavam a um clique de distância no LinkedIn. Criamos a solução que queríamos ter.'
      },
      story: {
        title: 'De onde veio a Prime SDR',
        content: {
          paragraph1: 'Em 2023, trabalhávamos em diferentes empresas B2B enfrentando o mesmo problema: pipelines vazios, times sobrecarregados e dependência cara de mídia paga.',
          paragraph2: 'A rotina era sempre a mesma:',
          list: [
            'Segunda de manhã: "Precisamos de mais leads"',
            'Quarta à tarde: "Esses leads são péssimos"',
            'Sexta à noite: "Vamos aumentar o budget de ads"'
          ],
          paragraph3: 'Testamos tudo: cold call (ninguém atendia), email frio (direto pro spam), SDRs internos (turnover alto, resultados inconsistentes).',
          highlight1: 'Até olharmos pro LinkedIn de forma diferente.',
          paragraph4: 'Decisores estavam lá. Ativos. Postando. Interagindo. Mas acessá-los de forma escalável e ética parecia impossível.',
          paragraph5: 'Então construímos a Prime SDR: uma operação que combina automação inteligente (respeitando limites do LinkedIn) + SDR humano (que entra quando o lead responde) + transparência total (você vê tudo em tempo real).',
          highlight2: 'O primeiro teste: 112 reuniões em 45 dias. R$ 6,3M em pipeline. Payback em 13 dias.',
          paragraph6: 'Pensamos: "Se funciona pra gente, funciona pra todo B2B."',
          paragraph7: 'E aqui estamos.'
        }
      },
      mission: {
        title: 'Por que fazemos o que fazemos',
        missionTitle: 'Missão',
        missionDescription: 'Transformar o LinkedIn em um motor de receita previsível para empresas B2B — sem depender de sorte, sem queimar budget e sem sobrecarregar times.',
        visionTitle: 'Visão',
        visionDescription: 'Ser a plataforma líder em prospecção B2B no LinkedIn na América Latina, conhecida por resultados reais e transparência total.',
        valuesTitle: 'Valores',
        values: {
          results: {
            title: 'Resultados acima de tudo',
            description: 'Não vendemos promessas. Entregamos reuniões qualificadas ou devolvemos seu dinheiro. Simples assim.'
          },
          transparency: {
            title: 'Transparência radical',
            description: 'Você vê cada métrica, cada mensagem enviada, cada resposta. Sem caixas-pretas. Sem "confia em mim".'
          },
          ethics: {
            title: 'Ética sempre',
            description: 'Respeitamos limites do LinkedIn, privacidade de dados (LGPD) e nunca enviamos spam. Crescimento sustentável, não queima de imagem.'
          },
          partnership: {
            title: 'Parceria real',
            description: 'Não somos fornecedor. Somos extensão do seu time comercial. Seu sucesso é nosso sucesso.'
          },
          innovation: {
            title: 'Inovação constante',
            description: 'Mercado muda. LinkedIn muda. Nós nos adaptamos. Sempre testando, sempre melhorando.'
          }
        }
      },
      differentiators: {
        title: 'O que nos torna únicos no mercado',
        otherTools: 'Outras ferramentas de automação',
        primeSdr: 'Prime SDR',
        items: {
          automation: { other: 'Automação genérica ("envie e torça")', prime: 'Você monta a estratégia, automação executa com precisão' },
          support: { other: 'Deixa você sozinho após venda', prime: 'SDR humano qualifica e agenda reuniões pra você' },
          guarantee: { other: '"Resultados podem variar" (sem garantia)', prime: '90 dias de garantia: não funcionar? Reembolso total' },
          dashboard: { other: 'Dashboard confuso, métricas de vaidade', prime: 'Métricas que importam: reuniões, pipeline, CPR' },
          supportGeneric: { other: 'Suporte genérico, chatbot que não resolve', prime: 'Suporte real, gente respondendo, ajustes em tempo real' },
          banRisk: { other: 'Risco de ban (não respeitam limites)', prime: '100% seguro: operamos há anos sem um único ban' }
        }
      },
      stats: {
        title: 'Números que comprovam',
        subtitle: 'Resultados reais de quem usa Prime SDR',
        stats: {
          profiles: '+2.000 Perfis LinkedIn ativos gerando conexões agora',
          meetings: '112 Reuniões geradas em média por cliente nos primeiros 45 dias',
          acceptanceRate: '39% Taxa média de aceitação de conexão (3x acima da média do mercado)',
          responseRate: '22% Taxa média de resposta (leads engajados, não robôs)',
          roi: '95% Clientes com ROI positivo em até 90 dias',
          bans: '0 Banimentos do LinkedIn em 2+ anos de operação'
        }
      },
      segments: {
        title: 'Para quem servimos',
        subtitle: 'Empresas B2B que confiam na Prime SDR',
        segments: {
          saas: {
            title: 'SaaS & Tech',
            description: 'Plataformas, softwares, fintechs, HRtechs, marktechs'
          },
          consulting: {
            title: 'Consultorias',
            description: 'Estratégia, transformação digital, gestão, RH'
          },
          agencies: {
            title: 'Agências',
            description: 'Marketing, performance, branding, desenvolvimento'
          },
          industry: {
            title: 'Indústria',
            description: 'Fornecedores B2B, equipamentos, soluções industriais'
          },
          education: {
            title: 'Educação corporativa',
            description: 'Treinamentos, capacitação, desenvolvimento de líderes'
          },
          services: {
            title: 'Serviços profissionais',
            description: 'Jurídico, contábil, auditoria, facilities'
          }
        }
      },
      commitments: {
        title: 'Nossos compromissos',
        subtitle: 'Garantias que você pode cobrar',
        commitments: {
          transparency: {
            title: 'Transparência total',
            description: 'Você acompanha tudo: mensagens enviadas, taxas de aceitação, respostas, reuniões. Dashboard atualizado em tempo real.'
          },
          lgpd: {
            title: 'Conformidade com LGPD',
            description: 'Tratamos dados pessoais com responsabilidade. Política de privacidade clara, sem letra miúda.'
          },
          security: {
            title: 'Segurança no LinkedIn',
            description: 'Respeitamos todos os limites (30-40 convites/dia), variamos cadências, aquecemos perfis. Zero risco de ban.'
          },
          support: {
            title: 'Suporte real',
            description: 'Gente de verdade respondendo, ajustando campanhas, otimizando resultados. Não é chatbot, é parceria.'
          },
          guarantee: {
            title: 'Garantia de 90 dias',
            description: 'Não gerou reuniões qualificadas? Reembolso integral. Sem burocracia, sem desculpas.'
          }
        }
      },
      location: {
        title: 'Onde estamos',
        company: 'Prime SDR',
        cnpj: 'CNPJ: 60.782.822/0001-01',
        city: 'São Paulo, Brasil',
        region: 'Todo Brasil, América e Europa (operação 100% remota)',
        schedule: 'Segunda a sexta, 9h–18h (São Paulo)',
        email: 'contato@primesdr.com',
        phone: '+55 11 93200-1771 (WhatsApp)',
        website: 'https://primesdr.com'
      },
      cta: {
        title: 'Pronto para encher sua agenda?',
        subtitle: 'Mais de 2.000 perfis já estão gerando reuniões com a Prime SDR. Teste 90 dias sem risco.',
        primaryButton: 'Agendar demonstração (15 min)',
        secondaryButton: 'Ver casos de sucesso'
      }
    },
    contactPage: {
      hero: {
        badge: 'Fale com especialistas',
        title: 'Pronto para encher sua agenda de reuniões?',
        subtitle: 'Converse com nossos especialistas e descubra como gerar 30+ reuniões qualificadas por mês no LinkedIn.'
      },
      methods: {
        title: 'Escolha como prefere conversar',
        subtitle: 'Nossa equipe está pronta para te ajudar a transformar o LinkedIn em sua principal fonte de leads.',
        email: {
          title: 'E-mail',
          description: 'Resposta em até 24 horas',
          action: 'Enviar e-mail'
        },
        whatsapp: {
          title: 'WhatsApp',
          description: 'Fale direto com especialista',
          action: 'Chamar no WhatsApp'
        },
        call: {
          title: 'Agendar Call',
          description: 'Reunião de 15 minutos',
          action: 'Agendar agora'
        }
      },
      form: {
        title: 'Ou preencha o formulário',
        subtitle: 'Conte-nos sobre seu negócio e objetivos. Retornaremos em até 2 horas.',
        fields: {
          name: 'Nome completo *',
          email: 'Email *',
          phone: 'WhatsApp *',
          company: 'Empresa *',
          role: 'Seu cargo',
          budget: 'Orçamento mensal',
          message: 'Conte-nos sobre seu negócio e objetivos'
        },
        roleOptions: {
          select: 'Selecione seu cargo',
          ceo: 'CEO/Founder',
          cmo: 'CMO',
          sales: 'Diretor de Vendas',
          marketing: 'Diretor de Marketing',
          commercial: 'Diretor Comercial',
          other: 'Outro'
        },
        budgetOptions: {
          select: 'Selecione seu orçamento',
          range1: 'R$ 0 - R$ 5k',
          range2: 'R$ 5k - R$ 10k',
          range3: 'R$ 10k - R$ 20k',
          range4: 'R$ 20k - R$ 50k',
          range5: 'R$ 50k+'
        },
        messagePlaceholder: 'Ex: Somos uma agência de marketing digital com 15 funcionários. Queremos gerar mais leads qualificados para nossos clientes...',
        submit: 'Enviar mensagem',
        submitting: 'Enviando...'
      },
      benefits: {
        title: 'Por que falar conosco?',
        specialists: {
          title: 'Especialistas dedicados',
          description: 'Equipe com +5 anos de experiência em prospecção B2B'
        },
        fast: {
          title: 'Resposta rápida',
          description: 'Atendimento em até 2 minutos via whatsapp'
        },
        noCommitment: {
          title: 'Sem compromisso',
          description: 'Conversa inicial gratuita e sem pressão'
        }
      },
      contactInfo: {
        title: 'Informações de contato',
        email: 'contato@primesdr.com',
        phone: '+55 (11) 94502-2847',
        address: 'São Paulo, SP - Brasil',
        schedule: 'Seg - Sex: 9h às 18h',
        socialMedia: 'Siga-nos nas redes sociais:'
      },
      success: {
        title: 'Mensagem enviada com sucesso!',
        message: 'Nossa equipe entrará em contato em até 2 horas. Enquanto isso, que tal conhecer nossos cases de sucesso?',
        primaryButton: 'Ver cases de sucesso',
        secondaryButton: 'Voltar ao início'
      }
    },
    thankYouScreen: {
      title: 'Obrigado por se cadastrar! 🎉',
      message: 'Agora vamos agendar uma conversa estratégica para entender melhor suas necessidades.',
      calendar: {
        title: 'Escolha o melhor horário para você:',
        subtitle: 'Reunião de 45 minutos • Sem compromisso • Resultados garantidos'
      },
      whatsapp: {
        label: 'Prefere conversar por WhatsApp?',
        button: 'Conversar no WhatsApp'
      }
    },
    comingSoon: {
      title: 'Em breve você terá acesso!',
      message1: 'Estamos preparando o melhor conteúdo possível para você.',
      message2: 'Nossa equipe está trabalhando intensamente para entregar uma experiência excepcional, com valor real e resultados práticos.',
      availableSoon: 'estará disponível em breve!',
      button: 'Entendi, obrigado!',
      footer: 'Você será notificado assim que estiver disponível ✨'
    },
    resourcesPage: {
      hero: {
        badge: 'Recursos Gratuitos',
        title: 'Aprenda a dominar prospecção B2B no LinkedIn',
        subtitle: 'Ferramentas gratuitas, playbooks testados, templates prontos e casos reais. Tudo o que você precisa para encher sua agenda de reuniões qualificadas.',
        searchPlaceholder: 'Buscar recursos... ex: "sequência de mensagens", "taxa de conversão"'
      },
      stats: {
        totalDownloads: 'Downloads totais',
        playbookPages: 'Páginas no playbook',
        freeResources: 'Recursos gratuitos',
        availableAccess: 'Acesso disponível'
      },
      filters: {
        all: 'Todos',
        tools: 'Ferramentas',
        guides: 'Guias',
        videos: 'Vídeos',
        cases: 'Cases'
      },
      resourceTypes: {
        all: 'Todos os Recursos',
        tools: 'Ferramentas Gratuitas',
        guides: 'Guias & Playbooks',
        videos: 'Webinars & Vídeos',
        cases: 'Cases de Sucesso'
      },
      noResults: {
        title: 'Nenhum recurso encontrado',
        message: 'Tente ajustar sua busca ou filtros para encontrar o que procura.'
      },
      finalCta: {
        title: 'Pronto para colocar em prática?',
        subtitle: 'Você tem o conhecimento. Agora falta a execução. A Prime SDR faz isso por você.',
        primaryCta: 'Agendar demonstração (15 min)',
        secondaryCta: 'Testar 90 dias sem risco'
      },
      badges: {
        free: 'GRÁTIS',
        new: 'NOVO',
        mostDownloaded: 'MAIS BAIXADO',
        webinar: 'WEBINAR',
        caseReal: 'CASE REAL',
        highlight: 'DESTAQUE',
      case: 'CASE'
    }
  },
  termsOfUsePage: {
    hero: {
      badge: 'Termos e Condições',
      title: 'Termos de Uso',
      subtitle: 'Conheça as condições e regras para utilização de nossa plataforma de automação de prospecção no LinkedIn.',
      lastUpdate: 'Última atualização: 13 de outubro de 2025'
    }
  },
  cookiesPolicyPage: {
    hero: {
      badge: 'Política de Cookies',
      title: 'Política de Cookies',
      subtitle: 'Saiba como utilizamos cookies e tecnologias similares para melhorar sua experiência de navegação.',
      lastUpdate: 'Última atualização: 13 de outubro de 2025'
    }
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
      trust: 'Confían en nosotros:',
      mainHeadline: {
        line1: 'Leads calificados de LinkedIn en tu agenda.',
        line2: 'O tu dinero de vuelta.'
      },
      bulletPoints: {
        desktop: ['Sin contratar SDR.', 'Sin cadencias manuales.', 'Sin quemar presupuesto en ads.'],
        mobile: ['Sin contratar SDR o inflar el equipo.', 'Sin perder tiempo con cadencias manuales.', 'Sin gastar en medios pagados que queman tu presupuesto.']
      }
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
      ],
      badge: 'Caso Real • Agencia de Marketing',
      metrics: {
        qualifiedMeetings: {
          value: '112',
          label: 'Reuniones calificadas',
          period: '403 MQLs generados',
          extraText: 'Tasa de aceptación: 35%'
        },
        pipeline: {
          value: 'R$ 480 mil',
          label: 'de Pipeline',
          period: '90 días de operación',
          extraText: '8 clientes X R$60k/año'
        },
        closingClients: {
          value: 'Clientes',
          label: 'Cerrando ahora',
          period: 'Contrato de 12 meses',
          extraText: 'Ticket promedio: R$ 5k/mes'
        },
        payback: {
          value: 'Payback',
          label: 'en el primer mes',
          period: 'ROI de 4.066% sobre el valor anual de los contratos',
          extraText: 'En 90 días de operación'
        }
      },
      methodology: {
        title: '¿Cómo lo conseguimos?',
        description: 'Tú montas, nosotros ejecutamos ➡️ SDR cierra. Tú configuras la cadencia (mensajes, timing, acciones). Nuestra automatización corre 24/7 con precisión. ¿Lead respondió? Pausa automática y SDR humano califica y agenda en tu CRM.'
      },
      testimonial: {
        quote: 'Antes del Prime SDR, vivíamos corriendo tras leads. Ahora es al contrario: los leads son los que corren tras nosotros. La agenda está llena para las próximas tres semanas. Cambió completamente el juego.',
        author: 'Erick Oliveira',
        role: 'Dueño de Agencia',
        company: 'Haast - Marketing Digital'
      },
      cta: {
        title: 'Saber si Prime SDR es para ti',
        subtitle: '60 segundos para saber si tu operación puede generar 30+ reuniones por mes en LinkedIn.',
        button: 'Comenzar ahora'
      }
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
      cta: 'Quiero agendar una reunión',
      cards: {
        linkedinFirst: {
          title: 'LinkedIn-first de verdad',
          description: 'No es "otro CRM con integración". Fuimos diseñados 100% para LinkedIn: límites seguros, calentamiento automático, cadencias correctas. Cero riesgo de ban.',
          features: ['Límites seguros respetados', 'Calentamiento automático', 'Cadencias optimizadas', 'Cero riesgo de ban']
        },
        youBuild: {
          title: 'Tú montas. Nosotros ejecutamos.',
          description: 'Tú creas la cadencia ideal o usas nuestros templates probados, defines timing y acciones, y nuestra automatización corre con precisión. ¿Lead respondió? Pausa automática y SDR humano asume.',
          features: ['Mensajes personalizados por cargo', 'Secuencia adaptada por sector', 'Cuándo solicitar conexión o dar like a posts', 'Días y horarios de cada envío']
        },
        humanSdr: {
          title: 'SDR humano que cierra',
          description: '¿Lead respondió? SDR real asume en tiempo real, califica y agenda. Nada de dejar enfriar. Nada de bot respondiendo.',
          features: ['Respuesta en tiempo real', 'Calificación humana', 'Agendamiento directo', 'Sin bots']
        },
        youControl: {
          title: 'Tú en control. Siempre.',
          description: 'Deja de mandar mensajes a ciegas sin saber qué funciona.',
          features: ['Dashboard en tiempo real', 'Pruebas A/B automatizadas', 'Métricas que importan (no vanidad)', 'Decisiones basadas en datos']
        }
      },
      results: {
        title: 'Automatización para LinkedIn enfocada en resultados.',
        agendaFull: {
          title: 'Tu agenda se llena',
          description: 'Predecible. Escalable. Sin que muevas un dedo.'
        },
        operation247: {
          title: 'Operación 24/7',
          description: 'Automatización inteligente + SDR humano siempre disponible.'
        },
        totalGuarantee: {
          title: 'Garantía total',
          description: '90 días de prueba. ¿Sin ROI? Reembolso integral.'
        }
      },
      ctaButton: {
        text: 'Agendar demostración (15 min)',
        urgency: '⚡ Plazas limitadas esta semana'
      }
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
      ],
      badge: 'Garantía Brutal',
      steps: {
        step1: {
          title: 'Definimos las metas en el kickoff',
          description: 'Ej: 400 MQLs o X reuniones/mes'
        },
        step2: {
          title: 'Ejecutamos la operación por 90 días',
          description: 'Automatización + SDR humano trabajando'
        },
        step3: {
          title: '¿No se cumplió? Reembolso integral',
          description: 'Sin letra pequeña. Sin "depende"'
        }
      },
      transparency: {
        title: 'Transparencia total vía dashboard',
        subtitle: 'Acompaña todo en tiempo real',
        features: [
          'Transparencia total vía dashboard',
          'Métricas en tiempo real',
          'Reportes semanales',
          'Acceso completo a los datos'
        ],
        dashboard: {
          meta: 'Meta: 100 reuniones',
          meetings: 'Reuniones',
          rate: 'Tasa'
        }
      },
      cta: 'Comenzar prueba de 90 días'
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
          badge: 'PARA EMPEZAR',
          description: 'Para quien quiere probar que funciona antes de escalar.',
          features: [
            'Hasta 2 perfiles LinkedIn activos',
            '2 campañas simultáneas por perfil',
            'Plantillas listas (5+ industrias)',
            'Dashboard con métricas en tiempo real',
            'Integración vía webhook',
            'Soporte vía chat (respuesta en 24h)',
            'Prueba de 90 días'
          ],
          idealFor: 'Fundadores y equipos pequeños probando prospección sistemática',
          proof: 'Recuperación de inversión en el primer mes. O reembolso integral.',
          cta: {
            primary: 'Comenzar prueba gratis',
            secondary: 'Hablar con especialista'
          }
        },
        growth: {
          name: 'Growth 20%OFF',
          badge: 'MEJOR COSTO-BENEFICIO',
          description: 'Para equipos que quieren resultados predecibles sin depender de medios pagados.',
          features: [
            'Todo del Starter, más:',
            'Hasta 10 perfiles LinkedIn activos',
            'Campañas ilimitadas simultáneas por perfil',
            'Revisión quincenal de rendimiento',
            'Pruebas A/B automatizadas',
            'Reportes ejecutivos semanales (próximamente)',
            'Soporte prioritario (respuesta en 6h)',
            'Onboarding guiado'
          ],
          idealFor: 'Operaciones comerciales que necesitan llenar agenda cada mes',
          proof: 'Cliente agencia: 480k en pipeline, 8 clientes, ticket alto/mes',
          popular: 'Más popular',
          cta: {
            primary: 'Comenzar prueba gratis',
            secondary: 'Ver casos de mi segmento'
          }
        },
        scale: {
          name: 'Scale',
          badge: 'SOLUCIÓN PERSONALIZADA',
          description: 'Para empresas que necesitan una solución a medida.',
          customMessage: 'Plan personalizado',
          freeConsultation: 'Consultoría gratuita incluida',
          features: [
            'Todo del Growth, más:',
            'Perfiles LinkedIn ilimitados',
            'Campañas ilimitadas simultáneas por perfil',
            'SDR dedicado (exclusivo para tu operación)',
            'Copy personalizada por ICP',
            'Listas curadas + enriquecimiento de datos',
            'Playbooks avanzados de tu segmento',
            'Garantía de X reuniones/mes (definida en el kickoff)',
            'Account Manager dedicado',
            'Onboarding VIP (3 días + consultoría estratégica)',
            'Acceso anticipado a nuevos recursos'
          ],
          idealFor: 'Empresas que quieren transformar LinkedIn en motor de ingresos predecible',
          cta: {
            primary: 'Hablar con consultor',
            secondary: 'Agendar reunión estratégica'
          },
          trustIndicators: {
            freeConsultation: 'Consultoría gratuita',
            fastResponse: 'Respuesta en 2h',
            noCommitment: 'Sin compromiso • Sin tarjeta • Sin trucos'
          }
        }
      },
      comparison: {
        title: 'SDR Interno vs Prime SDR',
        subtitle: 'Ve los números que hacen la diferencia',
        columns: {
          strategy: {
            title: 'Estrategia',
            subtitle: 'Gastos fijos'
          },
          internalSdr: {
            title: 'SDR Interno',
            subtitle: 'Método tradicional'
          },
          salesNavigator: {
            title: 'Sales Navigator',
            subtitle: 'Herramienta LinkedIn'
          },
          primeSdr: {
            title: 'Prime SDR',
            subtitle: 'Método inteligente'
          }
        },
        rows: {
          monthlyCost: {
            label: 'Costo mensual',
            internalSdr: 'Costo alto por persona',
            salesNavigator: {
              value: 'Costo bajo',
              detail: '(~R$ 640)'
            },
            primeSdr: {
              value: 'Ahorro significativo',
              detail: 'con Prime SDR'
            }
          },
          activeProfiles: {
            label: 'Perfiles activos',
            internalSdr: '1 perfil',
            salesNavigator: '1 perfil',
            primeSdr: 'Sin límite de perfiles activos'
          },
          setupTime: {
            label: 'Tiempo de setup',
            internalSdr: {
              value: '3–6 meses',
              detail: 'ramp-up'
            },
            salesNavigator: {
              value: 'Inmediato',
              detail: '(pero manual)'
            },
            primeSdr: {
              value: '7 días',
              detail: 'activo'
            }
          },
          method: {
            label: 'Método',
            internalSdr: 'Depende de la disciplina',
            salesNavigator: {
              value: '50 msg/mes',
              detail: '(¡LÍMITE!)'
            },
            primeSdr: {
              value: 'Automatización + inteligencia',
              detail: '1.200+ msg/mes'
            }
          },
          meetingsPerMonth: {
            label: 'Reuniones/mes',
            internalSdr: {
              value: '20–30',
              detail: 'si funciona bien'
            },
            salesNavigator: {
              value: '5–10',
              detail: '(manual)'
            },
            primeSdr: {
              value: '80–120',
              detail: 'historial real'
            }
          },
          availability: {
            label: 'Disponibilidad',
            internalSdr: 'Vacaciones, rotación',
            salesNavigator: {
              value: '24/7',
              detail: 'pero sin automatización real'
            },
            primeSdr: {
              value: '24/7',
              detail: 'ininterrumpida'
            }
          },
          dashboard: {
            label: 'Dashboard',
            internalSdr: '❌ Sin dashboard',
            salesNavigator: '❌ Sin dashboard',
            primeSdr: '✅ Dashboard completo'
          },
          proprietaryData: {
            label: 'Datos propietarios',
            internalSdr: '❌ Sin datos propietarios',
            salesNavigator: '❌ Sin datos propietarios',
            primeSdr: '✅ Datos propietarios'
          },
          cadences: {
            label: 'Cadencias',
            internalSdr: '❌ Cadencias manuales ↓',
            salesNavigator: '❌ Cadencias manuales ↓',
            primeSdr: '✅ Cadencias automatizadas'
          }
        },
        result: {
          title: 'Resultado Final',
          savings: {
            value: 'Ahorro significativo',
            label: 'Ahorro mensual'
          },
          meetings: {
            value: '3x más',
            label: 'Reuniones generadas'
          }
        }
      },
      finalCta: {
        question: '"¿No sabes qué plan elegir?" Habla con un especialista (2 min)',
        button: 'Hablar con especialista'
      },
      seeAllFeatures: 'Ver todos los recursos'
    },
    howItWorks: {
      headline: 'De kickoff a resultados - en 7 días',
      subtitle: 'Nuestro proceso comprobado para transformar tu LinkedIn en máquina de leads.',
      flowchart: {
        title: 'Flujo de Automatización Inteligente',
        subtitle: 'Ve en la práctica, cómo Prime trabaja 24/7 para generar reuniones',
        dailyFlow: {
          d1: {
            time: 'D1',
            action: 'Automatización envía 120 invitaciones',
            detail: '3 perfiles x 40/día'
          },
          d3: {
            time: 'D3',
            action: '49 aceptaciones llegan',
            detail: 'Tasa de aceptación: 49%'
          },
          d5: {
            time: 'D5',
            action: 'Mensaje post-aceptación',
            detail: 'Vía Automatización'
          },
          d7: {
            time: 'D7',
            action: '20 leads responden',
            detail: 'Con interés real - 33,9% de los conectados respondieron.'
          },
          instant: {
            time: 'En el momento',
            action: 'SDR entra en la conversación',
            detail: 'Notificación instantánea'
          },
          d10: {
            time: 'D10',
            action: 'SDR agenda 8 reuniones',
            detail: '40% de los que respondieron marcaron reunión.'
          },
          conversion: {
            time: 'Conversión',
            action: '¡Tú Cierras!',
            detail: '¡La tasa de conversión es tuya, pero el lead calificado es con nosotros!'
          }
        },
        summary: {
          invites: 'Invitaciones enviadas',
          acceptances: 'Aceptaciones',
          responses: 'Respuestas',
          meetings: 'Reuniones agendadas'
        }
      },
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
      ],
      timeline: {
        title: 'Resultado Esperado',
        subtitle: 'Evolución de la performance a lo largo del tiempo',
        week1to2: {
          title: 'Semana 1–2',
          description: 'Primeras respuestas y reuniones'
        },
        week3to6: {
          title: 'Semana 3–6',
          description: 'Ritmo estable (20–30 reuniones/mes por perfil activo)'
        },
        month2to3: {
          title: 'Mes 2–3',
          description: 'Escala y optimización (25–40 reuniones/mes en Growth)'
        },
        stats: {
          initial: 'Reuniones/mes inicial',
          stable: 'Reuniones/mes estable',
          optimized: 'Reuniones/mes optimizado'
        },
        processLabel: 'del proceso'
      },
      cta: {
        button: 'Ver demostración',
        trust: {
          demo: 'Demostración gratuita',
          noCommitment: 'Sin compromiso',
          results: 'Resultados en 7 días'
        }
      }
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
      contact: 'Habla con nosotros',
      badge: 'FAQ',
      ctaSection: {
        title: 'Saber si Prime SDR es para ti',
        subtitle: '60 segundos para saber si tu operación puede generar 30+ reuniones por mes en LinkedIn.',
        button: 'Comenzar ahora'
      }
    },
    finalCta: {
      badge: '¿Listo para Empezar?',
      headline: 'Transforma tu LinkedIn en un motor de reuniones',
      subtitle: 'Ve Prime SDR funcionando en vivo en una demostración de 15 minutos.',
      demoTitle: 'En la demo, vas a ver:',
      demoFeatures: [
        {
          title: 'Interfaz completa en funcionamiento',
          description: 'Ve el dashboard real con métricas en vivo',
          highlight: 'Tiempo real'
        },
        {
          title: 'Cómo crear una campaña desde cero',
          description: 'Proceso completo de configuración paso a paso',
          highlight: 'Paso a paso'
        },
        {
          title: 'Ejemplos de mensajes que convierten',
          description: 'Plantillas probadas y optimizadas por segmento',
          highlight: 'Comprobado'
        },
        {
          title: 'Dashboard con métricas reales',
          description: 'Datos reales de clientes (anónimos)',
          highlight: 'Datos reales'
        },
        {
          title: 'Calculadora de ROI con tus números',
          description: 'Proyección personalizada para tu negocio',
          highlight: 'Personalizado'
        }
      ],
      stats: {
        activeProfiles: 'Perfiles activos',
        meetings45Days: 'Reuniones en 45 días',
        acceptanceRate: 'Tasa de aceptación',
        bans: 'Suspensiones en 2+ años'
      },
      primaryButton: 'Agendar demostración (15 min)',
      secondaryButton: 'Ver casos de éxito',
      guarantees: [
        { text: 'Demonstración gratuita', highlight: 'Sin costo' },
        { text: 'Sin compromiso', highlight: 'Flexible' },
        { text: 'Resultados en 7 días', highlight: 'Rápido' },
        { text: 'Garantía de 90 días', highlight: 'Seguro' }
      ],
      finalMessage: {
        title: 'De la configuración a resultados en solo 7 días',
        description: 'Únete a más de 2.000 perfiles de LinkedIn que ya transformaron su prospección en un motor de reuniones predecibles y escalables.'
      }
    },
    socialProof: {
      header: {
        badge: '✨ Resultados comprobados',
        title: 'Empresas reales llenando sus agendas con Prime SDR ahora.',
        subtitle: 'Más de 2.000 perfiles activos generando reuniones todos los días, desde startups hasta grandes corporaciones.'
      },
      metrics: {
        activeProfiles: 'Perfiles activos generando conexiones ahora',
        meetings: 'Reuniones agendadas con decisores B2B',
        roi: 'Clientes con ROI positivo en hasta 90 días',
        guarantee: 'Garantía de reembolso total si no genera resultado'
      },
      logos: {
        badge: '🏆 Socios de éxito',
        title: 'Empresas que confían en Prime SDR',
        categories: ['SaaS', 'Consultorías', 'Industrias', 'Agencias'],
        trustMessage: '+2.000 empresas confían en Prime SDR'
      },
      guarantee: {
        title: '🛡️ Garantía Prime: resultados en 90 días o reembolso total.',
        subtitle: '📈 Resultados predecibles. Cero riesgo.',
        cta: 'Conversar con especialista'
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
        description: 'Transformamos LinkedIn en motor de ingresos predecible para empresas B2B. Automatización inteligente + SDR humano = resultados garantizados.'
      },
      links: {
        company: 'Empresa',
        resources: 'Recursos',
        legal: 'Legal'
      },
      sections: {
        company: ['Sobre', 'Contato', 'Términos de Uso', 'Política de Privacidad', 'Cookies'],
        resources: ['Blog', 'Casos', 'Playbooks', 'FAQ'],
        legal: ['Términos de uso', 'Política de privacidad', 'Cookies', 'LGPD']
      },
      copyright: '© 2024 Prime SDR. Todos los derechos reservados.',
      cta: 'Prueba 90 días sin riesgo',
      social: 'Social'
    },
    contactModal: {
      title: 'Vamos a agendar una conversación estratégica',
      subtitle: 'Completa tus datos y elige el mejor horario para ti',
      form: {
        heading: '¡Casi listo! ¿Dónde te encontramos?',
        description: 'Completa tus datos para agendar una conversación estratégica',
        name: 'Nombre completo',
        email: 'Correo corporativo',
        phone: 'Teléfono',
        company: 'Empresa',
        role: 'Cargo',
        linkedin: 'LinkedIn (opcional)',
        linkedinPlaceholder: 'https://linkedin.com/in/tu-perfil',
        submit: 'Agendar conversación',
        submitting: 'Agendando...',
        country: 'País',
        selectCountry: 'Selecciona el país'
      },
      validation: {
        nameRequired: 'El nombre es obligatorio',
        emailRequired: 'El correo es obligatorio',
        emailInvalid: 'Correo inválido',
        phoneRequired: 'El teléfono es obligatorio',
        linkedinInvalid: 'URL de LinkedIn inválida'
      }
    },
    aboutPage: {
      hero: {
        badge: 'Nuestra Historia',
        title: 'Nos cansamos de ver ventas trabadas por falta de leads calificados.',
        subtitle: 'Prime SDR nació de una frustración real: equipos comerciales talentosos desperdiciando tiempo con prospección manual mientras los decisores estaban a un clic de distancia en LinkedIn. Creamos la solución que queríamos tener.'
      },
      story: {
        title: 'De dónde vino Prime SDR',
        content: {
          paragraph1: 'En 2023, trabajábamos en diferentes empresas B2B enfrentando el mismo problema: pipelines vacíos, equipos sobrecargados y dependencia cara de medios pagos.',
          paragraph2: 'La rutina era siempre la misma:',
          list: [
            'Lunes por la mañana: "Necesitamos más leads"',
            'Miércoles por la tarde: "Estos leads son pésimos"',
            'Viernes por la noche: "Vamos a aumentar el presupuesto de anuncios"'
          ],
          paragraph3: 'Probamos todo: cold call (nadie atendía), email frío (directo al spam), SDRs internos (alta rotación, resultados inconsistentes).',
          highlight1: 'Hasta que miramos LinkedIn de forma diferente.',
          paragraph4: 'Los decisores estaban ahí. Activos. Publicando. Interactuando. Pero acceder a ellos de forma escalable y ética parecía imposible.',
          paragraph5: 'Entonces construimos Prime SDR: una operación que combina automatización inteligente (respetando límites de LinkedIn) + SDR humano (que entra cuando el lead responde) + transparencia total (ves todo en tiempo real).',
          highlight2: 'La primera prueba: 112 reuniones en 45 días. R$ 6,3M en pipeline. Payback en 13 días.',
          paragraph6: 'Pensamos: "Si funciona para nosotros, funciona para todo B2B."',
          paragraph7: 'Y aquí estamos.'
        }
      },
      mission: {
        title: 'Por qué hacemos lo que hacemos',
        missionTitle: 'Misión',
        missionDescription: 'Transformar LinkedIn en un motor de ingresos predecible para empresas B2B — sin depender de suerte, sin quemar presupuesto y sin sobrecargar equipos.',
        visionTitle: 'Visión',
        visionDescription: 'Ser la plataforma líder en prospección B2B en LinkedIn en América Latina, conocida por resultados reales y transparencia total.',
        valuesTitle: 'Valores',
        values: {
          results: {
            title: 'Resultados por encima de todo',
            description: 'No vendemos promesas. Entregamos reuniones calificadas o devolvemos tu dinero. Así de simple.'
          },
          transparency: {
            title: 'Transparencia radical',
            description: 'Ves cada métrica, cada mensaje enviado, cada respuesta. Sin cajas negras. Sin "confía en mí".'
          },
          ethics: {
            title: 'Ética siempre',
            description: 'Respetamos límites de LinkedIn, privacidad de datos (LGPD) y nunca enviamos spam. Crecimiento sostenible, no quema de imagen.'
          },
          partnership: {
            title: 'Asociación real',
            description: 'No somos proveedor. Somos extensión de tu equipo comercial. Tu éxito es nuestro éxito.'
          },
          innovation: {
            title: 'Innovación constante',
            description: 'El mercado cambia. LinkedIn cambia. Nos adaptamos. Siempre probando, siempre mejorando.'
          }
        }
      },
      differentiators: {
        title: 'Lo que nos hace únicos en el mercado',
        otherTools: 'Otras herramientas de automatización',
        primeSdr: 'Prime SDR',
        items: {
          automation: { other: 'Automatización genérica ("envía y reza")', prime: 'Tú montas la estrategia, automatización ejecuta con precisión' },
          support: { other: 'Te deja solo después de la venta', prime: 'SDR humano califica y agenda reuniones para ti' },
          guarantee: { other: '"Los resultados pueden variar" (sin garantía)', prime: '90 días de garantía: ¿no funcionó? Reembolso total' },
          dashboard: { other: 'Dashboard confuso, métricas de vanidad', prime: 'Métricas que importan: reuniones, pipeline, CPR' },
          supportGeneric: { other: 'Soporte genérico, chatbot que no resuelve', prime: 'Soporte real, gente respondiendo, ajustes en tiempo real' },
          banRisk: { other: 'Riesgo de ban (no respetan límites)', prime: '100% seguro: operamos hace años sin una sola suspensión' }
        }
      },
      stats: {
        title: 'Números que comprueban',
        subtitle: 'Resultados reales de quienes usan Prime SDR',
        stats: {
          profiles: '+2.000 Perfiles LinkedIn activos generando conexiones ahora',
          meetings: '112 Reuniones generadas en promedio por cliente en los primeros 45 días',
          acceptanceRate: '39% Tasa promedio de aceptación de conexión (3x por encima del promedio del mercado)',
          responseRate: '22% Tasa promedio de respuesta (leads comprometidos, no robots)',
          roi: '95% Clientes con ROI positivo en hasta 90 días',
          bans: '0 Suspensiones de LinkedIn en 2+ años de operación'
        }
      },
      segments: {
        title: 'Para quién servimos',
        subtitle: 'Empresas B2B que confían en Prime SDR',
        segments: {
          saas: {
            title: 'SaaS & Tech',
            description: 'Plataformas, softwares, fintechs, HRtechs, marktechs'
          },
          consulting: {
            title: 'Consultorías',
            description: 'Estrategia, transformación digital, gestión, RH'
          },
          agencies: {
            title: 'Agencias',
            description: 'Marketing, performance, branding, desarrollo'
          },
          industry: {
            title: 'Industria',
            description: 'Proveedores B2B, equipos, soluciones industriales'
          },
          education: {
            title: 'Educación corporativa',
            description: 'Capacitaciones, entrenamiento, desarrollo de líderes'
          },
          services: {
            title: 'Servicios profesionales',
            description: 'Jurídico, contable, auditoría, facilities'
          }
        }
      },
      commitments: {
        title: 'Nuestros compromisos',
        subtitle: 'Garantías que puedes exigir',
        commitments: {
          transparency: {
            title: 'Transparencia total',
            description: 'Acompañas todo: mensajes enviados, tasas de aceptación, respuestas, reuniones. Dashboard actualizado en tiempo real.'
          },
          lgpd: {
            title: 'Cumplimiento con LGPD',
            description: 'Tratamos datos personales con responsabilidad. Política de privacidad clara, sin letra pequeña.'
          },
          security: {
            title: 'Seguridad en LinkedIn',
            description: 'Respetamos todos los límites (30-40 invitaciones/día), variamos cadencias, calentamos perfiles. Cero riesgo de ban.'
          },
          support: {
            title: 'Soporte real',
            description: 'Gente de verdad respondiendo, ajustando campañas, optimizando resultados. No es chatbot, es asociación.'
          },
          guarantee: {
            title: 'Garantía de 90 días',
            description: '¿No generó reuniones calificadas? Reembolso integral. Sin burocracia, sin excusas.'
          }
        }
      },
      location: {
        title: 'Dónde estamos',
        company: 'Prime SDR',
        cnpj: 'CNPJ: 60.782.822/0001-01',
        city: 'São Paulo, Brasil',
        region: 'Todo Brasil, América y Europa (operación 100% remota)',
        schedule: 'Lunes a viernes, 9h–18h (São Paulo)',
        email: 'contato@primesdr.com',
        phone: '+55 11 93200-1771 (WhatsApp)',
        website: 'https://primesdr.com'
      },
      cta: {
        title: '¿Listo para llenar tu agenda?',
        subtitle: 'Más de 2.000 perfiles ya están generando reuniones con Prime SDR. Prueba 90 días sin riesgo.',
        primaryButton: 'Agendar demostración (15 min)',
        secondaryButton: 'Ver casos de éxito'
      }
    },
    contactPage: {
      hero: {
        badge: 'Habla con especialistas',
        title: '¿Listo para llenar tu agenda de reuniones?',
        subtitle: 'Conversa con nuestros especialistas y descubre cómo generar 30+ reuniones calificadas por mes en LinkedIn.'
      },
      methods: {
        title: 'Elige cómo prefieres conversar',
        subtitle: 'Nuestro equipo está listo para ayudarte a transformar LinkedIn en tu principal fuente de leads.',
        email: {
          title: 'Correo',
          description: 'Respuesta en hasta 24 horas',
          action: 'Enviar correo'
        },
        whatsapp: {
          title: 'WhatsApp',
          description: 'Habla directo con especialista',
          action: 'Llamar por WhatsApp'
        },
        call: {
          title: 'Agendar Llamada',
          description: 'Reunión de 15 minutos',
          action: 'Agendar ahora'
        }
      },
      form: {
        title: 'O completa el formulario',
        subtitle: 'Cuéntanos sobre tu negocio y objetivos. Responderemos en hasta 2 horas.',
        fields: {
          name: 'Nombre completo *',
          email: 'Correo *',
          phone: 'WhatsApp *',
          company: 'Empresa *',
          role: 'Tu cargo',
          budget: 'Presupuesto mensual',
          message: 'Cuéntanos sobre tu negocio y objetivos'
        },
        roleOptions: {
          select: 'Selecciona tu cargo',
          ceo: 'CEO/Founder',
          cmo: 'CMO',
          sales: 'Director de Ventas',
          marketing: 'Director de Marketing',
          commercial: 'Director Comercial',
          other: 'Otro'
        },
        budgetOptions: {
          select: 'Selecciona tu presupuesto',
          range1: 'R$ 0 - R$ 5k',
          range2: 'R$ 5k - R$ 10k',
          range3: 'R$ 10k - R$ 20k',
          range4: 'R$ 20k - R$ 50k',
          range5: 'R$ 50k+'
        },
        messagePlaceholder: 'Ej: Somos una agencia de marketing digital con 15 empleados. Queremos generar más leads calificados para nuestros clientes...',
        submit: 'Enviar mensaje',
        submitting: 'Enviando...'
      },
      benefits: {
        title: '¿Por qué hablar con nosotros?',
        specialists: {
          title: 'Especialistas dedicados',
          description: 'Equipo con +5 años de experiencia en prospección B2B'
        },
        fast: {
          title: 'Respuesta rápida',
          description: 'Atención en hasta 2 minutos vía whatsapp'
        },
        noCommitment: {
          title: 'Sin compromiso',
          description: 'Conversación inicial gratuita y sin presión'
        }
      },
      contactInfo: {
        title: 'Información de contacto',
        email: 'contato@primesdr.com',
        phone: '+55 (11) 94502-2847',
        address: 'São Paulo, SP - Brasil',
        schedule: 'Lun - Vie: 9h a 18h',
        socialMedia: 'Síguenos en redes sociales:'
      },
      success: {
        title: '¡Mensaje enviado con éxito!',
        message: 'Nuestro equipo se pondrá en contacto en hasta 2 horas. Mientras tanto, ¿qué tal conocer nuestros casos de éxito?',
        primaryButton: 'Ver casos de éxito',
        secondaryButton: 'Volver al inicio'
      }
    },
    thankYouScreen: {
      title: '¡Gracias por registrarte! 🎉',
      message: 'Ahora vamos a agendar una conversación estratégica para entender mejor tus necesidades.',
      calendar: {
        title: 'Elige el mejor horario para ti:',
        subtitle: 'Reunión de 45 minutos • Sin compromiso • Resultados garantizados'
      },
      whatsapp: {
        label: '¿Prefieres conversar por WhatsApp?',
        button: 'Conversar por WhatsApp'
      }
    },
    comingSoon: {
      title: '¡Pronto tendrás acceso!',
      message1: 'Estamos preparando el mejor contenido posible para ti.',
      message2: 'Nuestro equipo está trabajando intensamente para entregar una experiencia excepcional, con valor real y resultados prácticos.',
      availableSoon: 'estará disponible pronto!',
      button: 'Entendido, ¡gracias!',
      footer: 'Serás notificado tan pronto como esté disponible ✨'
    },
    resourcesPage: {
      hero: {
        badge: 'Recursos Gratuitos',
        title: 'Aprende a dominar prospección B2B en LinkedIn',
        subtitle: 'Herramientas gratuitas, playbooks probados, templates listos y casos reales. Todo lo que necesitas para llenar tu agenda de reuniones calificadas.',
        searchPlaceholder: 'Buscar recursos... ej: "secuencia de mensajes", "tasa de conversión"'
      },
      stats: {
        totalDownloads: 'Descargas totales',
        playbookPages: 'Páginas en el playbook',
        freeResources: 'Recursos gratuitos',
        availableAccess: 'Acceso disponible'
      },
      filters: {
        all: 'Todos',
        tools: 'Herramientas',
        guides: 'Guías',
        videos: 'Videos',
        cases: 'Casos'
      },
      resourceTypes: {
        all: 'Todos los Recursos',
        tools: 'Herramientas Gratuitas',
        guides: 'Guías & Playbooks',
        videos: 'Webinars & Videos',
        cases: 'Casos de Éxito'
      },
      noResults: {
        title: 'No se encontraron recursos',
        message: 'Intenta ajustar tu búsqueda o filtros para encontrar lo que buscas.'
      },
      finalCta: {
        title: '¿Listo para poner en práctica?',
        subtitle: 'Tienes el conocimiento. Ahora falta la ejecución. Prime SDR lo hace por ti.',
        primaryCta: 'Agendar demostración (15 min)',
        secondaryCta: 'Probar 90 días sin riesgo'
      },
      badges: {
        free: 'GRATIS',
        new: 'NUEVO',
        mostDownloaded: 'MÁS DESCARGADO',
        webinar: 'WEBINAR',
        caseReal: 'CASO REAL',
        highlight: 'DESTACADO',
        case: 'CASO'
      }
    },
    termsOfUsePage: {
      hero: {
        badge: 'Términos y Condiciones',
        title: 'Términos de Uso',
        subtitle: 'Conoce las condiciones y reglas para utilización de nuestra plataforma de automatización de prospección en LinkedIn.',
        lastUpdate: 'Última actualización: 13 de octubre de 2025'
      }
    },
    cookiesPolicyPage: {
      hero: {
        badge: 'Política de Cookies',
        title: 'Política de Cookies',
        subtitle: 'Aprende cómo utilizamos cookies y tecnologías similares para mejorar tu experiencia de navegación.',
        lastUpdate: 'Última actualización: 13 de octubre de 2025'
      }
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
      trust: 'Trusted by:',
      mainHeadline: {
        line1: 'Qualified LinkedIn leads in your calendar.',
        line2: 'Or your money back.'
      },
      bulletPoints: {
        desktop: ['Without hiring SDRs.', 'Without manual cadences.', 'Without burning budget on ads.'],
        mobile: ['Without hiring SDRs or inflating the team.', 'Without wasting time on manual cadences.', 'Without spending on paid media that burns your budget.']
      }
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
      ],
      badge: 'Real Case • Marketing Agency',
      metrics: {
        qualifiedMeetings: {
          value: '112',
          label: 'Qualified meetings',
          period: '403 MQLs generated',
          extraText: 'Acceptance rate: 35%'
        },
        pipeline: {
          value: 'R$ 480k',
          label: 'in Pipeline',
          period: '90 days of operation',
          extraText: '8 clients X R$60k/year'
        },
        closingClients: {
          value: 'Clients',
          label: 'Closing now',
          period: '12-month contract',
          extraText: 'Average ticket: R$ 5k/month'
        },
        payback: {
          value: 'Payback',
          label: 'in the first month',
          period: 'ROI of 4.066% on annual contract value',
          extraText: 'In 90 days of operation'
        }
      },
      methodology: {
        title: 'How did we achieve this?',
        description: 'You set up, we execute ➡️ SDR closes. You configure the cadence (messages, timing, actions). Our automation runs 24/7 with precision. Lead responded? Automatic pause and human SDR qualifies and schedules in your CRM.'
      },
      testimonial: {
        quote: 'Before Prime SDR, we were always chasing leads. Now it\'s the opposite: leads are chasing us. The calendar is full for the next three weeks. Completely changed the game.',
        author: 'Erick Oliveira',
        role: 'Agency Owner',
        company: 'Haast - Digital Marketing'
      },
      cta: {
        title: 'Find out if Prime SDR is for you',
        subtitle: '60 seconds to know if your operation can generate 30+ meetings per month on LinkedIn.',
        button: 'Start now'
      }
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
      cta: 'I want to schedule a meeting',
      cards: {
        linkedinFirst: {
          title: 'True LinkedIn-first',
          description: 'Not "another CRM with integration". We were designed 100% for LinkedIn: safe limits, automatic warming, correct cadences. Zero ban risk.',
          features: ['Safe limits respected', 'Automatic warming', 'Optimized cadences', 'Zero ban risk']
        },
        youBuild: {
          title: 'You set up. We execute.',
          description: 'You create the ideal cadence or use our tested templates, define timing and actions, and our automation runs with precision. Lead responded? Automatic pause and human SDR takes over.',
          features: ['Personalized messages by role', 'Sequence adapted by sector', 'When to request connection or like posts', 'Days and times of each send']
        },
        humanSdr: {
          title: 'Human SDR that closes',
          description: 'Lead responded? Real SDR takes over in real-time, qualifies and schedules. No letting it cool down. No bot responding.',
          features: ['Real-time response', 'Human qualification', 'Direct scheduling', 'No bots']
        },
        youControl: {
          title: 'You in control. Always.',
          description: 'Stop sending messages in the dark without knowing what works.',
          features: ['Real-time dashboard', 'Automated A/B tests', 'Metrics that matter (not vanity)', 'Data-driven decisions']
        }
      },
      results: {
        title: 'LinkedIn automation focused on results.',
        agendaFull: {
          title: 'Your calendar fills up',
          description: 'Predictable. Scalable. Without you lifting a finger.'
        },
        operation247: {
          title: '24/7 operation',
          description: 'Smart automation + human SDR always available.'
        },
        totalGuarantee: {
          title: 'Total guarantee',
          description: '90-day test. No ROI? Full refund.'
        }
      },
      ctaButton: {
        text: 'Schedule demo (15 min)',
        urgency: '⚡ Limited spots this week'
      }
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
      ],
      badge: 'Brutal Guarantee',
      steps: {
        step1: {
          title: 'We define goals at kickoff',
          description: 'Ex: 400 MQLs or X meetings/month'
        },
        step2: {
          title: 'We run operation for 90 days',
          description: 'Automation + human SDR working'
        },
        step3: {
          title: 'Didn\'t hit it? Full refund',
          description: 'No fine print. No "it depends"'
        }
      },
      transparency: {
        title: 'Total transparency via dashboard',
        subtitle: 'Track everything in real-time',
        features: [
          'Total transparency via dashboard',
          'Real-time metrics',
          'Weekly reports',
          'Full data access'
        ],
        dashboard: {
          meta: 'Goal: 100 meetings',
          meetings: 'Meetings',
          rate: 'Rate'
        }
      },
      cta: 'Start 90-day test'
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
          badge: 'TO GET STARTED',
          description: 'For those who want to prove it works before scaling.',
          features: [
            'Up to 2 active LinkedIn profiles',
            '2 simultaneous campaigns per profile',
            'Ready templates (5+ industries)',
            'Dashboard with real-time metrics',
            'Integration via webhook',
            'Chat support (response in 24h)',
            '90-day trial'
          ],
          idealFor: 'Founders and small teams testing systematic prospecting',
          proof: 'Payback in the first month. Or full refund.',
          cta: {
            primary: 'Start free trial',
            secondary: 'Talk to specialist'
          }
        },
        growth: {
          name: 'Growth 20%OFF',
          badge: 'BEST VALUE',
          description: 'For teams that want predictable results without depending on paid media.',
          features: [
            'Everything from Starter, plus:',
            'Up to 10 active LinkedIn profiles',
            'Unlimited simultaneous campaigns per profile',
            'Bi-weekly performance review',
            'Automated A/B tests',
            'Weekly executive reports (coming soon)',
            'Priority support (response in 6h)',
            'Guided onboarding'
          ],
          idealFor: 'Commercial operations that need to fill calendar every month',
          proof: 'Agency client: 480k in pipeline, 8 clients, high ticket/month',
          popular: 'Most popular',
          cta: {
            primary: 'Start free trial',
            secondary: 'See cases from my segment'
          }
        },
        scale: {
          name: 'Scale',
          badge: 'CUSTOM SOLUTION',
          description: 'For companies that need a tailor-made solution.',
          customMessage: 'Custom plan',
          freeConsultation: 'Free consultation included',
          features: [
            'Everything from Growth, plus:',
            'Unlimited LinkedIn profiles',
            'Unlimited simultaneous campaigns per profile',
            'Dedicated SDR (exclusive for your operation)',
            'Custom copy by ICP',
            'Curated lists + data enrichment',
            'Advanced playbooks for your segment',
            'Guarantee of X meetings/month (defined at kickoff)',
            'Dedicated Account Manager',
            'VIP Onboarding (3 days + strategic consultation)',
            'Early access to new features'
          ],
          idealFor: 'Companies that want to transform LinkedIn into a predictable revenue engine',
          cta: {
            primary: 'Talk to consultant',
            secondary: 'Schedule strategic meeting'
          },
          trustIndicators: {
            freeConsultation: 'Free consultation',
            fastResponse: 'Response in 2h',
            noCommitment: 'No commitment • No card • No tricks'
          }
        }
      },
      comparison: {
        title: 'Internal SDR vs Prime SDR',
        subtitle: 'See the numbers that make the difference',
        columns: {
          strategy: {
            title: 'Strategy',
            subtitle: 'Fixed expenses'
          },
          internalSdr: {
            title: 'Internal SDR',
            subtitle: 'Traditional method'
          },
          salesNavigator: {
            title: 'Sales Navigator',
            subtitle: 'LinkedIn tool'
          },
          primeSdr: {
            title: 'Prime SDR',
            subtitle: 'Smart method'
          }
        },
        rows: {
          monthlyCost: {
            label: 'Monthly cost',
            internalSdr: 'High cost per person',
            salesNavigator: {
              value: 'Low cost',
              detail: '(~R$ 640)'
            },
            primeSdr: {
              value: 'Significant savings',
              detail: 'with Prime SDR'
            }
          },
          activeProfiles: {
            label: 'Active profiles',
            internalSdr: '1 profile',
            salesNavigator: '1 profile',
            primeSdr: 'Unlimited active profiles'
          },
          setupTime: {
            label: 'Setup time',
            internalSdr: {
              value: '3–6 months',
              detail: 'ramp-up'
            },
            salesNavigator: {
              value: 'Immediate',
              detail: '(but manual)'
            },
            primeSdr: {
              value: '7 days',
              detail: 'active'
            }
          },
          method: {
            label: 'Method',
            internalSdr: 'Depends on discipline',
            salesNavigator: {
              value: '50 msg/month',
              detail: '(LIMIT!)'
            },
            primeSdr: {
              value: 'Automation + intelligence',
              detail: '1,200+ msg/month'
            }
          },
          meetingsPerMonth: {
            label: 'Meetings/month',
            internalSdr: {
              value: '20–30',
              detail: 'if it runs well'
            },
            salesNavigator: {
              value: '5–10',
              detail: '(manual)'
            },
            primeSdr: {
              value: '80–120',
              detail: 'real history'
            }
          },
          availability: {
            label: 'Availability',
            internalSdr: 'Vacations, turnover',
            salesNavigator: {
              value: '24/7',
              detail: 'but without real automation'
            },
            primeSdr: {
              value: '24/7',
              detail: 'uninterrupted'
            }
          },
          dashboard: {
            label: 'Dashboard',
            internalSdr: '❌ No dashboard',
            salesNavigator: '❌ No dashboard',
            primeSdr: '✅ Complete dashboard'
          },
          proprietaryData: {
            label: 'Proprietary data',
            internalSdr: '❌ No proprietary data',
            salesNavigator: '❌ No proprietary data',
            primeSdr: '✅ Proprietary data'
          },
          cadences: {
            label: 'Cadences',
            internalSdr: '❌ Manual cadences ↓',
            salesNavigator: '❌ Manual cadences ↓',
            primeSdr: '✅ Automated cadences'
          }
        },
        result: {
          title: 'Final Result',
          savings: {
            value: 'Significant savings',
            label: 'Monthly savings'
          },
          meetings: {
            value: '3x more',
            label: 'Meetings generated'
          }
        }
      },
      finalCta: {
        question: '"Don\'t know which plan to choose?" Talk to a specialist (2 min)',
        button: 'Talk to specialist'
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
      ],
      timeline: {
        title: 'Expected Result',
        subtitle: 'Performance evolution over time',
        week1to2: {
          title: 'Week 1–2',
          description: 'First responses and meetings'
        },
        week3to6: {
          title: 'Week 3–6',
          description: 'Stable pace (20–30 meetings/month per active profile)'
        },
        month2to3: {
          title: 'Month 2–3',
          description: 'Scale and optimization (25–40 meetings/month in Growth)'
        },
        stats: {
          initial: 'Initial meetings/month',
          stable: 'Stable meetings/month',
          optimized: 'Optimized meetings/month'
        },
        processLabel: 'of process'
      },
      cta: {
        button: 'View demo',
        trust: {
          demo: 'Free demo',
          noCommitment: 'No commitment',
          results: 'Results in 7 days'
        }
      }
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
          answer: 'We serve any business that needs to generate qualified and predictable meetings. The only question you should ask yourself is: is your target audience on LinkedIn?'
        },
        {
          question: 'How long until I see results?',
          answer: 'Responses in the 1st week. Meetings from the 2nd–3rd week. Payback comes in the first month of operation.'
        },
        {
          question: 'What if it doesn\'t work?',
          answer: '90-day test. No ROI (Return on Investment)? Full refund. It\'s that simple.'
        },
        {
          question: 'Do I need Sales Navigator?',
          answer: 'No. Prime SDR goes beyond: in addition to finding decision makers, it automates the entire process, collecting responses, qualifying and scheduling meetings for you.'
        },
        {
          question: 'How many profiles should I connect?',
          answer: 'Minimum 1, ideal 3–6 (depends on team size). The more profiles, the more scale.'
        },
        {
          question: 'Can my LinkedIn be banned?',
          answer: 'No. We respect all limits (30–40 invitations/day, cadence variation, warming). We\'ve been operating for years without a single ban.'
        },
        {
          question: 'What happens if someone complains about spam?',
          answer: 'It rarely happens (rate of 0.1%), but if it does, we pause the campaign and adjust the approach. Also, whenever someone responds even negatively, the cadence is automatically paused.'
        }
      ],
      notFound: 'Didn\'t find your answer?',
      contact: 'Talk to us',
      badge: 'FAQ',
      ctaSection: {
        title: 'Find out if Prime SDR is for you',
        subtitle: '60 seconds to know if your operation can generate 30+ meetings per month on LinkedIn.',
        button: 'Start now'
      }
    },
    finalCta: {
      badge: 'Ready to Get Started?',
      headline: 'Transform your LinkedIn into a meeting engine',
      subtitle: 'See Prime SDR working live in a 15-minute demonstration.',
      demoTitle: 'In the demo, you\'ll see:',
      demoFeatures: [
        {
          title: 'Complete interface in operation',
          description: 'See the real dashboard with live metrics',
          highlight: 'Real-time'
        },
        {
          title: 'How to create a campaign from scratch',
          description: 'Complete setup process step by step',
          highlight: 'Step by step'
        },
        {
          title: 'Examples of converting messages',
          description: 'Tested and optimized templates by segment',
          highlight: 'Proven'
        },
        {
          title: 'Dashboard with real metrics',
          description: 'Real customer data (anonymous)',
          highlight: 'Real data'
        },
        {
          title: 'ROI calculator with your numbers',
          description: 'Personalized projection for your business',
          highlight: 'Personalized'
        }
      ],
      stats: {
        activeProfiles: 'Active profiles',
        meetings45Days: 'Meetings in 45 days',
        acceptanceRate: 'Acceptance rate',
        bans: 'Bans in 2+ years'
      },
      primaryButton: 'Schedule demo (15 min)',
      secondaryButton: 'See success cases',
      guarantees: [
        { text: 'Free demo', highlight: 'No cost' },
        { text: 'No commitment', highlight: 'Flexible' },
        { text: 'Results in 7 days', highlight: 'Fast' },
        { text: '90-day guarantee', highlight: 'Safe' }
      ],
      finalMessage: {
        title: 'From setup to results in just 7 days',
        description: 'Join over 2,000 LinkedIn profiles that have already transformed their prospecting into a predictable and scalable meeting engine.'
      }
    },
    socialProof: {
      header: {
        badge: '✨ Proven Results',
        title: 'Real companies filling their calendars with Prime SDR now.',
        subtitle: 'Over 2,000 active profiles generating meetings every day, from startups to large corporations.'
      },
      metrics: {
        activeProfiles: 'Active profiles generating connections now',
        meetings: 'Meetings scheduled with B2B decision makers',
        roi: 'Clients with positive ROI within 90 days',
        guarantee: 'Full refund guarantee if it doesn\'t generate results'
      },
      logos: {
        badge: '🏆 Success Partners',
        title: 'Companies that trust Prime SDR',
        categories: ['SaaS', 'Consulting', 'Industries', 'Agencies'],
        trustMessage: '+2,000 companies trust Prime SDR'
      },
      guarantee: {
        title: '🛡️ Prime Guarantee: results in 90 days or full refund.',
        subtitle: '📈 Predictable results. Zero risk.',
        cta: 'Talk to an expert'
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
        description: 'We transform LinkedIn into a predictable revenue engine for B2B companies. Smart automation + human SDR = guaranteed results.'
      },
      links: {
        company: 'Company',
        resources: 'Resources',
        legal: 'Legal'
      },
      sections: {
        company: ['About', 'Contact', 'Terms of Use', 'Privacy Policy', 'Cookies'],
        resources: ['Blog', 'Cases', 'Playbooks', 'FAQ'],
        legal: ['Terms of use', 'Privacy policy', 'Cookies', 'LGPD']
      },
      copyright: '© 2024 Prime SDR. All rights reserved.',
      cta: 'Try 90 days risk-free',
      social: 'Social'
    },
    aboutPage: {
      hero: {
        badge: 'Our Story',
        title: 'We got tired of seeing sales stalled due to lack of qualified leads.',
        subtitle: 'Prime SDR was born from a real frustration: talented commercial teams wasting time on manual prospecting while decision makers were just a click away on LinkedIn. We created the solution we wanted to have.'
      },
      story: {
        title: 'Where Prime SDR came from',
        content: {
          paragraph1: 'In 2023, we were working at different B2B companies facing the same problem: empty pipelines, overloaded teams, and expensive dependence on paid media.',
          paragraph2: 'The routine was always the same:',
          list: [
            'Monday morning: "We need more leads"',
            'Wednesday afternoon: "These leads are terrible"',
            'Friday night: "Let\'s increase the ad budget"'
          ],
          paragraph3: 'We tried everything: cold calls (nobody answered), cold email (straight to spam), internal SDRs (high turnover, inconsistent results).',
          highlight1: 'Until we looked at LinkedIn differently.',
          paragraph4: 'Decision makers were there. Active. Posting. Interacting. But accessing them in a scalable and ethical way seemed impossible.',
          paragraph5: 'So we built Prime SDR: an operation that combines smart automation (respecting LinkedIn limits) + human SDR (who steps in when the lead responds) + total transparency (you see everything in real-time).',
          highlight2: 'The first test: 112 meetings in 45 days. R$ 6.3M in pipeline. Payback in 13 days.',
          paragraph6: 'We thought: "If it works for us, it works for every B2B."',
          paragraph7: 'And here we are.'
        }
      },
      mission: {
        title: 'Why we do what we do',
        missionTitle: 'Mission',
        missionDescription: 'Transform LinkedIn into a predictable revenue engine for B2B companies — without depending on luck, without burning budget, and without overloading teams.',
        visionTitle: 'Vision',
        visionDescription: 'To be the leading B2B prospecting platform on LinkedIn in Latin America, known for real results and total transparency.',
        valuesTitle: 'Values',
        values: {
          results: {
            title: 'Results above all',
            description: 'We don\'t sell promises. We deliver qualified meetings or refund your money. Simple as that.'
          },
          transparency: {
            title: 'Radical transparency',
            description: 'You see every metric, every message sent, every response. No black boxes. No "trust me".'
          },
          ethics: {
            title: 'Ethics always',
            description: 'We respect LinkedIn limits, data privacy (LGPD), and never send spam. Sustainable growth, not image burn.'
          },
          partnership: {
            title: 'Real partnership',
            description: 'We\'re not a vendor. We\'re an extension of your commercial team. Your success is our success.'
          },
          innovation: {
            title: 'Constant innovation',
            description: 'Market changes. LinkedIn changes. We adapt. Always testing, always improving.'
          }
        }
      },
      differentiators: {
        title: 'What makes us unique in the market',
        otherTools: 'Other automation tools',
        primeSdr: 'Prime SDR',
        items: {
          automation: { other: 'Generic automation ("send and pray")', prime: 'You set up the strategy, automation executes with precision' },
          support: { other: 'Leaves you alone after sale', prime: 'Human SDR qualifies and schedules meetings for you' },
          guarantee: { other: '"Results may vary" (no guarantee)', prime: '90-day guarantee: didn\'t work? Full refund' },
          dashboard: { other: 'Confusing dashboard, vanity metrics', prime: 'Metrics that matter: meetings, pipeline, CPR' },
          supportGeneric: { other: 'Generic support, chatbot that doesn\'t solve', prime: 'Real support, people responding, real-time adjustments' },
          banRisk: { other: 'Ban risk (don\'t respect limits)', prime: '100% safe: we\'ve been operating for years without a single ban' }
        }
      },
      stats: {
        title: 'Numbers that prove it',
        subtitle: 'Real results from those who use Prime SDR',
        stats: {
          profiles: '+2,000 Active LinkedIn profiles generating connections now',
          meetings: '112 Meetings generated on average per client in the first 45 days',
          acceptanceRate: '39% Average connection acceptance rate (3x above market average)',
          responseRate: '22% Average response rate (engaged leads, not robots)',
          roi: '95% Clients with positive ROI within 90 days',
          bans: '0 LinkedIn bans in 2+ years of operation'
        }
      },
      segments: {
        title: 'Who we serve',
        subtitle: 'B2B companies that trust Prime SDR',
        segments: {
          saas: {
            title: 'SaaS & Tech',
            description: 'Platforms, software, fintechs, HRtechs, marktechs'
          },
          consulting: {
            title: 'Consulting',
            description: 'Strategy, digital transformation, management, HR'
          },
          agencies: {
            title: 'Agencies',
            description: 'Marketing, performance, branding, development'
          },
          industry: {
            title: 'Industry',
            description: 'B2B suppliers, equipment, industrial solutions'
          },
          education: {
            title: 'Corporate education',
            description: 'Training, upskilling, leadership development'
          },
          services: {
            title: 'Professional services',
            description: 'Legal, accounting, auditing, facilities'
          }
        }
      },
      commitments: {
        title: 'Our commitments',
        subtitle: 'Guarantees you can enforce',
        commitments: {
          transparency: {
            title: 'Total transparency',
            description: 'You track everything: messages sent, acceptance rates, responses, meetings. Dashboard updated in real-time.'
          },
          lgpd: {
            title: 'LGPD compliance',
            description: 'We treat personal data responsibly. Clear privacy policy, no fine print.'
          },
          security: {
            title: 'LinkedIn security',
            description: 'We respect all limits (30-40 invitations/day), vary cadences, warm profiles. Zero ban risk.'
          },
          support: {
            title: 'Real support',
            description: 'Real people responding, adjusting campaigns, optimizing results. Not a chatbot, it\'s a partnership.'
          },
          guarantee: {
            title: '90-day guarantee',
            description: 'Didn\'t generate qualified meetings? Full refund. No bureaucracy, no excuses.'
          }
        }
      },
      location: {
        title: 'Where we are',
        company: 'Prime SDR',
        cnpj: 'CNPJ: 60.782.822/0001-01',
        city: 'São Paulo, Brazil',
        region: 'All Brazil, America and Europe (100% remote operation)',
        schedule: 'Monday to Friday, 9am–6pm (São Paulo)',
        email: 'contato@primesdr.com',
        phone: '+55 11 93200-1771 (WhatsApp)',
        website: 'https://primesdr.com'
      },
      cta: {
        title: 'Ready to fill your calendar?',
        subtitle: 'Over 2,000 profiles are already generating meetings with Prime SDR. Test 90 days risk-free.',
        primaryButton: 'Schedule demo (15 min)',
        secondaryButton: 'See success cases'
      }
    },
    contactPage: {
      hero: {
        badge: 'Talk to experts',
        title: 'Ready to fill your meeting calendar?',
        subtitle: 'Talk to our experts and discover how to generate 30+ qualified meetings per month on LinkedIn.'
      },
      methods: {
        title: 'Choose how you prefer to talk',
        subtitle: 'Our team is ready to help you transform LinkedIn into your main lead source.',
        email: {
          title: 'Email',
          description: 'Response within 24 hours',
          action: 'Send email'
        },
        whatsapp: {
          title: 'WhatsApp',
          description: 'Talk directly with expert',
          action: 'Call on WhatsApp'
        },
        call: {
          title: 'Schedule Call',
          description: '15-minute meeting',
          action: 'Schedule now'
        }
      },
      form: {
        title: 'Or fill out the form',
        subtitle: 'Tell us about your business and goals. We\'ll get back to you within 2 hours.',
        fields: {
          name: 'Full name *',
          email: 'Email *',
          phone: 'WhatsApp *',
          company: 'Company *',
          role: 'Your role',
          budget: 'Monthly budget',
          message: 'Tell us about your business and goals'
        },
        roleOptions: {
          select: 'Select your role',
          ceo: 'CEO/Founder',
          cmo: 'CMO',
          sales: 'Sales Director',
          marketing: 'Marketing Director',
          commercial: 'Commercial Director',
          other: 'Other'
        },
        budgetOptions: {
          select: 'Select your budget',
          range1: 'R$ 0 - R$ 5k',
          range2: 'R$ 5k - R$ 10k',
          range3: 'R$ 10k - R$ 20k',
          range4: 'R$ 20k - R$ 50k',
          range5: 'R$ 50k+'
        },
        messagePlaceholder: 'Ex: We are a digital marketing agency with 15 employees. We want to generate more qualified leads for our clients...',
        submit: 'Send message',
        submitting: 'Sending...'
      },
      benefits: {
        title: 'Why talk to us?',
        specialists: {
          title: 'Dedicated specialists',
          description: 'Team with +5 years of experience in B2B prospecting'
        },
        fast: {
          title: 'Fast response',
          description: 'Support in up to 2 minutes via whatsapp'
        },
        noCommitment: {
          title: 'No commitment',
          description: 'Free initial conversation with no pressure'
        }
      },
      contactInfo: {
        title: 'Contact information',
        email: 'contato@primesdr.com',
        phone: '+55 (11) 94502-2847',
        address: 'São Paulo, SP - Brazil',
        schedule: 'Mon - Fri: 9am to 6pm',
        socialMedia: 'Follow us on social media:'
      },
      success: {
        title: 'Message sent successfully!',
        message: 'Our team will contact you within 2 hours. Meanwhile, how about getting to know our success cases?',
        primaryButton: 'See success cases',
        secondaryButton: 'Back to home'
      }
    },
    thankYouScreen: {
      title: 'Thanks for signing up! 🎉',
      message: 'Now let\'s schedule a strategic conversation to better understand your needs.',
      calendar: {
        title: 'Choose the best time for you:',
        subtitle: '45-minute meeting • No commitment • Guaranteed results'
      },
      whatsapp: {
        label: 'Prefer to talk on WhatsApp?',
        button: 'Chat on WhatsApp'
      }
    },
    termsOfUsePage: {
      hero: {
        badge: 'Terms and Conditions',
        title: 'Terms of Use',
        subtitle: 'Learn about the conditions and rules for using our LinkedIn prospecting automation platform.',
        lastUpdate: 'Last updated: October 13, 2025'
      }
    },
    cookiesPolicyPage: {
      hero: {
        badge: 'Cookie Policy',
        title: 'Cookie Policy',
        subtitle: 'Learn how we use cookies and similar technologies to improve your browsing experience.',
        lastUpdate: 'Last updated: October 13, 2025'
      }
    },
    comingSoon: {
      title: 'Coming soon!',
      message1: 'We\'re preparing the best possible content for you.',
      message2: 'Our team is working hard to deliver an exceptional experience with real value and practical results.',
      availableSoon: 'will be available soon!',
      button: 'Got it, thanks!',
      footer: 'You\'ll be notified as soon as it\'s available ✨'
    },
    resourcesPage: {
      hero: {
        badge: 'Free Resources',
        title: 'Learn to master B2B prospecting on LinkedIn',
        subtitle: 'Free tools, tested playbooks, ready templates and real cases. Everything you need to fill your calendar with qualified meetings.',
        searchPlaceholder: 'Search resources... ex: "message sequence", "conversion rate"'
      },
      stats: {
        totalDownloads: 'Total downloads',
        playbookPages: 'Playbook pages',
        freeResources: 'Free resources',
        availableAccess: 'Available access'
      },
      filters: {
        all: 'All',
        tools: 'Tools',
        guides: 'Guides',
        videos: 'Videos',
        cases: 'Cases'
      },
      resourceTypes: {
        all: 'All Resources',
        tools: 'Free Tools',
        guides: 'Guides & Playbooks',
        videos: 'Webinars & Videos',
        cases: 'Success Cases'
      },
      noResults: {
        title: 'No resources found',
        message: 'Try adjusting your search or filters to find what you\'re looking for.'
      },
      finalCta: {
        title: 'Ready to put it into practice?',
        subtitle: 'You have the knowledge. Now you need execution. Prime SDR does it for you.',
        primaryCta: 'Schedule demo (15 min)',
        secondaryCta: 'Try 90 days risk-free'
      },
      badges: {
        free: 'FREE',
        new: 'NEW',
        mostDownloaded: 'MOST DOWNLOADED',
        webinar: 'WEBINAR',
        caseReal: 'REAL CASE',
        highlight: 'FEATURED',
        case: 'CASE'
      }
    },
    contactModal: {
      title: 'Let\'s schedule a strategic conversation',
      subtitle: 'Fill in your details and choose the best time for you',
      form: {
        heading: 'Almost there! Where can we reach you?',
        description: 'Fill in your details to schedule a strategic conversation',
        name: 'Full name',
        email: 'Corporate email',
        phone: 'Phone',
        company: 'Company',
        role: 'Role',
        linkedin: 'LinkedIn (optional)',
        linkedinPlaceholder: 'https://linkedin.com/in/your-profile',
        submit: 'Schedule conversation',
        submitting: 'Scheduling...',
        country: 'Country',
        selectCountry: 'Select country'
      },
      validation: {
        nameRequired: 'Name is required',
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email',
        phoneRequired: 'Phone is required',
        linkedinInvalid: 'Invalid LinkedIn URL'
      }
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







