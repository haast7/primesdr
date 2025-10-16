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
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  return google.calendar({ version: 'v3', auth });
};

export async function POST(request: NextRequest) {
  try {
    const { vendedorId, date } = await request.json();

    if (!vendedorId || !date) {
      return NextResponse.json(
        { error: 'vendedorId e date são obrigatórios' },
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

    // Configurar período de consulta (dia inteiro)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Consultar disponibilidade
    const calendar = getCalendarClient();
    const response = await calendar.freebusy.query({
      requestBody: {
        timeMin: startOfDay.toISOString(),
        timeMax: endOfDay.toISOString(),
        items: [{ id: vendedor.calendarId }],
        timeZone: vendedor.timezone,
      },
    });

    // Processar horários ocupados
    const busyTimes = response.data.calendars?.[vendedor.calendarId]?.busy || [];
    
    // Gerar horários disponíveis
    const availableSlots = generateAvailableSlots(
      startOfDay,
      endOfDay,
      busyTimes,
      vendedor
    );

    return NextResponse.json({
      vendedor: {
        id: vendedor.id,
        name: vendedor.name,
        email: vendedor.email,
      },
      date,
      availableSlots,
      busyTimes: busyTimes.map(busy => ({
        start: busy.start,
        end: busy.end,
      })),
    });

  } catch (error) {
    console.error('Erro ao consultar disponibilidade:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// Função para gerar horários disponíveis
function generateAvailableSlots(
  startOfDay: Date,
  endOfDay: Date,
  busyTimes: any[],
  vendedor: any
) {
  const slots: string[] = [];
  const slotDuration = vendedor.meetingDuration + vendedor.bufferTime; // 45 minutos
  
  // Horário de trabalho
  const [workStartHour, workStartMin] = vendedor.workingHours.start.split(':').map(Number);
  const [workEndHour, workEndMin] = vendedor.workingHours.end.split(':').map(Number);
  
  const workStart = new Date(startOfDay);
  workStart.setHours(workStartHour, workStartMin, 0, 0);
  
  const workEnd = new Date(startOfDay);
  workEnd.setHours(workEndHour, workEndMin, 0, 0);

  // Gerar slots de 30 em 30 minutos
  const current = new Date(workStart);
  while (current < workEnd) {
    const slotEnd = new Date(current);
    slotEnd.setMinutes(slotEnd.getMinutes() + vendedor.meetingDuration);

    // Verificar se o slot está livre
    const isAvailable = !busyTimes.some(busy => {
      const busyStart = new Date(busy.start!);
      const busyEnd = new Date(busy.end!);
      
      return (
        (current >= busyStart && current < busyEnd) ||
        (slotEnd > busyStart && slotEnd <= busyEnd) ||
        (current <= busyStart && slotEnd >= busyEnd)
      );
    });

    if (isAvailable && slotEnd <= workEnd) {
      slots.push(current.toISOString());
    }

    // Próximo slot
    current.setMinutes(current.getMinutes() + 30);
  }

  return slots;
}
