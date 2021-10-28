FROM  node:14-buster

RUN yarn global add gatsby-cli

WORKDIR /app

COPY . ./

RUN yarn install

RUN gatsby build

EXPOSE 9000
