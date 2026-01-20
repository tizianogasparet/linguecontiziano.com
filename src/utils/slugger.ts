/**
 * Genera slug URL-safe, Unicode-safe, compatibile con qualsiasi lingua.
 */
export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)+/g, '');
}
