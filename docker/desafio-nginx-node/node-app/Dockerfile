FROM node:alpine

WORKDIR /app

COPY /app-data .

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]