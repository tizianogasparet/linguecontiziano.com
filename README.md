Ecco la guida definitiva del progetto, scritta in modo così semplice che chiunque possa capire come muoversi tra le cartelle.

---

# 📘 Il Libro di Tiziano (Guida del Progetto)

Benvenuto nel codice del sito! Immagina che questo progetto sia una **grande biblioteca organizzata**. Ogni cartella è uno scaffale e ogni file è un pezzo del puzzle.

## 📂 Cosa c'è dentro la cartella `src`?

Ecco la mappa per non perderti:

* **`pages/` (Le Porte del Sito):** Qui ci sono gli indirizzi che scrivi nel browser.
* Se il file è da solo (es. `about-me.astro`), lo vedi in **Inglese**.
* Se è dentro `/it/` (es. `chi-sono.astro`), lo vedi in **Italiano**.
* Se è dentro `/es/` (es. `sobre-mi.astro`), lo vedi in **Spagnolo**.


* **`content/` (Il Forziere dei Testi):** Qui ci sono i veri testi (i file `.md`). Se vuoi cambiare quello che c'è scritto nella Privacy o nella Home, devi scrivere qui dentro.
* **`components/` (I Mattoncini Lego):** Qui ci sono l'**Header** (la testa del sito) e il **Footer** (i piedi del sito). Li abbiamo fatti una volta sola e si ripetono su tutte le pagine.
* **`i18n/` (Il Traduttore):** Qui c'è il file `ui.ts` che contiene i nomi dei pulsanti (es: "Home" o "Chi siamo").
* **`layouts/` (La Cornice):** Qui c'è il `MainLayout.astro`, che decide come deve essere fatta la cornice del sito (sfondo, font, ecc.).

---

## 🛠️ Dove devo toccare per cambiare qualcosa?

### 1. Per aggiungere una nuova lingua (es. Francese `fr` 🇫🇷)

Devi agire su questi file come un chirurgo:

1. **`astro.config.mjs`:** Aggiungi `'fr'` alla lista delle lingue.
2. **`src/i18n/ui.ts`:** Scrivi le traduzioni dei menu in francese.
3. **`src/components/Header.astro` & `Footer.astro`:**
* Cerca l'oggetto `routes`.
* Aggiungi la riga `fr` con il nome del file francese (es: `fr: 'a-propos'`).


4. **`src/pages/`:** Crea una cartella `fr` e mettici dentro i file `.astro`.
5. **`src/content/`:** Crea le cartelle `fr` dentro `legal` e `pages` per i testi.

### 2. Per cambiare il nome di una pagina (es. da "Chi sono" a "Biografia")

1. Rinomina il file in `src/pages/it/biografia.astro`.
2. Vai in `Header.astro` e aggiorna la mappa `routes`:
* Cambia `it: 'chi-sono'` in `it: 'biografia'`.
* **Importante:** Se non lo fai, il selettore della lingua "si rompe" e torna in Home!



### 3. Per cambiare i link nel Footer

1. Apri `src/components/Footer.astro`.
2. Modifica la mappa `routes` per le pagine legali.

---

## 🚀 Riassunto per "Sviluppatori Pigri"

| Se vuoi cambiare... | Vai in... |
| --- | --- |
| **I colori o i font** | `src/styles/global.css` |
| **Le parole dei bottoni** | `src/i18n/ui.ts` |
| **Il testo della Privacy** | `src/content/legal/it/privacy.md` |
| **Il menu in alto** | `src/components/Header.astro` |
| **Il logo o il nome** | `src/components/Header.astro` |

---

## 💡 Regola d'Oro del Senior

Ogni volta che crei una nuova pagina, ricordati di "registrarla" nell'oggetto `routes` dentro l'**Header**. È quel pezzetto di codice che dice: *"Ehi, la pagina X in inglese si chiama Y in italiano"*. Se lo dimentichi, il sito "perde la memoria" quando cambi lingua!

**Tutto chiaro, piccolo dev? Ora il tuo README è perfetto! Vuoi che ti aiuti a creare il file per il deploy con Docker?**