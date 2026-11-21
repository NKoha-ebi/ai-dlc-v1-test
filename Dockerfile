FROM node:24-bookworm-slim AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/cloudPatient*.ts /app/localPatientApi.ts ./
COPY --from=build /app/src/supportFlow.ts ./src/
USER node
CMD ["node", "cloudPatientServer.ts"]
