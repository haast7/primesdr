/**
 * Retorna a URL base do site a partir das variáveis de ambiente.
 * Usado em sitemap, robots, canonical e OG para evitar hardcode.
 */
export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (!url) {
    return 'https://primesdr.com';
  }
  return url.replace(/\/$/, '');
}
