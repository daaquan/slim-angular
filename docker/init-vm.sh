#!/bin/bash

composer install

npm install

./node_modules/gulp/bin/gulp.js watch

exit 0
