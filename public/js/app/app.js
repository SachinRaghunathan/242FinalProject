var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', 
    function($routeProvider) {
        console.log("blah");
        $routeProvider
            .when('/avalon', {
                templateUrl: 'js/app/avalon.html',
                controller: 'js/controllers/avalon'
            })
            .otherwise({
                redirectTo: '404.html'
            });
    }]);