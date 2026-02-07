// src/i18n/routes.ts
import type { LangCode } from './config';

export type RouteKey =
  | 'home'
  | 'blog'
  | 'dictionary'
  | 'privacy'
  | 'cookie'
  | 'terms'
  | 'security'
  | 'cat-autopsia'
  | 'cat-sistemi'
  | 'cat-psicologia'
  | 'cat-esecuzione';

export const routes: Record<LangCode, Record<RouteKey, string>> = {
  en: {
    home: '',
    blog: 'blog',
    dictionary: 'dictionary',
    privacy: 'privacy-policy',
    cookie: 'cookie-policy',
    terms: 'terms-and-conditions',
    security: 'security-policy',
    'cat-autopsia': 'error-autopsy',
    'cat-sistemi': 'discipline-systems',
    'cat-psicologia': 'conflict-psychology',
    'cat-esecuzione': 'immediate-execution',
  },
  it: {
    home: '',
    blog: 'blog',
    dictionary: 'dizionario',
    privacy: 'informativa-sulla-privacy',
    cookie: 'politica-sui-cookie',
    terms: 'termini-e-condizioni',
    security: 'politica-di-sicurezza',
    'cat-autopsia': 'autopsia-dell-errore',
    'cat-sistemi': 'sistemi-di-disciplina',
    'cat-psicologia': 'psicologia-del-conflitto',
    'cat-esecuzione': 'esecuzione-immediata',
  },
  es: {
    home: '',
    blog: 'blog',
    dictionary: 'diccionario',
    privacy: 'politica-de-privacidad',
    cookie: 'politica-de-cookies',
    terms: 'terminos-y-condiciones',
    security: 'politica-de-seguridad',
    'cat-autopsia': 'autopsia-del-error',
    'cat-sistemi': 'sistemas-de-disciplina',
    'cat-psicologia': 'psicologia-del-conflicto',
    'cat-esecuzione': 'ejecucion-inmediata',
  },
};

/**
 * Genera URL localizzati in base alla lingua e alla chiave rotta.
 */
export function getLocalizedPath(lang: LangCode, key: RouteKey, slug?: string): string {
  const isDefault = lang === 'en';
  const route = routes[lang][key];
  
  // Gestione Home
  if (key === 'home') {
    return isDefault ? '/' : `/${lang}`;
  }

  let path = route;
  if (slug) {
    path += `/${slug}`;
  }

  // Costruzione URL finale
  return isDefault ? `/${path}` : `/${lang}/${path}`;
}