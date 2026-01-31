// src/pages/feed.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

// ✅ SSR: nessun getStaticPaths()
export const prerender = false;

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: 'Tiziano Gasparet | Strategy',
    description: 'Deep analysis of discipline systems, error autopsy, and conflict psychology.',
    site: site!,
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/${post.id.replace(/\.md$/, '')}`, // ✅ .md → no estensione
      content: post.body, // ✅ contenuto completo
    })),
  });
};