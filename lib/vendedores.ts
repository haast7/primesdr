// Configuração dos vendedores e seus calendários
export interface Vendedor {
  id: string;
  name: string;
  email: string;
  calendarId: string;
  timezone: string;
  workingHours: {
    start: string; // formato "09:00"
    end: string;   // formato "18:00"
    days: string[]; // ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
  };
  meetingDuration: number; // em minutos
  bufferTime: number; // tempo entre reuniões em minutos
}

export const vendedores: Vendedor[] = [
  {
    id: 'vendedor1',
    name: 'João Silva',
    email: 'joao@empresa.com',
    calendarId: 'joao@empresa.com', // Email do Google Calendar
    timezone: 'America/Sao_Paulo',
    workingHours: {
      start: '09:00',
      end: '18:00',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    },
    meetingDuration: 30, // 30 minutos
    bufferTime: 15 // 15 minutos entre reuniões
  },
  {
    id: 'vendedor2',
    name: 'Maria Santos',
    email: 'maria@empresa.com',
    calendarId: 'maria@empresa.com',
    timezone: 'America/Sao_Paulo',
    workingHours: {
      start: '08:00',
      end: '17:00',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    },
    meetingDuration: 30,
    bufferTime: 15
  },
  {
    id: 'vendedor3',
    name: 'Pedro Costa',
    email: 'pedro@empresa.com',
    calendarId: 'pedro@empresa.com',
    timezone: 'America/Sao_Paulo',
    workingHours: {
      start: '10:00',
      end: '19:00',
      days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
    },
    meetingDuration: 30,
    bufferTime: 15
  }
];

// Função para buscar vendedor por ID
export const getVendedorById = (id: string): Vendedor | undefined => {
  return vendedores.find(v => v.id === id);
};

// Função para listar todos os vendedores
export const getAllVendedores = (): Vendedor[] => {
  return vendedores;
};
