FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000 5555

CMD ["sh", "-c", "npm install && npx prisma generate --config prisma.config.ts && npx prisma db push --config prisma.config.ts && npx prisma db seed --config prisma.config.ts && npm run dev"]
