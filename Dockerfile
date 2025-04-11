# base image
FROM oven/bun:1.2.2 AS base

# Deps installer
FROM base AS deps
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

# Builder
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

FROM base AS runner
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 4321

ENTRYPOINT [ "bun", "./dist/server/entry.mjs" ]