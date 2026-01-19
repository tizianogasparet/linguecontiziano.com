FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /app
WORKDIR /app
# Installazione dipendenze con cache
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base AS runtime
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/node_modules /app/node_modules
# COPIA FONDAMENTALE PER ASTRO 5 CONTENT LAYER:
COPY --from=build /app/.astro /app/.astro 

ENV HOST=0.0.0.0
ENV PORT=80
ENV NODE_ENV=production
EXPOSE 80

CMD ["node", "./dist/server/entry.mjs"]