import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context: any) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Lingue con Tiziano',
    description: 'Scacchi, Tecnologia e Lingue sotto un unico Monolito',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // Genera link come /it/blog/titolo o /blog/titolo per inglese
      link: `${post.id.split('/')[0] === 'en' ? '' : '/' + post.id.split('/')[0]}/blog/${post.id.split('/').slice(1).join('/')}`,
    })),
  });
}