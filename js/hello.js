// hello route
app.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when('/hello', {
        controller: "HelloController",
        controllerAs: "vm",
        templateUrl: "app/hello.html"
    });
    $routeProvider.otherwise('/hello');
}]);

// hello controller
app.controller("HelloController", HelloController);
HelloController.$inject = ['$http', 'tokenizer'];

function HelloController($http, tokenizer) {
    var vm = this;

    vm.hello = function (string) {
        vm.error = '';
        $http.post('/hello',
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
