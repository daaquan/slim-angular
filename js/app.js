var app = angular.module('myApp', ['ui.bootstrap', 'ngRoute', 'ngCookies']);

var Tokenizer = function($cookies){
    return {
        tokenize: function(params) {
            console.log(params);
            Object.assign(params, {
                'csrf_name': $cookies.get('csrf_token_name'),
                'csrf_value': $cookies.get('csrf_token_value')
            });
            return params;
        }
    }
};

Tokenizer.$inject = ['$cookies'];
app.factory('tokenizer', Tokenizer);