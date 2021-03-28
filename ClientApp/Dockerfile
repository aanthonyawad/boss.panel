#stage 1 building the app 
FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

#stage 2 running the app on alpine image
FROM nginx:alpine
COPY --from=node /app/dist/ClientApp /usr/share/nginx/html