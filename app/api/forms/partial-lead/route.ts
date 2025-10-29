import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validação básica
    if (!body.formId || !body.timestamp) {
      return NextResponse.json(
        { error: 'Dados obrigatórios ausentes' },
        { status: 400 }
      );
    }

    // Log dos dados parciais (você pode integrar com seu CRM aqui)
    console.log('📊 Dados parciais capturados:', {
      formId: body.formId,
      timestamp: body.timestamp,
      fieldsCompleted: body.fieldsCompleted,
      timeOnForm: body.timeOnForm,
      isPartial: body.isPartial,
      isAbandoned: body.isAbandoned,
      data: body
    });

    // Aqui você pode integrar com:
    // - CRM (HubSpot, Pipedrive, etc.)
    // - Sistema de email marketing
    // - Analytics avançado
    // - Webhook para Make.com/Zapier

    // Exemplo de integração com webhook (similar ao existente)
    if (process.env.WEBHOOK_URL) {
      try {
        const webhookData = {
          tipo: body.isAbandoned ? 'form_abandoned' : 'partial_lead',
          form_id: body.formId,
          timestamp: body.timestamp,
          campos_preenchidos: body.fieldsCompleted,
          tempo_no_formulario: body.timeOnForm,
          dados: body,
          fonte: 'Captura Parcial em Tempo Real'
        };

        await fetch(process.env.WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookData),
        });
      } catch (error) {
        console.error('Erro ao enviar para webhook:', error);
      }
    }

    // Tracking para analytics
    if (body.isAbandoned) {
      // Evento de abandono de formulário
      console.log('🚨 Formulário abandonado:', {
        formId: body.formId,
        fieldsCompleted: body.fieldsCompleted,
        timeOnForm: body.timeOnForm
      });
    } else {
      // Evento de dados parciais
      console.log('📝 Dados parciais salvos:', {
        formId: body.formId,
        fieldsCompleted: body.fieldsCompleted
      });
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Dados parciais capturados com sucesso' 
    });

  } catch (error) {
    console.error('Erro ao processar dados parciais:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
