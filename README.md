# The web stack

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/1f46b876-c656-430a-a510-57aa52b86837/big.png)](https://insight.sensiolabs.com/projects/1f46b876-c656-430a-a510-57aa52b86837)
[![Build Status](https://travis-ci.org/alexdebril/the-web-stack.svg?branch=master)](https://travis-ci.org/alexdebril/the-web-stack)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/alexdebril/the-web-stack/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/alexdebril/the-web-stack/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/alexdebril/the-web-stack/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/alexdebril/the-web-stack/?branch=master)

Use this skeleton application to quickly setup and start working on a new Slim Framework 3 application with Angular.js. This application uses the latest Slim 3 with the PHP-View template renderer. It also uses the Monolog logger.

## Install the Application

Run this command from the directory in which you want to install your new application.

    php composer.phar create-project debril/the-web-stack [my-app-name]

Replace `[my-app-name]` with the desired directory name for your new application. You'll want to:

* Point your virtual host document root to your new application's `public/` directory.
* Ensure `logs/` is web writeable.

To run the application in development, you can also run this command. 

	php composer.phar start

Run this command to run the test suite

	php composer.phar test

That's it!
