# syntax=docker/dockerfile:1

FROM node:20
WORKDIR /app
COPY . .
RUN npm ci
EXPOSE 3000
EXPOSE 8000

RUN npm run build

CMD ./bin/start.sh
