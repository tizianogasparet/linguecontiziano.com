# 1. STAGE BASE: Configurazione Node e pnpm
FROM node:25-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Installiamo pnpm globalmente (più affidabile di corepack nelle immagini slim)
RUN npm install -g pnpm

# 2. STAGE BUILD: Installazione e compilazione
FROM base AS build
WORKDIR /app

# Copiamo i file di configurazione per sfruttare la cache di Docker
COPY package.json pnpm-lock.yaml* ./

# Installazione dipendenze con cache per velocizzare le build successive
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

# Copiamo tutto il resto del codice e avviamo la build
COPY . .
RUN pnpm run build

# 3. STAGE RUNTIME: L'immagine finale che gira sulla VPS
FROM base AS runtime
WORKDIR /app

# Copiamo solo quello che serve davvero per l'esecuzione
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules

# FONDAMENTALE PER ASTRO 5 CONTENT LAYER
# Senza questa cartella Astro non trova i contenuti processati
COPY --from=build /app/.astro /app/.astro 

# Configurazione ambiente di produzione
ENV HOST=0.0.0.0
ENV PORT=80
ENV NODE_ENV=production
EXPOSE 80

# Avvio dell'applicazione
CMD ["node", "./dist/server/entry.mjs"]