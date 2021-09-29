FROM node:latest
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
EXPOSE 3000
CMD ["yarn", "test", "&&", "yarn", "start"]