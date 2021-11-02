FROM  node:14-buster

RUN npm i gatsby-cli -g

WORKDIR /app

COPY . ./app

RUN npm i

RUN gatsby build

CMD ["/bin/bash", "-c", "gatsby serve --host 0.0.0.0 --port 9000"]
