FROM node:12.18.1

ENV NODE_ENV=production

WORKDIR /app

COPY . /app

RUN npm install webpack

RUN npm install

RUN npm run build

FROM hashicorp/terraform

ENTRYPOINT ["tail"]

CMD ["-f","/dev/null"]