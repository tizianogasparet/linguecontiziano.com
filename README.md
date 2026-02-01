Ecco il **`README.md` completo, professionale, chiaro e antifragile**, scritto per durare anni.

---

# 📘 Il Libro di Tiziano — Guida del Progetto

Benvenuto nel codice del sito.  
Questo non è un semplice sito web: è un **sistema monolitico, antifragile e agnostico**.  
Ogni parte è stata progettata per essere **immutabile**: una volta costruita, non si rompe mai.

---

## 🧭 Filosofia di Base

- **Niente SEO**: il sito è invisibile ai motori di ricerca (`robots.txt` blocca tutto).
- **Niente tracciamento**: zero analytics, zero cookie, zero dipendenze esterne.
- **Contenuto puro**: pensato per lettori umani e feed RSS.
- **Internazionalizzazione agnostica**: ogni lingua è trattata allo stesso modo, senza privilegi.

---

## 📂 Struttura del Progetto

La cartella `src/` è organizzata come una **biblioteca perfetta**:

```
src/
├── pages/          → Punti di ingresso (URL)
├── content/        → Contenuti veri (testi in .md)
├── components/     → Mattoncini riutilizzabili
├── i18n/           → Sistema di traduzione
├── styles/         → Stile globale (Monolith)
└── layouts/        → Cornice di ogni pagina
```

### 🔹 `pages/` — Le Porte del Sito
- Ogni file qui diventa un URL.
- La struttura `[...lang]/` gestisce automaticamente le lingue.
- Esempio:  
  - `src/pages/[...lang]/index.astro` → `/`, `/it`, `/es`

### 🔹 `content/` — Il Forziere dei Testi
- Tutti i contenuti sono in Markdown (`.md`), mai in HTML.
- Organizzati per tipo: `blog/`, `legal/`, `pages/`.
- Ogni file ha un frontmatter con `lang` e `title`.

### 🔹 `components/` — I Mattoncini Lego
- `HeaderDesktop.astro` + `HeaderMobile.astro`: testa del sito.
- `Footer.astro`: piedi del sito.
- `CategoryDropdown.astro`, `LanguageSwitcher.astro`: navigazione.

### 🔹 `i18n/` — Il Traduttore Universale
- `config.ts`: definisce le lingue supportate.
- `routes.ts`: mappa gli URL per ogni lingua.
- `ui.ts`: contiene tutte le traduzioni (menu, footer, ecc.).

### 🔹 `styles/global.css` — Il Rigore Cromatico
- Solo variabili CSS: `--gold`, `--bg-monolith`, ecc.
- Nessun hardcoded, nessun framework esterno.
- Responsive con `clamp()` e media query.

---

## 🛠️ Come Aggiungere una Nuova Lingua (es. Francese `fr`)

Il sistema è **agnostico**: ogni lingua segue le stesse regole.

### Passo 1: Registra la lingua
In `src/i18n/config.ts`:
```ts
export const LANGUAGES_TUPLE = ['en', 'it', 'es', 'fr'] as const;
// Aggiungi anche in `languages`
```

### Passo 2: Traduci l’interfaccia
In `src/i18n/ui.ts`, aggiungi la sezione `fr`:
```ts
fr: {
  'site.title': 'Tiziano Gasparet | Stratégie',
  'nav.logo': 'LANGUES AVEC TIZIANO',
  // ... tutte le chiavi
}
```

### Passo 3: Mappa gli URL
In `src/i18n/routes.ts`, aggiungi la sezione `fr`:
```ts
fr: {
  home: '',
  blog: 'blog',
  about: 'a-propos',
  privacy: 'politique-de-confidentialite',
  // ... tutte le route
  'cat-autopsia': 'autopsie-de-l-erreur',
  // ...
},
```

### Passo 4: Crea i contenuti
- `src/content/pages/fr/home.md`
- `src/content/legal/fr/privacy-policy.md`
- `src/content/blog/fr/...`

> ✅ **Importante**: ogni file `.md` deve avere nel frontmatter:
> ```md
> ---
> lang: fr
> title: "Titolo"
> translationId: "id-univoco"
> ---
> ```

### Passo 5: Verifica
- Avvia il dev server: `pnpm dev`
- Visita `/fr` → tutto deve essere in francese
- Cambia lingua → i link devono funzionare

---

## 🛠️ Operazioni Comuni

| Azione | File da modificare |
|-------|-------------------|
| **Cambiare un testo nell’interfaccia** | `src/i18n/ui.ts` |
| **Modificare un testo legale** | `src/content/legal/{lang}/...` |
| **Aggiungere una categoria al blog** | `src/i18n/routes.ts` + `ui.ts` |
| **Cambiare colori o font** | `src/styles/global.css` |
| **Aggiornare il menu** | `HeaderDesktop.astro` / `HeaderMobile.astro` |

---

## ⚠️ Regola d’Oro

> **Ogni nuova pagina o contenuto deve essere registrato in `routes.ts` e `ui.ts`.**  
> Se non lo fai, il sistema di cambio lingua **si rompe silenziosamente**.

Il tuo sito non ha "magia": ogni connessione è esplicita, controllata e prevedibile.

---

## 🚀 Per Sviluppatori

- **Build statico**: `pnpm astro build`
- **Dev server**: `pnpm astro dev`
- **RSS feed**: disponibile su `/feed.xml` e `/{lang}/feed.xml`
- **Deploy**: compatibile con qualsiasi host statico (Cloudflare, Netlify, VPS)

---

## 💎 Conclusione

Questo sistema è stato costruito per **durare**.  
Non cerca attenzione, non insegue trend, non si adatta a piattaforme esterne.  
È un **monolito di contenuto puro**, accessibile solo a chi sa dove guardare.

**Benvenuto nella biblioteca.**