/**
 * Lingue supportate
 * ✅ Scalabile: aggiungi nuove lingue senza modificare altro codice
 */
export const languages = {
  en: { label: 'English', dir: 'ltr' },
  it: { label: 'Italiano', dir: 'ltr' },
  es: { label: 'Español', dir: 'ltr' },
} as const;

export type LangCode = keyof typeof languages;
export const supportedLanguages = Object.keys(languages) as LangCode[];
export const defaultLang: LangCode = 'en';
