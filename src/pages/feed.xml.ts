// src/pages/feed.xml.ts
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { supportedLanguages, defaultLang, type LangCode } from '@/i18n/config';
import { ui } from '@/i18n/ui';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

export async function getStaticPaths() {
  return supportedLanguages.map(lang => ({ params: { lang } }));
}

const md = new MarkdownIt({ html: false, linkify: false, typographer: true });
const sanitizeOptions = {
  allowedTags: ['p', 'strong', 'em', 'br', 'ul', 'ol', 'li', 'blockquote'],
  allowedAttributes: {},
  disallowedTagsMode: 'discard' as const,
};

export async function GET({ params, site }: any) {
  const lang = params.lang as LangCode;
  const posts = await getCollection('blog', ({ data }) => 
    data.lang === lang && !data.draft
  );

  // ✅ Await the rss() promise
  const rssResponse = await rss({
    title: ui[lang]?.['site.title'] || ui.en['site.title'],
    description: ui[lang]?.['site.description'] || ui.en['site.description'],
    site: site!,
    items: posts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      content: sanitizeHtml(md.render(post.body || ''), sanitizeOptions),
    })),
    customData: `<language>${lang}</language>`,
  });

  // ✅ Estrai body e headers
  const body = await rssResponse.text();
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}