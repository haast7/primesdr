# Prime SDR - Site Moderno

Site moderno e responsivo para o SaaS Prime SDR, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🚀 Características

- **Design Moderno**: Interface limpa e impactante com animações suaves
- **Performance Otimizada**: Core Web Vitals otimizados, lazy loading e imagens otimizadas
- **SEO Completo**: Metadata, sitemap, robots.txt e JSON-LD schemas
- **Responsivo**: Mobile-first design com breakpoints otimizados
- **Acessibilidade**: WCAG 2.1 AA compliant
- **Tracking**: GTM, GA4 e Meta Pixel configurados
- **Multi-idioma**: Suporte a PT, ES e EN com seletor visual

## 🛠️ Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **SEO**: Metadata API, JSON-LD
- **Analytics**: Google Tag Manager, GA4, Meta Pixel

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd prime-sdr
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://primesdr.com
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=1234567890123456
```

4. Execute o projeto em desenvolvimento:
```bash
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## 🏗️ Estrutura do Projeto

```
├── app/                    # App Router (Next.js 14)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap
├── components/            # Componentes React
│   ├── ui/               # Componentes base (Button, Card, etc.)
│   ├── sections/         # Seções da página (Hero, Pricing, etc.)
│   ├── Header.tsx        # Cabeçalho com navegação
│   ├── Footer.tsx        # Rodapé
│   └── Analytics.tsx     # Configuração de analytics
├── lib/                  # Utilitários
│   └── utils.ts          # Funções auxiliares
├── public/               # Arquivos estáticos
│   ├── logoazul.png      # Logo principal
│   ├── logocompletabranca.png
│   ├── logocompletapreta.png
│   └── faviconazul.png
└── styles/               # Configurações de estilo
    └── tailwind.config.js
```

## 🎨 Design System

### Cores
- **Primary**: Azul escuro (#2563eb)
- **Dark**: Grafite próximo ao preto (#0f172a)
- **Accent**: Azul claro (#0ea5e9)
- **White**: Branco para contraste

### Tipografia
- **Font**: Inter (Google Fonts)
- **Hero**: clamp(2.5rem, 5vw, 4rem)
- **Display**: clamp(2rem, 4vw, 3rem)
- **Body**: clamp(1rem, 0.4vw + 0.9rem, 1.125rem)

### Componentes
- **Button**: Variações primary, secondary, ghost, outline
- **Card**: Com hover effects e shadows
- **Container**: Responsivo com max-width
- **Section**: Com padding e background options

## 📱 Responsividade

O site é desenvolvido com abordagem mobile-first:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

Breakpoints otimizados para cada seção com `clamp()` para tipografia fluida.

## 🔍 SEO

### Implementado
- ✅ Metadata dinâmico por página
- ✅ Open Graph e Twitter Cards
- ✅ JSON-LD schemas (Organization, Service, FAQ)
- ✅ Sitemap.xml automático
- ✅ Robots.txt
- ✅ URLs limpas e semânticas
- ✅ Alt text em todas as imagens
- ✅ Estrutura de headings correta

### Core Web Vitals
- **LCP**: < 2.5s (Large Contentful Paint)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **INP**: < 200ms (Interaction to Next Paint)

## 📊 Analytics

### Google Tag Manager
- Configurado com Consent Mode v2
- Eventos personalizados para CTAs
- Tracking de conversões

### Eventos Implementados
- `cta_click`: Cliques em botões de ação
- `lead`: Submissão de formulários
- `conversion`: Conversões de vendas

## 🌍 Multi-idioma

Suporte a 3 idiomas:
- **PT-BR**: Português (Brasil) - Padrão
- **ES-ES**: Español (España)
- **EN-US**: English (United States)

Seletor visual no header com bandeiras e nomes nativos.

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte o repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outros Provedores
O projeto é compatível com qualquer provedor que suporte Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance

### Otimizações Implementadas
- **Imagens**: next/image com WebP/AVIF
- **Fonts**: Google Fonts com display: swap
- **Code Splitting**: Lazy loading de componentes
- **Bundle**: Análise e otimização do tamanho
- **Caching**: Headers otimizados para CDN

### Métricas Alvo
- **Lighthouse Score**: > 95 em todas as categorias
- **Bundle Size**: < 250KB inicial
- **First Load**: < 2s em 3G

## 🧪 Testes

```bash
# Linting
npm run lint

# Type checking
npm run type-check

# Build
npm run build
```

## 📝 Scripts Disponíveis

```bash
npm run dev          # Desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # ESLint
npm run format       # Prettier
npm run type-check   # TypeScript check
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre implementação:
- Email: dev@primesdr.com
- LinkedIn: [Prime SDR](https://linkedin.com/company/prime-sdr)

---

Desenvolvido com ❤️ para Prime SDR



