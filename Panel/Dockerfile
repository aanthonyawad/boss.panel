FROM node:latest

#Create app dir
WORKDIR /src/app

#Install app dependencies
#A wildcard is used to ensure both package.json and package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

#if you are building your code for production
# RUN npm install -only=production

#Bundle app source
COPY . .

RUN npm install

RUN npm run build



EXPOSE 4000
CMD node dist/server.js



