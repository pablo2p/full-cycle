FROM node:14.15.4-alpine3.12

RUN npm install -g @nestjs/cli@8.0.0

WORKDIR /home/node/app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# inicializando a API
CMD [ "npm","run", "start:dev" ]