#stage 1 building the app 
FROM node:latest as node
WORKDIR /
COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build


#stage 2 running the app on alpine image
CMD ["node", "dist/server.js"]