# Sistema de Gerenciamento de Cookies - Prime SDR

## Visão Geral

Este sistema implementa um gerenciamento completo de cookies e consentimento em conformidade com a LGPD, incluindo:

- Banner de consentimento impactante e responsivo
- Gerenciamento granular de categorias de cookies
- Integração com Google Tag Manager e Consent Mode v2
- Suporte a múltiplos pixels de tracking
- Hook personalizado para facilitar o uso

## Componentes Principais

### 1. CookieConsentContext (`lib/contexts/CookieConsentContext.tsx`)
Contexto React que gerencia o estado global de consentimento de cookies.

**Funcionalidades:**
- Armazenamento persistente no localStorage
- Aplicação automática do consentimento ao GTM
- Gerenciamento de versões de consentimento
- Funções para aceitar/rejeitar/personalizar cookies

### 2. CookieBanner (`components/CookieBanner.tsx`)
Banner impactante que aparece na primeira visita ao site.

**Características:**
- Design responsivo e moderno
- Opções de aceitar todos, rejeitar ou personalizar
- Configurações granulares por categoria
- Links para política de cookies e privacidade

### 3. CookieManager (`components/CookieManager.tsx`)
Interface para gerenciar preferências de cookies após o consentimento inicial.

**Funcionalidades:**
- Visualização do status atual
- Alteração de preferências por categoria
- Botões para salvar ou restaurar configurações
- Opção para mostrar o banner novamente

### 4. TrackingPixels (`components/TrackingPixels.tsx`)
Componente que carrega pixels de tracking condicionalmente baseado no consentimento.

**Pixels suportados:**
- Meta Pixel (Facebook/Instagram)
- LinkedIn Insight Tag
- TikTok Pixel
- Microsoft Clarity
- Hotjar
- Intercom
- Crisp Chat

### 5. useCookieTracking (`lib/hooks/useCookieTracking.ts`)
Hook personalizado para facilitar o tracking de eventos respeitando o consentimento.

**Funções disponíveis:**
- `trackCTAClick()` - Rastrear cliques em CTAs
- `trackPageView()` - Rastrear visualizações de página
- `trackScroll()` - Rastrear scroll
- `trackTimeOnPage()` - Rastrear tempo na página
- `trackWhatsAppClick()` - Rastrear cliques no WhatsApp
- `trackScheduleCall()` - Rastrear agendamentos
- `trackFormStart()` / `trackFormSubmit()` - Rastrear formulários
- E muitas outras...

## Como Usar

### 1. Configuração Básica

O sistema já está integrado no `app/layout.tsx`. Certifique-se de que as variáveis de ambiente estão configuradas:

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-N7FSD6VV

# Pixels de Marketing
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
NEXT_PUBLIC_LINKEDIN_INSIGHT_ID=1234567
NEXT_PUBLIC_TIKTOK_PIXEL_ID=1234567890123456789

# Analytics
NEXT_PUBLIC_CLARITY_ID=1234567890
NEXT_PUBLIC_HOTJAR_ID=1234567

# Chat/Support
NEXT_PUBLIC_INTERCOM_APP_ID=1234567
NEXT_PUBLIC_CRISP_WEBSITE_ID=12345678-1234-1234-1234-123456789012
```

### 2. Usando o Hook de Tracking

```tsx
import { useCookieTracking } from '@/lib/hooks/useCookieTracking';

function MeuComponente() {
  const { trackCTAClick, isAllowed } = useCookieTracking();

  const handleButtonClick = () => {
    // Só rastreia se analytics estiver permitido
    trackCTAClick('botao-principal', 'homepage', 100);
  };

  return (
    <button onClick={handleButtonClick}>
      Clique Aqui
    </button>
  );
}
```

### 3. Verificando Consentimento

```tsx
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

