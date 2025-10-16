import { NextRequest, NextResponse } from 'next/server';
import { getVendedorById } from '@/lib/vendedores';

// TODO: Implementar integração com Google Calendar quando necessário
// const { google } = require('googleapis');

export async function POST(request: NextRequest) {
  try {
    const { 
      vendedorId, 
      startTime, 
      clientName, 
      clientEmail, 
      clientPhone,
      meetingType = 'Consulta Prime SDR'
    } = await request.json();

    if (!vendedorId || !startTime || !clientName || !clientEmail) {
      return NextResponse.json(
        { error: 'vendedorId, startTime, clientName e clientEmail são obrigatórios' },
        { status: 400 }
      );
    }

    // Buscar dados do vendedor
    const vendedor = getVendedorById(vendedorId);
    if (!vendedor) {
      return NextResponse.json(
        { error: 'Vendedor não encontrado' },
        { status: 404 }
      );
    }

    // Configurar horários
    const start = new Date(startTime);
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + vendedor.meetingDuration);

    // Mock: Simular criação de evento (implementar integração real depois)
    const event = {
      data: {
        id: `mock-event-${Date.now()}`,
        summary: `${meetingType} - ${clientName}`,
        start: { dateTime: start.toISOString() },
        end: { dateTime: end.toISOString() },
        conferenceData: {
          entryPoints: [{ uri: `https://meet.google.com/mock-${Date.now()}` }]
        }
      }
    };

    return NextResponse.json({
      success: true,
      event: {
        id: event.data.id,
        summary: event.data.summary,
        start: event.data.start?.dateTime,
        end: event.data.end?.dateTime,
        meetLink: event.data.conferenceData?.entryPoints?.[0]?.uri,
      },
      vendedor: {
        name: vendedor.name,
        email: vendedor.email,
      },
    });

  } catch (error) {
    console.error('Erro ao agendar reunião:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
