import { NextRequest, NextResponse } from 'next/server';
import { sendLeadToRDStation, formatFormDataForRDStation } from '@/lib/rdStation';

/**
 * API Route para enviar leads ao RD Station Marketing
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

    // Validação básica
    if (!formData || !formData.email) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email é obrigatório' 
        },
        { status: 400 }
      );
    }

    // Formatar dados para o RD Station
    const rdStationData = formatFormDataForRDStation(formData, {
      formSource: formSource || 'Website',
      formIdentifier: formIdentifier,
      tags: tags || [],
    });

    // Enviar para o RD Station
    const result = await sendLeadToRDStation(rdStationData);

    if (result.success) {
      return NextResponse.json(
        {
          success: true,
          message: result.message,
          contact_id: result.contact_id,
        },
        { status: 200 }
      );
    } else {
      // Mesmo com erro, retornamos 200 para não quebrar o fluxo do usuário
      // O erro será logado mas não impedirá o envio para outros sistemas
      console.error('Erro ao enviar para RD Station:', result.error);
      
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
    console.error('Erro na API RD Station:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      },
      { status: 200 } // 200 para não quebrar o fluxo do formulário
    );
  }
}
