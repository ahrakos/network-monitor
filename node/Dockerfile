FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source

WORKDIR /usr/src/app/server

CMD [ "npm", "start" ]