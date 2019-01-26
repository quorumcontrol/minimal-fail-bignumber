#!/usr/bin/env bash
set -x -e

pushd `dirname $BASH_SOURCE[0]`
trap popd EXIT

npm install
node_modules/parcel/bin/cli.js build -t node --no-minify --bundle-node-modules index.js

node dist/index.js