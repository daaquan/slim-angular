# slim-angular

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/482685e6-d5b5-4801-809e-4591743a1b96/small.png)](https://insight.sensiolabs.com/projects/482685e6-d5b5-4801-809e-4591743a1b96)
[![Build Status](https://travis-ci.org/alexdebril/slim-angular.svg?branch=master)](https://travis-ci.org/alexdebril/slim-angular)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/alexdebril/slim-angular/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/alexdebril/slim-angular/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/alexdebril/slim-angular/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/alexdebril/slim-angular/?branch=master)

slim-angular is a complete skeleton app based on Slim Framework and AngularJS. It is designed to start a new project with a clean and efficient code base using : 

- [Slim Framework](http://www.slimframework.com) for the server-side scripting
- [AngularJS](https://angularjs.org) for the frontend's interactions
- [Bootstrap](http://getbootstrap.com) to get a responsive web design
- [Less](http://lesscss.org) as a CSS pre-processor
- [Composer](https://getcomposer.org) to manage server-side dependencies
- [NPM](http://npmjs.org) to manage frontend dependencies
- [Gulp](http://gulpjs.com) to generated minified JS and CSS resources
- [Phing](https://www.phing.info) to build the project

## Dependencies

Your development environment must have the following to install slim-angular : 

- PHP 5.6+ or 7
- Composer
- npm

All these packages have repositories or easy-to-use installers, so please refer to their documentations to know how to get it.

## Installation

Once you have installed properly the dependencies above on your machine, just use composer to create a new project

```bash
composer create-project debril/slim-angular [my-app-name]
```

Replace `[my-app-name]` with the desired directory name for your new application. If Composer asks you about removing VCS directories, answer 'Yes' as you'll want to work in your own repository. Once the PHP packages installation is over, Composer will install npm packages and then your project is ready.

## Running

To run the application in development, cd to your project's folder and run composer start : 


```bash
cd [my-app-name]
composer start
```

Then point your browser to http://0.0.0.0:8080

## Architecture

slim-angular is designed to create efficient websites based on PHP, AngularJS and Bootstrap. The goal of slim-angular is to share responsibilities between the server-side and the frontend :

- the server-side is responsible for the business logic, the security and the application's initialization.
- the frontend is responsible for the user interface and the layout.

Which means that at the first hit the server will initialize a session, generate a lightweight HTML page and send it to the browser. Then, AngularJS will handle the user's interactions and communicate with the server when needed.

Out of the box, slim-angular is perfect for single page applications as it handles routes using `angular-route`. You may prefer to have routing on the server-side and if so, just use [Slim's routing](http://www.slimframework.com/docs/objects/router.html) instead.

### Server-Side

The backend is built with [Slim](http://www.slimframework.com/docs/), a really fast and easy to learn framework. Its purpose is to "receive an HTTP request, invoke an appropriate callback routine, and return an HTTP response".

#### public/

It has to be defined as the document root of your website. It contains `index.php` which is the front controller of your application.

#### php/

This folder contains all the server-side logic and configuration. `app` contains all your application's classes and `templates` all the templates handled by the server.

### Frontend

#### css/

Contains styles written according to the [Less](http://lesscss.org) pre-processor syntax. The files contained in `css/` are compiled and then minified into the `public/minified/styles.min.css` file.

#### js/

Contains the frontend application built with AngularJS. The files contained in `js/` are also minified, this time in the `public/minified/app.min.js` file.

## Working with slim-angular

Working in a project created wit slim-angular is easy. All the server-side logic is in the `php/` folder, styles are in `css/` and javascripts in `js/`. There's two subtilities : 

 - you need to run Gulp to build styles and javascripts into the `public/minified` folder.
 - HTTP requests must be secured using the tokenizer
 
### Gulp

Gulp is pre-configured in the project, you just need to start it : 

```shell
composer gulp
```

If Gulp is installed system-wide, you may prefer to start it without Composer : 

```shell
gulp watch
```

Now, Gulp will watch `css/` and `js/` in order to compile and/or minify static resources in the `public/minified/` folder.

### Tokenizer

The server-side relies on [slim/csrf](https://github.com/slimphp/Slim-Csrf) to protect your application against CSRF. So everytime you call the server, you'll need to "tokenize" your request by adding the security token in your arguments. And there's an [Angular service](https://github.com/alexdebril/slim-angular/blob/master/js/app.js#L3) for that, which you can inject and use like this : 

```js
// we add the tokenizer service in our controller's dependencies
HelloController.$inject = ['$http', 'tokenizer'];

// inject tokenizer in the params
function HelloController($http, tokenizer) {
    var vm = this;

    vm.hello = function (string) {
        vm.error = '';
        $http.post('/hello',
            // tokenize params
            tokenizer.tokenize({
                'string': string
            })
        )
        .then(function (response) {
            vm.result = response.data.result;
        }, function (error) {
            vm.error = error;
        });
    };
}
```

## Build and deployment

slim-angular includes a [Phing XML script](https://github.com/alexdebril/slim-angular/blob/master/build.xml) to build your application in an easy-to-deploy archive. The main steps are : 

 - copy `php/`and `public/` in a packaging folder called `dist/package/`
 - in the packaging folder : install dependencies with Composer in production mode (no development dependencies and with an optimized autoloader)
 - rename `public/minified/` to prevent cache issues
 - create a Zip archive at the root of your application
 
The archive contains only the needed files for your application to work in a production environnment. Start the build with the following command : 

```shell
composer build
```

## Documentation

 - Slim's [first app](http://www.slimframework.com/docs/tutorial/first-app.html) Tutorial
 - Angular's [Tutorial](https://docs.angularjs.org/tutorial)
 - CodeSchool's excellent [course](https://www.codeschool.com/courses/shaping-up-with-angular-js) on AngularJS

## Have fun with slim-angular

Feel free to [open an issue](https://github.com/alexdebril/slim-angular/issues) if you have any question or suggestion about slim-angular
