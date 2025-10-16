import { NextRequest, NextResponse } from 'next/server';
import { getVendedorById } from '@/lib/vendedores';

// TODO: Implementar integração com Google Calendar quando necessário
// const { google } = require('googleapis');

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

    // Mock: Gerar horários disponíveis sem integração com Google Calendar
    const busyTimes: any[] = []; // Por enquanto, sem horários ocupados
    
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