function MeuComponente() {
  const { consent, showBanner } = useCookieConsent();

  if (!consent?.analytics) {
    return <div>Analytics não permitido</div>;
  }

  return <div>Analytics ativo</div>;
}
```

### 4. Gerenciando Cookies

O usuário pode gerenciar cookies através de:
- Banner inicial (primeira visita)
- Página `/cookies` (CookieManager)
- Configurações do navegador

## Categorias de Cookies

### 1. Essenciais (Sempre Ativos)
- Sessão de login
- Segurança
- Preferências básicas
- **Base Legal:** Legítimo interesse (LGPD Art. 7º, IX)

### 2. Analytics (Consentimento)
- Google Analytics
- Microsoft Clarity
- Hotjar
- **Base Legal:** Consentimento (LGPD Art. 7º, I)

### 3. Marketing (Consentimento)
- Meta Pixel
- Google Ads
- LinkedIn Insight
- TikTok Pixel
- **Base Legal:** Consentimento (LGPD Art. 7º, I)

### 4. Funcionais (Consentimento)
- Chat de suporte
- Preferências personalizadas
- **Base Legal:** Consentimento (LGPD Art. 7º, I)

## Integração com GTM

O sistema envia automaticamente eventos de consentimento para o GTM:

```javascript
window.dataLayer.push({
  event: 'consent_update',
  ad_storage: 'granted' | 'denied',
  analytics_storage: 'granted' | 'denied',
  functionality_storage: 'granted' | 'denied',
  personalization_storage: 'granted' | 'denied',
  security_storage: 'granted', // Sempre concedido
  cookie_consent: {
    necessary: true,
    analytics: boolean,
    marketing: boolean,
    functional: boolean
  }
});
```

## Eventos de Tracking

### Eventos Automáticos
- `consent_update` - Quando consentimento é alterado
- `page_view` - Visualização de página
- `scroll` - Scroll (25%, 50%, 75%)
- `time_on_page` - Tempo na página

### Eventos Manuais
- `cta_click` - Cliques em CTAs
- `form_start` / `form_submit` - Formulários
- `whatsapp_click` - Cliques no WhatsApp
- `schedule_call` - Agendamentos
- `external_link_click` - Links externos
- `file_download` - Downloads
- `video_interaction` - Interações com vídeo
- `search` - Buscas

## Conformidade LGPD

### Bases Legais
- **Consentimento:** Cookies de analytics, marketing e funcionais
- **Legítimo Interesse:** Cookies essenciais
- **Execução de Contrato:** Dados necessários para prestação do serviço

### Direitos dos Usuários
- Confirmar existência de tratamento
- Acessar dados
- Corrigir dados incorretos
- Anonimizar/bloquear/eliminar dados
- Portabilidade de dados
- Eliminação de dados tratados com consentimento
- Informação sobre compartilhamento
- Revogação de consentimento

### Contato para Exercer Direitos
- **Email:** contato@primesdr.com
- **Telefone:** +55 11 94502-2847

## Manutenção

### Adicionando Novos Pixels
1. Adicione a variável de ambiente no `env.example`
2. Adicione o pixel no `TrackingPixels.tsx`
3. Atualize a política de cookies
4. Teste o carregamento condicional

### Atualizando Políticas
1. Atualize `CookiesPolicyPage.tsx`
2. Atualize `PrivacyPolicyPage.tsx`
3. Incremente a versão no `CookieConsentContext.tsx`
4. Teste o banner de consentimento

### Monitoramento
- Verifique logs do GTM para eventos de consentimento
- Monitore taxa de aceitação de cookies
- Acompanhe conformidade com LGPD

## Troubleshooting

### Banner não aparece
- Verifique se `CookieConsentProvider` está no layout
- Confirme se não há consentimento salvo no localStorage
- Verifique console para erros

### Pixels não carregam
- Confirme variáveis de ambiente
- Verifique se consentimento foi dado
- Teste carregamento manual dos scripts

### Eventos não são enviados
- Verifique se GTM está configurado
- Confirme se `dataLayer` existe
- Teste eventos manualmente no console

## Exemplo Completo

```tsx
'use client';

import { useCookieTracking } from '@/lib/hooks/useCookieTracking';
import { useCookieConsent } from '@/lib/contexts/CookieConsentContext';

export function ExemploCompleto() {
  const { consent, showConsentBanner } = useCookieConsent();
  const { trackCTAClick, trackWhatsAppClick, isAllowed } = useCookieTracking();

  const handleCTAClick = () => {
    trackCTAClick('exemplo-cta', 'homepage', 50);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('homepage', '+5511945022847');
  };

  return (
    <div>
      <h1>Exemplo de Uso</h1>
      
      <button onClick={handleCTAClick}>
        CTA Principal
      </button>
      
      <button onClick={handleWhatsAppClick}>
        WhatsApp
      </button>
      
      {!consent && (
        <button onClick={showConsentBanner}>
          Mostrar Banner de Cookies
        </button>
      )}
      
      <div>
        Analytics: {isAllowed('analytics') ? 'Ativo' : 'Inativo'}
      </div>
    </div>
  );
}
```

Este sistema garante total conformidade com a LGPD e oferece uma experiência de usuário moderna e transparente para o gerenciamento de cookies.