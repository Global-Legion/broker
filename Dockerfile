FROM node:alpine
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
RUN npm install -g typescript
RUN	npm install --silent
COPY . .
RUN npm run build
CMD node dist/server.js
