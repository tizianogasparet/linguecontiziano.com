// src/pages/[...lang]/feed.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { supportedLanguages } from '@/i18n/config';
import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ params, site }) => {
  const lang = Array.isArray(params.lang) ? params.lang[0] : params.lang;
  
  if (!supportedLanguages.includes(lang as any)) {
    return new Response(null, { status: 404 });
  }

  const posts = await getCollection('blog', ({ data }) => 
    data.lang === lang && !data.draft
  );
  
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  const titles = {
    en: 'Tiziano Gasparet | Strategy',
    it: 'Tiziano Gasparet | Strategia',
    es: 'Tiziano Gasparet | Estrategia',
  };

  const descriptions = {
    en: 'Deep analysis of discipline systems, error autopsy, and conflict psychology.',
    it: 'Analisi profonda dei sistemi di disciplina e dell’autopsia dell’errore.',
    es: 'Análisis profundo de sistemas de disciplina y autopsia del error.',
  };

  return rss({
    title: titles[lang as keyof typeof titles] || titles.en,
    description: descriptions[lang as keyof typeof descriptions] || descriptions.en,
    site: site!,
    items: sortedPosts.map(post => {
      const idParts = post.id.split('/');
      const catKey = idParts[2];
      const slug = idParts[3];

      const catSlugs: Record<string, Record<string, string>> = {
        en: {
          'cat-autopsia': 'error-autopsy',
          'cat-sistemi': 'discipline-systems',
          'cat-psicologia': 'conflict-psychology',
          'cat-esecuzione': 'immediate-execution',
        },
        it: {
          'cat-autopsia': 'autopsia-dell-errore',
          'cat-sistemi': 'sistemi-di-disciplina',
          'cat-psicologia': 'psicologia-del-conflitto',
          'cat-esecuzione': 'esecuzione-immediata',
        },
        es: {
          'cat-autopsia': 'autopsia-del-error',
          'cat-sistemi': 'sistemas-de-disciplina',
          'cat-psicologia': 'psicologia-del-conflicto',
          'cat-esecuzione': 'ejecucion-inmediata',
        },
      };

      const catSlug = catSlugs[lang]?.[catKey] || catKey;
      const prefix = lang === 'en' ? '' : `/${lang}`;

      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        content: post.body,
      };
    }),
    customData: `<language>${lang}</language>`,
  });
};