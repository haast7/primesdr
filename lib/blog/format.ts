/**
 * Formatação consistente entre servidor e cliente para evitar hydration mismatch.
 * Datas em UTC; excerpt como texto puro (sem HTML).
 */

/**
 * Formata data em pt-BR com timeZone UTC para servidor e cliente gerarem o mesmo resultado.
 */
export function formatDateUtc(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC',
    });
  } catch {
    return dateStr;
  }
}

/**
 * Formata data longa (ex.: "20 de fevereiro de 2025") em UTC.
 */
export function formatDateLongUtc(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    });
  } catch {
    return dateStr;
  }
}

/**
 * Remove tags HTML e entidades para exibição segura em cards (evita hydration mismatch).
 */
export function excerptAsPlainText(html: string, maxLength = 160): string {
  if (!html) return '';
  const text = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}
