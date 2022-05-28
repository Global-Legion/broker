FROM node:alpine
COPY . .
RUN	npm install
CMD node dist/server.js
