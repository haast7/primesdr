interface WebhookData {
  nome: string;
  email: string;
  whatsapp: string;
  empresa: string;
  cargo: string;
  dominio: string;
  data_entrada: string;
  horario_entrada: string;
  fonte: string;
}

export async function sendToWebhook(data: WebhookData): Promise<boolean> {
  const webhookUrl = 'https://hook.us2.make.com/6f2nex5fjc3c4nwb1nw8ggn3nchhcx6v';
  
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Webhook enviado com sucesso:', data);
      return true;
    } else {
      console.error('Erro ao enviar webhook:', response.status, response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Erro ao enviar webhook:', error);
    return false;
  }
}

export function formatPhoneForWebhook(phone: string): string {
  // Remove todos os caracteres não numéricos
  const numbers = phone.replace(/\D/g, '');
  
  // Se começar com 55 (Brasil), mantém como está
  if (numbers.startsWith('55')) {
    return numbers;
  }
  
  // Se não começar com 55, adiciona o código do Brasil
  return '55' + numbers;
}

export function getCurrentDateTime(): { data: string; horario: string } {
  const now = new Date();
  
  // Data no formato DD/MM/YYYY
  const data = now.toLocaleDateString('pt-BR');
  
  // Horário no formato HH:MM:SS
  const horario = now.toLocaleTimeString('pt-BR');
  
  return { data, horario };
}
