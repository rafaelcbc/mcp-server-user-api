# Dockerfile para aplicação Node.js/TypeScript
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:22-alpine
WORKDIR /app
COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
RUN npm install --omit=dev --ignore-scripts
EXPOSE 3000
ENV NODE_ENV=production
CMD ["node", "dist/index.js"] 