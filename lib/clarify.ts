/**
 * Integração com Clarify API (clarify.ai)
 *
 * Segue API.CLARIFY. Fluxo site: criar Company (por domínio), Person, Deal (etapa Lead, owner Everton Yahu, etiqueta Site).
 *
 * Variáveis de ambiente:
 * - CLARIFY_API_KEY — header "Authorization: api-key SUA_CHAVE"
 * - CLARIFY_WORKSPACE_SLUG (ou CLARIFY_API_URL para só person)
 * - CLARIFY_DEAL_OWNER_ID — ID do user "Everton Yahu" (obter em GET /objects/user/resources)
 */

const CLARIFY_API_BASE = 'https://api.clarify.ai';

export interface ClarifyLeadData {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  role?: string;
  linkedin?: string;
  /** Domínio da empresa (opcional; se omitido, usa domínio do email) */
  domain?: string;

  source?: string;
  formIdentifier?: string;
  tags?: string[];
  [key: string]: any;
}

export interface ClarifyResponse {
  success: boolean;
  external_id?: string;
  error?: string;
  message?: string;
  statusCode?: number;
}

function getWorkspaceSlug(): string | null {
  const slug = (process.env.CLARIFY_WORKSPACE_SLUG || process.env.CLARIFY_WORKSPACE_ID || '').trim();
  return slug || null;
}

function getClarifyRecordsUrl(object: string): string | null {
  const fullUrl = process.env.CLARIFY_API_URL;
  if (fullUrl && fullUrl.trim() !== '' && object === 'person') {
    return fullUrl.trim();
  }
  const slug = getWorkspaceSlug();
  if (!slug) return null;
  return `${CLARIFY_API_BASE}/v1/workspaces/${slug}/objects/${object}/records`;
}

function buildPersonAttributes(leadData: ClarifyLeadData): Record<string, unknown> {
  const descriptionParts: string[] = [];
  if (leadData.source) descriptionParts.push(`Fonte: ${leadData.source}`);
  if (leadData.formIdentifier) descriptionParts.push(`Formulário: ${leadData.formIdentifier}`);
  if (leadData.company) descriptionParts.push(`Empresa: ${leadData.company}`);
  if (leadData.tags?.length) descriptionParts.push(`Tags: ${leadData.tags.join(', ')}`);
  const fullName = (leadData.name || '').trim();
  const [firstName, ...rest] = fullName.split(/\s+/).filter(Boolean);
  const lastName = rest.join(' ') || '';
  const attributes: Record<string, unknown> = {
    ...(fullName && { name: { first_name: firstName || fullName, last_name: lastName } }),
    ...(leadData.email && { email_addresses: { items: [leadData.email] } }),
    ...(leadData.phone && { phone_numbers: { items: [leadData.phone] } }),
    ...(leadData.role && { job_title: leadData.role }),
    ...(leadData.linkedin && { linkedin: leadData.linkedin }),
    ...(descriptionParts.length > 0 && { description: descriptionParts.join(' | ') }),
  };
  const clean: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(attributes)) {
    if (v !== undefined && v !== '' && (Array.isArray(v) ? v.length > 0 : true)) clean[k] = v;
  }
  return clean;
}

/**
 * Envia um lead para a Clarify: Person + (opcional) Company + Deal em etapa Lead, owner Everton Yahu, etiqueta Site.
 * Se CLARIFY_DEAL_OWNER_ID e CLARIFY_WORKSPACE_SLUG estiverem configurados, cria também Company (por domínio) e Deal.
 */
