// src/utils/search.ts
import { getCollection } from 'astro:content';
import { useTranslations } from '@/i18n/ui';
import type { LangCode } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/routes';

export async function performSearch(query: string, lang: LangCode) {
  const q = query.toLowerCase().trim();
  if (q.length < 2) return [];

  const posts = await getCollection('blog', ({ data }) => 
    data.lang === lang && !data.draft
  );

  const t = useTranslations(lang);

  return posts
    .filter(p =>
      p.data.title.toLowerCase().includes(q) ||
      p.data.description.toLowerCase().includes(q)
    )
    .slice(0, 8)
    .map(p => {
      const slug = p.id.split('/').pop()?.replace(/\.(mdx|md)$/, '') || '';
      return {
        title: p.data.title,
        categoryLabel: t(p.data.category as any),
        url: getLocalizedPath(lang, 'blog', slug),
      };
    });
}