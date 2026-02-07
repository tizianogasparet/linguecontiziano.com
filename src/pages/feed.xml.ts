import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '@/i18n/ui';

export async function GET(context: any) {
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  
  return rss({
    title: ui.en['site.title'],
    description: ui.en['site.description'],
    site: context.site,
    items: blog.map((post) => {
      // post.id è tipo "it/titolo.md" o "en/title.md"
      const [lang, ...slugParts] = post.id.split('/');
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