# 📋 Guia de Configuração - Integração RD Station Marketing

Este guia explica como configurar a integração do site com o RD Station Marketing para que todos os leads sejam enviados automaticamente para sua conta.

## ✅ O que foi implementado

A integração foi configurada para enviar leads automaticamente de **todos os formulários** do site:

1. **ContactModal** - Modal de contato principal
2. **TypeformModal** - Formulário tipo quiz (Fit Score)
3. **ResourceFormModal** - Formulário para acesso a recursos/materiais
4. **ContactForm** - Formulário de contato simples
5. **ContactPage** - Página de contato completa

### Script de Tracking do RD Station

O script de loader do RD Station foi adicionado ao layout principal do site (`app/layout.tsx`), garantindo que ele seja carregado em todas as páginas. O script está configurado para carregar após a página estar interativa, otimizando a performance.

## 🔧 Configuração Necessária

### Passo 1: Obter o Token Público do RD Station

1. Acesse sua conta no **RD Station Marketing**
2. Vá em **Configurações** (ícone de engrenagem no canto superior direito)
3. No menu lateral, clique em **Integrações**
4. Procure por **API** ou **API REST**
5. Você verá o **Token Público** (Public Token)
6. Copie esse token

**Exemplo de onde encontrar:**
```
RD Station > Configurações > Integrações > API > Token Público
```

### Passo 2: Obter o Identificador do Formulário (Opcional mas Recomendado)

O identificador do formulário ajuda a rastrear de qual formulário veio cada lead:

1. No RD Station, vá em **Marketing** > **Formulários**
2. Selecione ou crie um formulário
3. Nas configurações do formulário, procure por **Identificador** ou **Form Identifier**
4. Copie o identificador

**Nota:** Se você não tiver um identificador específico, pode deixar em branco. O sistema funcionará normalmente, mas será mais difícil rastrear a origem dos leads.

### Passo 3: Configurar as Variáveis de Ambiente

1. No seu projeto, localize o arquivo `.env.local` (ou crie um se não existir)
2. Adicione as seguintes variáveis:

```env
# RD Station Marketing
RD_STATION_PUBLIC_TOKEN=seu_token_publico_aqui
RD_STATION_FORM_IDENTIFIER=identificador_do_formulario
```

**Exemplo:**
```env
RD_STATION_PUBLIC_TOKEN=abc123xyz789
RD_STATION_FORM_IDENTIFIER=formulario-site-primesdr
```

### Passo 4: Configurar no Vercel (Produção)

Se você usa Vercel para hospedar o site:

1. Acesse o painel do Vercel
2. Vá em **Settings** > **Environment Variables**
3. Adicione as variáveis:
   - `RD_STATION_PUBLIC_TOKEN` = seu token público
   - `RD_STATION_FORM_IDENTIFIER` = identificador do formulário (opcional)
4. Selecione os ambientes (Production, Preview, Development)
5. Clique em **Save**
6. Faça um novo deploy para aplicar as mudanças

## 📊 Como Funciona

### Fluxo de Dados

1. **Usuário preenche o formulário** no site
2. **Dados são enviados** para a API interna (`/api/rd-station/lead`)
3. **API processa e formata** os dados para o padrão do RD Station
4. **Lead é enviado** para o RD Station via API REST
5. **Lead aparece** automaticamente no RD Station Marketing

### Campos Enviados

Os seguintes campos são enviados para o RD Station:

- ✅ **Email** (obrigatório)
- ✅ **Nome** (quando disponível)
- ✅ **Telefone** (quando disponível)
- ✅ **Empresa** (quando disponível)
- ✅ **Cargo** (quando disponível)
- ✅ **LinkedIn** (quando disponível)
- ✅ **Tags** (automáticas baseadas no formulário)
- ✅ **Campos customizados:**
  - `cf_origem`: "Site Prime SDR"
  - `cf_formulario`: Identificador do formulário
  - `cf_fonte`: Tipo do formulário (ContactModal, TypeformModal, etc.)

### Tags Automáticas

Cada formulário adiciona tags específicas:

- **ContactModal**: `['contato', 'modal', 'site']`
- **TypeformModal**: `['quiz', 'fit-score', 'site', 'fit-score-alto/medio/baixo']`
- **ResourceFormModal**: `['recurso', 'material', 'download', 'ID_DO_RECURSO']`
- **ContactForm**: `['contato', 'pagina-contato', 'site']`
- **ContactPage**: `['contato', 'pagina-contato', 'site']`

## 🧪 Testando a Integração

### Teste Local

1. Configure as variáveis de ambiente no `.env.local`
2. Inicie o servidor de desenvolvimento: `npm run dev`
3. Preencha um formulário no site
4. Verifique no console do navegador se não há erros
5. Verifique no RD Station se o lead foi criado

### Teste em Produção

1. Configure as variáveis no Vercel
2. Faça um novo deploy
3. Preencha um formulário no site em produção
4. Verifique no RD Station se o lead foi criado

## 🔍 Troubleshooting

### Leads não estão aparecendo no RD Station

1. **Verifique as variáveis de ambiente:**
   - Confirme que `RD_STATION_PUBLIC_TOKEN` está configurado corretamente
   - Verifique se não há espaços extras no token

2. **Verifique os logs:**
   - Abra o console do navegador (F12)
   - Procure por erros relacionados ao RD Station
   - Verifique os logs do servidor (se tiver acesso)

3. **Valide o token:**
   - Confirme que o token público está correto no RD Station
   - Verifique se o token não expirou

4. **Verifique o formato do email:**
   - O RD Station requer um email válido
   - Verifique se o campo de email está sendo preenchido corretamente

### Erro: "RD Station Public Token não configurado"

- Verifique se a variável `RD_STATION_PUBLIC_TOKEN` está no `.env.local` (local) ou no Vercel (produção)
- Reinicie o servidor após adicionar variáveis de ambiente

### Leads duplicados

- O RD Station normalmente evita duplicatas pelo email
- Se houver duplicatas, verifique se há múltiplos formulários enviando o mesmo lead

## 📚 Documentação Adicional

- [Documentação oficial da API do RD Station](https://developers.rdstation.com/pt-BR/reference/post_platform_contacts)
- [Como criar formulários no RD Station](https://help.rdstation.com/pt-BR/articles/147915-como-criar-um-formulario)

## 🎯 Próximos Passos

Após configurar:

1. ✅ Teste todos os formulários
2. ✅ Configure automações no RD Station para os novos leads
3. ✅ Configure sequências de email marketing
4. ✅ Configure segmentações baseadas nas tags
5. ✅ Configure relatórios para acompanhar a origem dos leads

## 💡 Dicas

- **Use tags** para segmentar leads por tipo de formulário
- **Configure automações** no RD Station para qualificar leads automaticamente
- **Use campos customizados** (`cf_origem`, `cf_formulario`, `cf_fonte`) para criar relatórios detalhados
- **Monitore regularmente** se os leads estão chegando corretamente

---

**Pronto!** Agora todos os leads do site serão enviados automaticamente para o RD Station Marketing! 🚀
