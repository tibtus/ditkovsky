#!/bin/sh
ssh-add --apple-load-keychain
#---------------------------------------------------
date
git pull
echo "Backend update "$(npm version patch -git-tag-version false)
date
git show --stat --oneline HEAD
git commit -a -m "$(git log -1 --pretty=%B)"

git push

IP=$(ifconfig en1 | grep 'inet ' | cut -d' ' -f2 | awk '{ print $1}')
echo $IP



