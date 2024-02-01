FROM node:lts-alpine

WORKDIR /usr

COPY package*.json .
COPY config.js .
COPY .env.production.json .

RUN npm ci --omit=dev

WORKDIR /usr/src

COPY ./dist .

EXPOSE 8000

CMD [ "npm", "run", "start:server" ]
