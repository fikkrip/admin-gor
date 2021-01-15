#!/bin/bash
git checkout .
git pull --no-edit
yarn
yarn run build

DEFAULT_MODE=${1:-"dev"}

if [ $DEFAULT_MODE != "dev" ] ; then
  if [ $DEFAULT_MODE == "pro" ] ; then
    ./reload_services.sh $DEFAULT_MODE
  else
    ./reload_services.sh "dev"
  fi
else
  ./reload_services.sh $DEFAULT_MODE
fi

pm2 flush
pm2 reset all