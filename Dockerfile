FROM node:22-alpine
WORKDIR /usr/portfolioXP
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8080
CMD [ "node", "dist/index.js"]