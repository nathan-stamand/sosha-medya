FROM node:lts-alpine

WORKDIR /usr

COPY . .

RUN npm install

EXPOSE 8000

CMD [ "npm", "run", "start:dev-server" ]
