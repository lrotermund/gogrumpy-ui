FROM node:13.12-alpine as BUILD

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=BUILD /app/dist/ /app/public/
COPY docker/nginx_site_production.conf /etc/nginx/conf.d/default.conf

EXPOSE 5000