export async function sendLeadToClarify(leadData: ClarifyLeadData): Promise<ClarifyResponse> {
  const apiKey = process.env.CLARIFY_API_KEY?.trim();
  if (!apiKey) {
    console.error('Clarify: CLARIFY_API_KEY não configurada');
    return { success: false, error: 'CLARIFY_API_KEY não configurada', message: 'Defina CLARIFY_API_KEY no .env.local' };
  }

  const slug = getWorkspaceSlug();
  const personUrl = getClarifyRecordsUrl('person');
  if (!personUrl) {
    console.error('Clarify: configure CLARIFY_API_URL ou CLARIFY_WORKSPACE_SLUG');
    return { success: false, error: 'Endpoint Clarify não configurado', message: 'Defina CLARIFY_API_URL ou CLARIFY_WORKSPACE_SLUG' };
  }

  const runDealFlow = slug && process.env.CLARIFY_DEAL_OWNER_ID?.trim();
  const domain = leadData.domain || (leadData.email?.includes('@') ? leadData.email.split('@')[1] : undefined);

  try {
    // 1) Company (unique: domains) — API.CLARIFY
    let companyId: string | null = null;
    if (runDealFlow && domain && leadData.company) {
      const companyPayload = {
        data: {
          type: 'company',
          attributes: {
            name: leadData.company,
            domains: { items: [domain] },
          },
        },
      };
      const companyRes = await fetch(`${CLARIFY_API_BASE}/v1/workspaces/${slug}/objects/company/records`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `api-key ${apiKey}` },
        body: JSON.stringify(companyPayload),
      });
      const companyData = companyRes.ok && await companyRes.json().catch(() => null);
      if (companyData?.data?.id) companyId = companyData.data.id;
      if (!companyRes.ok) {
        const companyText = await companyRes.text();
        let companyErr: any;
        try { companyErr = companyText ? JSON.parse(companyText) : {}; } catch { companyErr = {}; }
        console.warn('Clarify - Company create warning:', companyRes.status, JSON.stringify(companyErr?.errors || companyErr, null, 2));
      }
    }

    // 2) Person — buscar por email (evitar 400 Duplicate) ou criar
    const personAttrs = buildPersonAttributes(leadData);
    if (!personAttrs.email_addresses) {
      console.error('Clarify - Person exige email_addresses');
      return { success: false, statusCode: 400, error: 'Dados inválidos', message: 'Email é obrigatório' };
    }
    const email = leadData.email.trim();
    let personId: string | null = null;

    if (slug) {
      const filterUrl = `${CLARIFY_API_BASE}/v1/workspaces/${slug}/objects/person/resources?filter[email_addresses][Contains]=${encodeURIComponent(email)}&page[limit]=1`;
      const getRes = await fetch(filterUrl, {
        method: 'GET',
        headers: { Authorization: `api-key ${apiKey}` },
      });
      const getData = getRes.ok ? await getRes.json().catch(() => null) : null;
      const existing = getData?.data?.length ? getData.data[0] : null;
      if (existing?.id) {
        personId = existing.id;
        const patchUrl = `${CLARIFY_API_BASE}/v1/workspaces/${slug}/objects/person/records/${personId}`;
        const patchPayload = { data: { type: 'person', id: personId, attributes: personAttrs } };
        const patchRes = await fetch(patchUrl, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json', Authorization: `api-key ${apiKey}` },
          body: JSON.stringify(patchPayload),
        });
        if (!patchRes.ok) console.warn('Clarify - Person update warning:', patchRes.status, await patchRes.text());
      }
    }

    if (!personId) {
      const personPayload = { data: { type: 'person', attributes: personAttrs } };
      console.log('Clarify - Person payload:', JSON.stringify(personPayload, null, 2));
      const personRes = await fetch(personUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `api-key ${apiKey}` },
        body: JSON.stringify(personPayload),
      });
      const personText = await personRes.text();
      let personData: any;
      try {
        personData = personText ? JSON.parse(personText) : {};
      } catch {
        personData = {};
      }
      if (!personRes.ok) {
        const firstError = Array.isArray(personData?.errors) ? personData.errors[0] : undefined;
        const msg = firstError?.detail || personData?.message || personText;
        console.error('Clarify - Person create falhou:', personRes.status, JSON.stringify(personData?.errors || personData, null, 2));
        return {
          success: false,
          statusCode: personRes.status,
          error: 'Clarify API Error',
          message: msg,
        };
      }
      personId = personData?.data?.id || null;
    }

    if (!personId) {
      return { success: true, statusCode: 200, external_id: undefined, message: 'Person enviado (id não retornado)' };
    }

    // Deal é criado pelo workflow no Clarify (gatilho: "Quando uma pessoa é criada ou atualizada" + filtro Criado por = Erick Haast).
    // Assim lead novo (POST) e lead repetido (PATCH) disparam o workflow e geram um Deal cada um, sem duplicar por nossa API.

    return {
      success: true,
      statusCode: 200,
      external_id: personId,
      message: 'Lead enviado para a Clarify; o workflow criará o Deal (pessoa nova ou atualizada).',
    };
  } catch (error) {
    console.error('Erro ao enviar lead para a Clarify:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      message: 'Não foi possível enviar o lead para a Clarify',
    };
  }
}

