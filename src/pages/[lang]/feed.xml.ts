import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { LANGUAGES_TUPLE, type LangCode } from '@/i18n/config';
import { ui } from '@/i18n/ui';

export async function getStaticPaths() {
  return LANGUAGES_TUPLE.map((lang) => ({ params: { lang } }));
}

export async function GET(context: any) {
  const { lang } = context.params as { lang: LangCode };
  const blogEntries = await getCollection('blog', ({ data }) => {
    return data.lang === lang && !data.draft;
  });

  return rss({
    title: ui[lang]['site.title'],
    description: ui[lang]['site.description'],
    site: context.site,
    items: blogEntries.map((post) => {
      // Calcolo dello slug: rimuove il prefisso della lingua dall'id del file
      const [, ...slugParts] = post.id.split('/');
      const slug = slugParts.join('/').replace(/\.md$/, '');
      const prefix = lang === 'en' ? '' : `/${lang}`;

      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `${prefix}/blog/${slug}`,
      };
    }),
  });
}