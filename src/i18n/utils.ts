import { supportedLanguages, defaultLang } from './config';

export function getLangFromUrl(url: URL) {
  const [, firstSegment] = url.pathname.split('/');
  if (supportedLanguages.includes(firstSegment as any)) {
    return firstSegment as typeof defaultLang;
  }
  return defaultLang;
}