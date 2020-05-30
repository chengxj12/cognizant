FROM node:13

RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]