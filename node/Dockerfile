FROM node:8

RUN npm i -g @angular/cli@7.0.6

# Create and define the node_modules's cache directory.
RUN mkdir -p /usr/src/cache/server \
    && mkdir -p /usr/src/cache/webapp

WORKDIR /usr/src/cache/server
COPY server/package.json ./
COPY server/package-lock.json ./
RUN npm install

WORKDIR /usr/src/cache/webapp
COPY webapp/package.json ./
COPY webapp/package-lock.json ./
RUN npm install

# Create and define the application's working directory.
RUN mkdir -p /usr/src/app/server \
    && mkdir -p /usr/src/app/webapp
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source

COPY node-entrypoint.sh /

ENTRYPOINT [ "/node-entrypoint.sh" ]