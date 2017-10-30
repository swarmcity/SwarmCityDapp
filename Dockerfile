FROM node:6
WORKDIR /root
RUN apt-get update && \
    apt-get install git
ENV HOME /root  

COPY server.js /root/
COPY build /root/build
COPY node_modules /root/node_modules

EXPOSE 8080
CMD [ "node", "server.js" ]
