FROM node:12.14 as build

WORKDIR /home/app

COPY package.json .

RUN yarn install

ARG REACT_APP_API

COPY . .

RUN yarn run build

FROM nginx:alpine

COPY --from=build /home/node/build /usr/share/nginx/html
