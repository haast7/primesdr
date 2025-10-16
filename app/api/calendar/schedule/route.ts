import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { getVendedorById } from '@/lib/vendedores';

// Configuração do Google Calendar
const getCalendarClient = () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });

  return google.calendar({ version: 'v3', auth });
};

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

    // Criar evento no Google Calendar
    const calendar = getCalendarClient();
    const event = await calendar.events.insert({
      calendarId: vendedor.calendarId,
      requestBody: {
        summary: `${meetingType} - ${clientName}`,
        description: `
Cliente: ${clientName}
Email: ${clientEmail}
Telefone: ${clientPhone || 'Não informado'}

Reunião agendada através do formulário Prime SDR.
        `,
        start: {
          dateTime: start.toISOString(),
          timeZone: vendedor.timezone,
        },
        end: {
          dateTime: end.toISOString(),
          timeZone: vendedor.timezone,
        },
        attendees: [
          {
            email: vendedor.email,
            displayName: vendedor.name,
            organizer: true,
          },
          {
            email: clientEmail,
            displayName: clientName,
          },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'email', minutes: 24 * 60 }, // 1 dia antes
            { method: 'popup', minutes: 30 }, // 30 minutos antes
          ],
        },
        conferenceData: {
          createRequest: {
            requestId: `prime-sdr-${Date.now()}`,
            conferenceSolutionKey: {
              type: 'hangoutsMeet',
            },
          },
        },
      },
    });

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
