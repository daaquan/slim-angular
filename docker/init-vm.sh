#!/bin/bash

composer install

chown -R www-data:www-data logs

npm install

./node_modules/gulp/bin/gulp.js watch

exit 0
