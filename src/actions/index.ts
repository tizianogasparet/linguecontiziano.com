import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { performSearch } from '@/utils/search';

/**
 * Azioni server centralizzate.
 */
export const server = {
  search: defineAction({
    input: z.object({
      query: z.string().min(2),
      lang: z.enum(['en', 'it', 'es']),
    }),
    handler: async ({ query, lang }) => {
      try {
        const results = await performSearch(query, lang);
        return results;
      } catch (e) {
        console.error("[Search Action Error]:", e);
        return [];
      }
    }
  })
};
