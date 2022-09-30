#!/bin/bash
_pwd=`pwd`

if [ ! -d "$_pwd/src/hooks" ]; then
  mkdir -p "$_pwd/src/hooks"
fi

cp "$_pwd/node_modules/d4dpocket/src/scripts/usePaging.js" "$_pwd/src/hooks/usePaging.js"
echo "> Done!!!"
