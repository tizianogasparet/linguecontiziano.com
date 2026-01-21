// src/utils/slugger.ts
export function slugify(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');
}