# Nuragio

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/482685e6-d5b5-4801-809e-4591743a1b96/small.png)](https://insight.sensiolabs.com/projects/482685e6-d5b5-4801-809e-4591743a1b96)
[![Build Status](https://travis-ci.org/alexdebril/nuragio.svg?branch=master)](https://travis-ci.org/alexdebril/nuragio)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/alexdebril/nuragio/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/alexdebril/nuragio/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/alexdebril/nuragio/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/alexdebril/nuragio/?branch=master)

Use this skeleton application to quickly setup and start working on a new Slim Framework 3 application with Angular.js. This application uses the latest Slim 3 with the PHP-View template renderer. It also uses the Monolog logger.

## Install the Application

Run this command from the directory in which you want to install your new application.

    php composer.phar create-project debril/nuragio [my-app-name]

Replace `[my-app-name]` with the desired directory name for your new application. You'll want to:

* Point your virtual host document root to your new application's `public/` directory.
* Ensure `logs/` is web writeable.

To run the application in development, you can also run this command. 

	php composer.phar start

Run this command to run the test suite

	php composer.phar test

That's it!
