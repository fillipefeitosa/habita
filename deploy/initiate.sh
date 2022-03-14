#!/bin/bash
set -e

### Configuration ###

DOCKERHUB=fillipefeitosa/habita-prod
TAG=1.8.3

### Library ###
echo "Habita deployment script"
echo "Should run from MeteorApp root folder: ./deploy/initiate.sh"

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

# Legacy mode for MeteorJs needs TLS config
# export NODE_TLS_REJECT_UNAUTHORIZED=0
run meteor build --server-only ../output
run mv ../output/*.tar.gz ./deploy/package.tar.gz
run tar zxf ./deploy/package.tar.gz -C .

# Rebuild image with latest meteorapp bundle
run cp ./deploy/habita.conf .
run docker build . -t $DOCKERHUB:$TAG -f deploy/Dockerfile
run docker push $DOCKERHUB:$TAG

# Clean folder from unecessary files and folders
run rm -rf bundle/
run rm ./deploy/package.tar.gz
run rm habita.conf
