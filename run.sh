#!/usr/bin/env bash

set -e

DOCKERFILE_HASH=$(md5 -q ./Dockerfile)
CONTAINER_NAME=image-fun
IMAGE_NAME=${CONTAINER_NAME}:${DOCKERFILE_HASH}

if [[ $(docker inspect --format . ${IMAGE_NAME} 2>&1) != "." ]]; then
  echo "--- BUILDING image '${IMAGE_NAME}'---"
  docker build -t ${IMAGE_NAME} -f Dockerfile .
fi

docker run \
    --rm \
    -it \
    --name ${CONTAINER_NAME} \
    --volume $(pwd):/app:cached \
    -w /app \
    -p 3000:3000 \
    -u node \
    ${IMAGE_NAME} "$@"