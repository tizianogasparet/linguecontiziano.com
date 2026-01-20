import { supportedLanguages, defaultLang, type LangCode } from '@/i18n/config';

/**
 * Restituisce la lingua dalla URL
 * Fallback alla lingua di default se non riconosciuta
 */
export function getLangFromUrl(url: URL): LangCode {
  const [, firstSegment] = url.pathname.split('/');
  if (supportedLanguages.includes(firstSegment as LangCode)) {
    return firstSegment as LangCode;
  }
  return defaultLang;
}
