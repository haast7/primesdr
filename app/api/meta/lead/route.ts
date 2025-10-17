import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { formData, eventType = 'Lead' } = await request.json();

    if (!process.env.META_BUSINESS_API_TOKEN) {
      console.error('Meta Business API Token não configurado');
      return NextResponse.json(
        { error: 'Meta Business API Token não configurado' },
        { status: 500 }
      );
    }

    // Dados para enviar ao Meta
    const metaData = {
      data: [
        {
          event_name: eventType,
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            em: formData.email ? hashEmail(formData.email) : undefined,
            ph: formData.phone ? hashPhone(formData.phone) : undefined,
            fn: formData.name ? hashString(formData.name.split(' ')[0]) : undefined,
            ln: formData.name ? hashString(formData.name.split(' ').slice(1).join(' ')) : undefined,
            ct: 'São Paulo', // Cidade padrão
            st: 'SP', // Estado padrão
            country: 'br',
            zp: '01000-000' // CEP padrão
          },
          custom_data: {
            content_name: 'Prime SDR - Formulário de Qualificação',
            content_category: 'SDR Software',
            value: 0,
            currency: 'BRL',
            company: formData.company || '',
            role: formData.role || '',
            team_size: formData.teamSize || '',
            average_ticket: formData.averageTicket || '',
            fit_score: formData.fitScore || 0,
            lead_source: 'Website',
            lead_quality: formData.fitScore >= 75 ? 'High' : formData.fitScore >= 50 ? 'Medium' : 'Low'
          },
          action_source: 'website'
        }
      ],
      access_token: process.env.META_BUSINESS_API_TOKEN
    };

    // Enviar para Meta Conversions API
    const response = await fetch(
      `https://graph.facebook.com/v18.0/${process.env.NEXT_PUBLIC_META_PIXEL_ID}/events`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(metaData),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      console.error('Erro ao enviar para Meta:', result);
      return NextResponse.json(
        { error: 'Erro ao enviar dados para Meta' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      meta_response: result,
      event_type: eventType
    });

  } catch (error) {
    console.error('Erro na API Meta:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Função para hash de email (SHA-256)
function hashEmail(email: string): string {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(email.toLowerCase().trim()).digest('hex');
}

// Função para hash de telefone
function hashPhone(phone: string): string {
  const crypto = require('crypto');
  // Remove caracteres não numéricos
  const cleanPhone = phone.replace(/\D/g, '');
  return crypto.createHash('sha256').update(cleanPhone).digest('hex');
}

// Função para hash de string genérica
function hashString(str: string): string {
  const crypto = require('crypto');
  return crypto.createHash('sha256').update(str.toLowerCase().trim()).digest('hex');
}


