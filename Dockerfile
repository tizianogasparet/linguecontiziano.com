# 1. STAGE BASE: Setup Node
FROM node:25-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm install -g pnpm

# 2. STAGE BUILD: Compilazione
FROM base AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm run build

# 3. STAGE RUNTIME: Immagine finale Rootless
FROM base AS runtime
WORKDIR /app
# Copiamo solo il necessario per l'esecuzione
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.astro ./.astro 

ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]