// Configuração de URLs para imagens - paths relativos para melhor performance
export const getImageUrl = (path: string): string => {
  // Garante que o path comece com /
  return path.startsWith('/') ? path : `/${path}`;
};

// URLs das imagens principais - paths relativos
export const IMAGES = {
  logo: '/logoazul.png',
  logoWhite: '/logocompletabranca.png',
  logoBlack: '/logocompletapreta.png',
  favicon: '/favicon.ico',
  profile: '/per.png',
  whatsapp: '/icons/whatsapp.png',
  linkedin: '/icons/linkedin.png',
  instagram: '/icons/instagram.png',
  facebook: '/icons/facebook.png',
  twitter: '/icons/twitter.png',
  youtube: '/icons/youtube.png',
  tiktok: '/icons/tik-tok.png',
  email: '/icons/e-mail.png',
  call: '/icons/call.png',
} as const;
