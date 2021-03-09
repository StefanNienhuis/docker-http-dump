FROM node:14-alpine

WORKDIR /app
COPY index.js .
COPY package*.json .

CMD ["npm", "start"]