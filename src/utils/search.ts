import { getCollection } from 'astro:content';
import { useTranslations } from '@/i18n/ui';
import { type LangCode } from '@/i18n/config';
import { getLocalizedPath } from '@/i18n/routes';

export async function performSearch(query: string, lang: LangCode) {
  const q = query.toLowerCase();
  const posts = await getCollection('blog', ({ data }) => data.lang === lang && !data.draft);
  const t = useTranslations(lang);

  return posts
    .filter(p => p.data.title.toLowerCase().includes(q) || p.data.description.toLowerCase().includes(q))
    .slice(0, 8) 
    .map(p => {
      const postSlug = p.id.split('/').pop()?.replace(/\.(mdx|md)$/, '') || "";
      const catKey = p.data.category;
      
      return {
        title: p.data.title,
        categoryLabel: t(catKey as any), 
        url: getLocalizedPath(lang, 'blog', postSlug)
      };
    });
}