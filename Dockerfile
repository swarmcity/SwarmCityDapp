FROM node:8

WORKDIR /root
RUN apt-get update
ENV HOME /root

#Copy the repo inside
COPY . .
RUN npm install -g bower polymer-cli --unsafe-perm

RUN npm install
RUN bower --allow-root install
RUN node --max-old-space-size=3072 ./node_modules/.bin/polymer build

EXPOSE 8088
CMD [ "node", "server.js" ]
