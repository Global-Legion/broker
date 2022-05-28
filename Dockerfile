FROM node:alpine
COPY . .
RUN	npm install
RUN rm -r src
CMD node dist/server.js
