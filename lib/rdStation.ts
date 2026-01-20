/**
 * Integração com RD Station Marketing
 * 
 * Esta função envia leads para o RD Station Marketing via API REST
 * 
 * Documentação: https://developers.rdstation.com/pt-BR/reference/post_platform_contacts
 */

export interface RDStationLeadData {
  // Campos obrigatórios
  email: string;
  
  // Campos opcionais mas recomendados
  name?: string;
  personal_phone?: string;
  company?: string;
  job_title?: string;
  linkedin?: string;
  
  // Campos customizados (tags, identificadores, etc)
  tags?: string[];
  legal_bases?: Array<{
    category: string;
    type: string;
    status: string;
  }>;
  
  // Metadados adicionais
  cf_origem?: string; // Origem do lead
  cf_formulario?: string; // Identificador do formulário
  cf_fonte?: string; // Fonte do lead
}

export interface RDStationResponse {
  success: boolean;
  contact_id?: string;
  error?: string;
  message?: string;
}

/**
 * Envia um lead para o RD Station Marketing
 * 
 * @param leadData - Dados do lead a serem enviados
 * @returns Promise com a resposta do RD Station
 */
export async function sendLeadToRDStation(
  leadData: RDStationLeadData
): Promise<RDStationResponse> {
  const publicToken = process.env.RD_STATION_PUBLIC_TOKEN;
  const formIdentifier = process.env.RD_STATION_FORM_IDENTIFIER;

  if (!publicToken) {
    console.error('RD Station: Public Token não configurado');
    return {
      success: false,
      error: 'RD Station Public Token não configurado'
    };
  }

  // Preparar dados para o RD Station
  const rdStationPayload: any = {
    email: leadData.email,
  };

  // Adicionar campos opcionais se existirem
  if (leadData.name) {
    rdStationPayload.name = leadData.name;
  }

  if (leadData.personal_phone) {
    // Formatar telefone para o padrão do RD Station (apenas números)
    const phoneNumbers = leadData.personal_phone.replace(/\D/g, '');
    if (phoneNumbers.length >= 10) {
      rdStationPayload.personal_phone = phoneNumbers;
    }
  }

  if (leadData.company) {
    rdStationPayload.company = leadData.company;
  }

  if (leadData.job_title) {
    rdStationPayload.job_title = leadData.job_title;
  }

  if (leadData.linkedin) {
    rdStationPayload.linkedin = leadData.linkedin;
  }

  // Adicionar tags se existirem
  if (leadData.tags && leadData.tags.length > 0) {
    rdStationPayload.tags = leadData.tags;
  }

  // Adicionar campos customizados
  if (leadData.cf_origem) {
    rdStationPayload.cf_origem = leadData.cf_origem;
  }

  if (leadData.cf_formulario) {
    rdStationPayload.cf_formulario = leadData.cf_formulario;
  }

  if (leadData.cf_fonte) {
    rdStationPayload.cf_fonte = leadData.cf_fonte;
  }

  // Adicionar legal bases (LGPD/GDPR compliance)
  if (leadData.legal_bases && leadData.legal_bases.length > 0) {
    rdStationPayload.legal_bases = leadData.legal_bases;
  } else {
    // Adicionar consentimento padrão se não especificado
    rdStationPayload.legal_bases = [
      {
        category: 'communication',
        type: 'consent',
        status: 'granted'
      }
    ];
  }

  try {
    // URL da API do RD Station
    const apiUrl = formIdentifier
      ? `https://api.rd.services/platform/contacts?token=${publicToken}&identifier=${formIdentifier}`
      : `https://api.rd.services/platform/contacts?token=${publicToken}`;

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rdStationPayload),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('RD Station API Error:', response.status, errorData);
      
      return {
        success: false,
        error: `RD Station API Error: ${response.status}`,
        message: errorData
      };
    }

    const responseData = await response.json();
    
    return {
      success: true,
      contact_id: responseData.id || responseData.uuid,
      message: 'Lead enviado com sucesso para o RD Station'
    };

  } catch (error) {
    console.error('Erro ao enviar lead para RD Station:', error);
    
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Erro desconhecido',
      message: 'Não foi possível enviar o lead para o RD Station'
    };
  }
}

/**
 * Formata dados do formulário para o formato do RD Station
 */
export function formatFormDataForRDStation(
  formData: {
    name?: string;
    email: string;
    phone?: string;
    company?: string;
    role?: string;
    linkedin?: string;
    [key: string]: any;
  },
  options?: {
    formSource?: string;
    formIdentifier?: string;
    tags?: string[];
  }
): RDStationLeadData {
  return {
    email: formData.email,
    name: formData.name,
    personal_phone: formData.phone,
    company: formData.company,
    job_title: formData.role,
    linkedin: formData.linkedin,
    tags: options?.tags || [],
    cf_origem: 'Site Prime SDR',
    cf_formulario: options?.formIdentifier || 'formulario-site',
    cf_fonte: options?.formSource || 'Website',
  };
}
