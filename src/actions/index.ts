import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { performSearch } from '@/utils/search';

/**
 * SERVER ACTIONS - IL MONOLITO
 * Punto di accesso centralizzato per le operazioni server-side.
 */
export const server = {
  search: defineAction({
    /**
     * VALIDAZIONE INPUT
     * Utilizziamo lo schema Zod per garantire che nessuna query malformata
     * o lingua non supportata penetri nel sistema di ricerca.
     */
    input: z.object({
      query: z.string().min(2), // Impediamo ricerche troppo brevi a livello server
      lang: z.enum(['en', 'it', 'es']),
    }),

    /**
     * ESECUZIONE
     * Interroga l'utility performSearch e gestisce eventuali anomalie 
     * nel recupero delle collezioni Content Layer.
     */
    handler: async ({ query, lang }) => {
      try {
        // Esecuzione del setaccio
        const results = await performSearch(query, lang);
        return results;
      } catch (e) {
        // Log dell'errore per monitoraggio interno
        console.error("[Search Action Error]:", e);
        
        /**
         * Fallback di sicurezza: restituiamo un array vuoto per evitare 
         * il crash del frontend durante l'interazione dell'utente.
         */
        return [];
      }
    }
  })
};