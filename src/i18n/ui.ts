import { defaultLang, type LangCode } from './config';

export const ui = {
  en: {
    'site.title': 'Tiziano Gasparet | Strategy',
    'site.description': 'Deep analysis of discipline systems, error autopsy, and conflict psychology.',
    'nav.logo': 'LANGUAGES WITH TIZIANO',
    'nav.home': 'HOME',
    'nav.blog': 'BLOG',
    'nav.about': 'ABOUT',
    'nav.categories': 'CATEGORIES',
    'nav.search': 'SEARCH',
    'nav.menu': 'MENU',
    'footer.contact': 'STRATEGIC CONTACT',
    'footer.privacy': 'PRIVACY POLICY',
    'footer.cookie': 'COOKIE POLICY',
    'footer.terms': 'TERMS AND CONDITIONS',
    'security': 'SECURITY POLICY', // Aggiunta
    'contact.email': 'tiziano@linguecontiziano.com',
    'translation.warning': 'This page is automatically translated from {lang}.',
    'cat-autopsia': 'ERROR AUTOPSY',
    'cat-sistemi': 'DISCIPLINE SYSTEMS',
    'cat-psicologia': 'CONFLICT PSYCHOLOGY',
    'cat-esecuzione': 'IMMEDIATE EXECUTION',
  },
  it: {
    'site.title': 'Tiziano Gasparet | Strategia',
    'site.description': 'Analisi profonda dei sistemi di disciplina e dell’autopsia dell’errore.',
    'nav.logo': 'LINGUE CON TIZIANO',
    'nav.home': 'HOME',
    'nav.blog': 'BLOG',
    'nav.about': 'CHI SONO',
    'nav.categories': 'CATEGORIE',
    'nav.search': 'CERCA',
    'nav.menu': 'MENU',
    'footer.contact': 'CONTATTO STRATEGICO',
    'footer.privacy': 'PRIVACY POLICY',
    'footer.cookie': 'COOKIE POLICY',
    'footer.terms': 'TERMINI E CONDIZIONI',
    'security': 'SICUREZZA', // Aggiunta
    'contact.email': 'tiziano@linguecontiziano.com',
    'translation.warning': 'Questa pagina è tradotta automaticamente da {lang}.',
    'cat-autopsia': 'AUTOPSIA DELL’ERRORE',
    'cat-sistemi': 'SISTEMI DI DISCIPLINA',
    'cat-psicologia': 'PSICOLOGIA DEL CONFLITTO',
    'cat-esecuzione': 'ESECUZIONE IMMEDIATA',
  },
  es: {
    'site.title': 'Tiziano Gasparet | Estrategia',
    'site.description': 'Análisis profundo de sistemas de disciplina y autopsia del error.',
    'nav.logo': 'IDIOMAS CON TIZIANO',
    'nav.home': 'INICIO',
    'nav.blog': 'BLOG',
    'nav.about': 'SOBRE MÍ',
    'nav.categories': 'CATEGORÍAS',
    'nav.search': 'BUSCAR',
    'nav.menu': 'MENÚ',
    'footer.contact': 'CONTACTO ESTRATÉGICO',
    'footer.privacy': 'POLÍTICA DE PRIVACIDAD',
    'footer.cookie': 'POLÍTICA DE COOKIES',
    'footer.terms': 'TÉRMINOS Y CONDICIONES',
    'security': 'SEGURIDAD', // Aggiunta
    'contact.email': 'tiziano@linguecontiziano.com',
    'translation.warning': 'Esta página está traducida automáticamente desde {lang}.',
    'cat-autopsia': 'AUTOPSIA DEL ERROR',
    'cat-sistemi': 'SISTEMAS DE DISCIPLINA',
    'cat-psicologia': 'PSICOLOGÍA DEL CONFLICTO',
    'cat-esecuzione': 'EJECUCIÓN INMEDIATA',
  },
} as const;

export function useTranslations(lang: LangCode) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    const currentTranslations = ui[lang] || ui[defaultLang];
    return currentTranslations[key] || ui[defaultLang][key] || key;
  }
}