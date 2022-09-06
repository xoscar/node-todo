FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci;

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY  . .
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]