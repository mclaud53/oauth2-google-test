FROM node:18.12.1-slim

WORKDIR /application

COPY . .

RUN npm install -g npm@9.2.0
RUN npm install

CMD ["node", "."]

EXPOSE 3000
