#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run storybook:build

# navigate into the build output directory
cd target/storybook

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/project-aphrodite/front-end-storybook.git master:master-deploy

cd -