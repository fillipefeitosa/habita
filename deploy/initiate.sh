#!/bin/bash
set -e

### Configuration ###

SERVER=meteorapp@dcspt-drivitup.ua.pt
APP_DIR=/var/www/habita
KEYFILE=
REMOTE_SCRIPT_PATH=/tmp/deploy-myapp.sh
DOCKERHUB=fillipefeitosa/habita-prod
TAG=1.8.3

### Library ###
echo "Habita deployment script"

function run()
{
  echo "Running: $@"
  "$@"
}


### Automation steps ###

if [[ "$KEYFILE" != "" ]]; then
  KEYARG="-i $KEYFILE"
else
  KEYARG=
fi


export NODE_TLS_REJECT_UNAUTHORIZED=0
run meteor build --server-only ../output
run mv ../output/*.tar.gz ./deploy/package.tar.gz
run tar zxf ./deploy/package.tar.gz -C ./deploy

# Rebuild image with latest meteorapp bundle
# run docker build . -t $DOCKERHUB:$TAG
# run docker pull $DOCKERHUB:$TAG


# mv ../output/*.tar.gz ./package.tar.gz

# run scp $KEYARG package.tar.gz $SERVER:$APP_DIR/
# run scp $KEYARG deploy/work.sh $SERVER:$REMOTE_SCRIPT_PATH
# echo
# echo "---- Running deployment script on remote server ----"
# run ssh $KEYARG $SERVER bash $REMOTE_SCRIPT_PATH
