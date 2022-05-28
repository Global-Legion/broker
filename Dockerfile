FROM node:alpine
COPY package.json .
COPY package-lock.json .
COPY tsconfig.json .
COPY tslint.json .
RUN	npm install --silent
COPY . .
CMD npm run start
