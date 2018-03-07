FROM node:8.9.4-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN YARN_CACHE_FOLDER=/dev/shm/yarn_cache yarn --production

COPY production-server /usr/src/app/production-server
COPY locales /usr/src/app/locales
COPY .next /usr/src/app/.next

EXPOSE 3000

USER node

CMD [ "yarn", "start" ]
