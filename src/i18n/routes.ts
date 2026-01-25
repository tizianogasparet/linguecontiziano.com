// src/i18n/routes.ts
import type { LangCode } from './config';

export type RouteKey =
  | 'home'
  | 'blog'
  | 'about'
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
    about: 'about',
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
    about: 'chi-sono',
    privacy: 'privacy-policy',
    cookie: 'cookie-policy',
    terms: 'termini-e-condizioni',
    security: 'security-policy',
    'cat-autopsia': 'autopsia-dell-errore',
    'cat-sistemi': 'sistemi-di-disciplina',
    'cat-psicologia': 'psicologia-del-conflitto',
    'cat-esecuzione': 'esecuzione-immediata',
  },
  es: {
    home: '',
    blog: 'blog',
    about: 'sobre-mi',
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
 * Genera URL localizzati.
 * Esempi:
 * - getLocalizedPath('en', 'home') → '/'
 * - getLocalizedPath('it', 'about') → '/it/chi-sono'
 * - getLocalizedPath('en', 'blog', 'my-post') → '/blog/my-post'
 */
export function getLocalizedPath(lang: LangCode, key: RouteKey, slug?: string): string {
  const isDefault = lang === 'en';
  const route = routes[lang][key];

  if (key === 'home') {
    return isDefault ? '/' : `/${lang}`;
  }

  let path = route;
  if (slug) path += `/${slug}`;

  return isDefault ? `/${path}` : `/${lang}/${path}`;
}