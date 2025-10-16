// Configuração de URLs para imagens
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://primesdr.vercel.app';

export const getImageUrl = (path: string): string => {
  // Remove barra inicial se existir
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${SITE_URL}/${cleanPath}`;
};

// URLs das imagens principais
export const IMAGES = {
  logo: getImageUrl('logoazul.png'),
  logoWhite: getImageUrl('logocompletabranca.png'),
  logoBlack: getImageUrl('logocompletapreta.png'),
  favicon: getImageUrl('favicon.ico'),
  profile: getImageUrl('per.png'),
  whatsapp: getImageUrl('icons/whatsapp.png'),
  linkedin: getImageUrl('icons/linkedin.png'),
  instagram: getImageUrl('icons/instagram.png'),
  facebook: getImageUrl('icons/facebook.png'),
  twitter: getImageUrl('icons/twitter.png'),
  youtube: getImageUrl('icons/youtube.png'),
  tiktok: getImageUrl('icons/tik-tok.png'),
  email: getImageUrl('icons/e-mail.png'),
  call: getImageUrl('icons/call.png'),
} as const;
