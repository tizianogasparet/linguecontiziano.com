// src/i18n/ui.ts
import type { LangCode } from './config';

export const ui = {
  en: {
    'site.title': 'Tiziano Gasparet | Strategy',
    'site.description': 'Deep analysis of discipline systems, error autopsy, and conflict psychology.',
    'nav.logo': 'LANGUAGES WITH TIZIANO',
    'nav.home': 'HOME',
    'nav.blog': 'BLOG',
    'nav.about': 'ABOUT',
    'nav.categories': 'CATEGORIES',
    'footer.contact': 'STRATEGIC CONTACT',
    'footer.privacy': 'PRIVACY POLICY',
    'footer.cookie': 'COOKIE POLICY',
    'footer.terms': 'TERMS AND CONDITIONS',
    'footer.copyright': '© {year} TIZIANO GASPARET. INTELLETTO E STRATEGIA.',
    'security': 'SECURITY POLICY',
    'contact.email': 'tiziano@linguecontiziano.com',
    'cat-autopsia': 'ERROR AUTOPSY',
    'cat-sistemi': 'DISCIPLINE SYSTEMS',
    'cat-psicologia': 'CONFLICT PSYCHOLOGY',
    'cat-esecuzione': 'IMMEDIATE EXECUTION',
    'error.404.title': 'PAGE NOT FOUND',
    'error.404.back': 'RETURN TO STRATEGY',

    // Blog
    'blog.author': 'Author',
    'blog.published': 'Published',
    'blog.discover-more': 'DISCOVER →',
  },
  it: {
    'site.title': 'Tiziano Gasparet | Strategia',
    'site.description': 'Analisi profonda dei sistemi di disciplina e dell’autopsia dell’errore.',
    'nav.logo': 'LINGUE CON TIZIANO',
    'nav.home': 'HOME',
    'nav.blog': 'BLOG',
    'nav.about': 'CHI SONO',
    'nav.categories': 'CATEGORIE',
    'footer.contact': 'CONTATTO STRATEGICO',
    'footer.privacy': 'PRIVACY POLICY',
    'footer.cookie': 'COOKIE POLICY',
    'footer.terms': 'TERMINI E CONDIZIONI',
    'footer.copyright': '© {year} TIZIANO GASPARET. INTELLETTO E STRATEGIA.',
    'security': 'SICUREZZA',
    'contact.email': 'tiziano@linguecontiziano.com',
    'cat-autopsia': 'AUTOPSIA DELL’ERRORE',
    'cat-sistemi': 'SISTEMI DI DISCIPLINA',
    'cat-psicologia': 'PSICOLOGIA DEL CONFLITTO',
    'cat-esecuzione': 'ESECUZIONE IMMEDIATA',
    'error.404.title': 'PAGINA NON TROVATA',
    'error.404.back': 'TORNA ALLA STRATEGIA',

    // Blog
    'blog.author': 'Autore',
    'blog.published': 'Pubblicato',
    'blog.discover-more': 'SCOPRI →',
  },
  es: {
    'site.title': 'Tiziano Gasparet | Estrategia',
    'site.description': 'Análisis profundo de sistemas de disciplina y autopsia del error.',
    'nav.logo': 'IDIOMAS CON TIZIANO',
    'nav.home': 'INICIO',
    'nav.blog': 'BLOG',
    'nav.about': 'SOBRE MÍ',
    'nav.categories': 'CATEGORÍAS',
    'footer.contact': 'CONTACTO ESTRATÉGICO',
    'footer.privacy': 'POLÍTICA DE PRIVACIDAD',
    'footer.cookie': 'POLÍTICA DE COOKIES',
    'footer.terms': 'TÉRMINOS Y CONDICIONES',
    'footer.copyright': '© {year} TIZIANO GASPARET. INTELLETTO E STRATEGIA.',
    'security': 'SEGURIDAD',
    'contact.email': 'tiziano@linguecontiziano.com',
    'cat-autopsia': 'AUTOPSIA DEL ERROR',
    'cat-sistemi': 'SISTEMAS DE DISCIPLINA',
    'cat-psicologia': 'PSICOLOGÍA DEL CONFLICTO',
    'cat-esecuzione': 'EJECUCIÓN INMEDIATA',
    'error.404.title': 'PÁGINA NO ENCONTRADA',
    'error.404.back': 'VOLVER A LA ESTRATEGIA',

    // Blog
    'blog.author': 'Autor',
    'blog.published': 'Publicado',
    'blog.discover-more': 'DESCUBRIR →',
  },
} as const;

export type UITranslationKey = keyof typeof ui.en;

export function useTranslations(lang: LangCode) {
  return function t(key: UITranslationKey): string {
    return ui[lang]?.[key] || ui.en[key] || key;
  };
}