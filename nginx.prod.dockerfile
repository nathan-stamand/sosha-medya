FROM node:lts-alpine as build
WORKDIR /app
COPY client/package*.json ./
RUN npm i --omit=dev
COPY client/ .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
