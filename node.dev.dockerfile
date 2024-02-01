FROM node:lts-alpine

WORKDIR /usr

COPY package.json .
COPY config.js .
COPY .env.development.json .
COPY tsconfig.json .

RUN npm install

WORKDIR /usr/src

COPY ./src .

EXPOSE 8000

CMD [ "npm", "run", "start:dev-server" ]
