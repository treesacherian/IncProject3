FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
RUN chown -R node:node /app

CMD [ "npm", "start" ]
