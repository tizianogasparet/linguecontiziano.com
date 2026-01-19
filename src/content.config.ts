import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const langEnum = z.enum(['en', 'it', 'es']);
const minimalSchema = z.object({
  translationId: z.string(),
  lang: langEnum,
  title: z.string(),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: minimalSchema.extend({
    description: z.string(),
    pubDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    category: z.enum(['cat-autopsia', 'cat-sistemi', 'cat-psicologia', 'cat-esecuzione']),
    draft: z.boolean().default(false),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: minimalSchema.extend({ description: z.string() }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/legal' }),
  schema: minimalSchema.extend({ updateDate: z.coerce.date() }),
});

export const collections = { blog, pages, legal };