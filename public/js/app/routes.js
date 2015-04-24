(function() {
    'use strict';

angular
    .module('app')
    .config(config);
    
config.$inject = ['$routeProvider'];

function config($routeProvider) {
    $routeProvider.when('/avalon', {
            templateUrl: 'js/app/avalon.html',
            controller: 'js/controllers/avalon'
        });
    }
}());
