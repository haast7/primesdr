import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { formData, eventType = 'Lead' } = await request.json();

    if (!process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) {
      console.error('Google Ads ID não configurado');
      return NextResponse.json(
        { error: 'Google Ads ID não configurado' },
        { status: 500 }
      );
    }

    // Dados para enviar ao Google Ads
    const googleAdsData = {
      conversion_action: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
      conversion_date_time: new Date().toISOString(),
      conversion_value: 0,
      currency_code: 'BRL',
      order_id: `prime-sdr-${Date.now()}`,
      user_agent: request.headers.get('user-agent') || '',
      user_identifier: {
        hashed_email: formData.email ? hashEmail(formData.email) : undefined,
        hashed_phone_number: formData.phone ? hashPhone(formData.phone) : undefined,
        address_info: {
          hashed_first_name: formData.name ? hashString(formData.name.split(' ')[0]) : undefined,
          hashed_last_name: formData.name ? hashString(formData.name.split(' ').slice(1).join(' ')) : undefined,
          country_code: 'BR',
          postal_code: '01000-000'
        }
      },
      custom_variables: [
        {
          conversion_custom_variable: 'company',
          value: formData.company || ''
        },
        {
          conversion_custom_variable: 'role',
          value: formData.role || ''
        },
        {
          conversion_custom_variable: 'team_size',
          value: formData.teamSize || ''
        },
        {
          conversion_custom_variable: 'average_ticket',
          value: formData.averageTicket || ''
        },
        {
          conversion_custom_variable: 'fit_score',
          value: formData.fitScore?.toString() || '0'
        },
        {
          conversion_custom_variable: 'lead_source',
          value: 'Website'
        },
        {
          conversion_custom_variable: 'lead_quality',
          value: formData.fitScore >= 75 ? 'High' : formData.fitScore >= 50 ? 'Medium' : 'Low'
        }
      ]
    };

    // Log para debug (não enviar dados reais em produção)
    console.log('Google Ads Conversion Data:', {
      conversion_action: googleAdsData.conversion_action,
      event_type: eventType,
      lead_quality: googleAdsData.custom_variables.find(cv => cv.conversion_custom_variable === 'lead_quality')?.value
    });

    // Em um ambiente real, você enviaria para a Google Ads API
    // Por enquanto, vamos simular o sucesso
    return NextResponse.json({
      success: true,
      message: 'Google Ads conversion tracked successfully',
      event_type: eventType,
      conversion_data: {
        conversion_action: googleAdsData.conversion_action,
        lead_quality: googleAdsData.custom_variables.find(cv => cv.conversion_custom_variable === 'lead_quality')?.value,
        company: formData.company,
        fit_score: formData.fitScore
      }
    });

  } catch (error) {
    console.error('Erro na API Google Ads:', error);
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


