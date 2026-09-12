FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npx prisma generate --config prisma.config.ts

EXPOSE 3000 5555

ENV NODE_ENV=development

CMD ["sh", "-c", "npx prisma db push --config prisma.config.ts && npx prisma db seed --config prisma.config.ts && npm run dev"]
