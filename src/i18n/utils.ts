// src/i18n/utils.ts
import { supportedLanguages, defaultLang, type LangCode } from './config';

export function getLangFromParams(params: { lang?: string | string[] }): LangCode {
  const langParam = params.lang;
  if (!langParam) return defaultLang;

  const lang = Array.isArray(langParam) ? langParam[0] : langParam;
  return supportedLanguages.includes(lang as LangCode) ? (lang as LangCode) : defaultLang;
}

export function getLangFromUrl(url: URL): LangCode {
  const path = url.pathname;
  if (path === '/') return defaultLang;

  const firstSegment = path.split('/')[1];
  return supportedLanguages.includes(firstSegment as LangCode)
    ? (firstSegment as LangCode)
    : defaultLang;
}