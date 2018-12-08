#!/bin/bash
set -e

# if [ ! -d /usr/src/app/webapp/dist ]; then
#     cp -r /usr/src/cache/server/node_modules/. /usr/src/app/server/node_modules/
#     cp -r /usr/src/cache/webapp/node_modules/. /usr/src/app/webapp/node_modules/
#     cd /usr/src/app/webapp
#     ng build
# fi
cd /usr/src/app/server
npm start

exec "$@"