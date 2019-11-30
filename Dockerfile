FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --production

EXPOSE 8080

CMD [ "node", "index.js" ]
