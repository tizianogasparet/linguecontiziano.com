export const supportedLanguages = ['en', 'it', 'es'] as const;
export type LangCode = (typeof supportedLanguages)[number];
export const defaultLang: LangCode = 'en';

export const languageAttributes = {
  en: { lang: 'en', dir: 'ltr' },
  it: { lang: 'it', dir: 'ltr' },
  es: { lang: 'es', dir: 'ltr' },
} as const;