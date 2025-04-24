FROM node:18-alpine AS base

WORKDIR /app

FROM base AS dependencies
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ARG NODE_ENV=production
ARG NEXT_PUBLIC_SKIP_DB_CONNECTION=true
ARG NEXT_SKIP_SSG=true
ARG DB_URL

ENV NODE_ENV=${NODE_ENV}
ENV NEXT_PUBLIC_SKIP_DB_CONNECTION=${NEXT_PUBLIC_SKIP_DB_CONNECTION}
ENV NEXT_SKIP_SSG=${NEXT_SKIP_SSG}
ENV DB_URL=${DB_URL}

RUN npm run build

FROM base AS runner
ENV NODE_ENV=production

ENV NEXT_PUBLIC_SKIP_DB_CONNECTION=true
ENV NEXT_SKIP_SSG=true
ENV DB_URL=""

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER node

EXPOSE 3000

ENV PORT=3000

CMD ["node", "server.js"] 