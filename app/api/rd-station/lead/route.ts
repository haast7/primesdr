import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToClarify } from '@/lib/clarify';

/**
 * API Route para enviar leads para a Clarify
 * 
 * POST /api/rd-station/lead
 * 
 * Body:
 * {
 *   formData: {
 *     name?: string;
 *     email: string;
 *     phone?: string;
 *     company?: string;
 *     role?: string;
 *     linkedin?: string;
 *   },
 *   formSource?: string; // Ex: "ContactModal", "TypeformModal", "ResourceForm"
 *   formIdentifier?: string; // Identificador do formulário
 *   tags?: string[]; // Tags adicionais
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formData, formSource, formIdentifier, tags } = body;

    console.log('Clarify API - Recebendo lead:', {
      email: formData?.email,
      formSource,
      formIdentifier,
      tags
    });

    // Validação básica
    if (!formData || !formData.email) {
      console.error('Clarify API - Erro: Email é obrigatório');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email é obrigatório' 
        },
        { status: 400 }
      );
    }

    // Domínio: campo do form ou derivado do email (para criar Company na Clarify)
    const domain = formData.domain || (formData.email?.includes('@') ? formData.email.split('@')[1] : undefined);
    const clarifyPayload = {
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      company: formData.company,
      domain,
      role: formData.role,
      linkedin: formData.linkedin,
      source: formSource || 'Website',
      formIdentifier: formIdentifier,
      tags: tags || [],
    };

    const result = await sendLeadToClarify(clarifyPayload);

    console.log('Clarify API - Resultado:', {
      success: result.success,
      external_id: result.external_id,
      error: result.error,
      statusCode: result.statusCode,
      message: result.message,
    });

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: result.message,
          external_id: result.external_id,
        },
        { status: 200 }
      );
    } else {
      // Mesmo com erro, retornamos 200 para não quebrar o fluxo do usuário
      console.error('Erro ao enviar para Clarify:', result.error);
      
      return NextResponse.json(
        {
          success: false,
          error: result.error,
          message: result.message,
        },
        { status: 200 } // 200 para não quebrar o fluxo do formulário
      );
    }
  } catch (error) {
    console.error('Erro na API Clarify:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      },
      { status: 200 } // 200 para não quebrar o fluxo do formulário
    );
  }
}
