FROM node:12-alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

ENV PORT=8080

CMD [ "node", "app.js" ]