// src/i18n/config.ts
export const LANGUAGES_TUPLE = ['en', 'it', 'es'] as const;
export type LangCode = typeof LANGUAGES_TUPLE[number];

export const languages = {
  en: { label: 'English', dir: 'ltr' },
  it: { label: 'Italiano', dir: 'ltr' },
  es: { label: 'Español', dir: 'ltr' },
} as const;

export const supportedLanguages = [...LANGUAGES_TUPLE];
export const defaultLang: LangCode = 'en';