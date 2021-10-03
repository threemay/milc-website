# FROM node:12.18.1

# ENV NODE_ENV=production

# WORKDIR /app
FROM ubuntu

WORKDIR /app

COPY . /app

RUN sh s3BucketCreate.sh

ENTRYPOINT ["tail"]

