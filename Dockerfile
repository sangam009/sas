# From https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# This is multistage docker file which will help in future to create
#Base Image seprate and worker image seprate
FROM node:12 as builder
#echo node version
RUN node -v 

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

FROM node:12-slim

# Create app directory
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

# Bundle app source
COPY . .

# Chown all the files to the node user
RUN chown -R node:node /usr/src/app .

#Change to the node user
USER node

EXPOSE 3000
CMD npm run start