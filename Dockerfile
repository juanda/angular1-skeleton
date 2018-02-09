FROM node:8.9.4

WORKDIR /app

COPY package*.json ./

RUN npm install grunt -g

RUN npm install bower -g

RUN npm install

COPY . /app

EXPOSE 9000

CMD [ "grunt", "serve" ]
