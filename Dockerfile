FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# Copy the secret .env file Render injects
RUN --mount=type=secret,id=VITE_TURNSTILE_SITE_KEY \
    cp /etc/secrets/.env .env

RUN pnpm build

FROM nginx:1.27-alpine AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]