'use strict';

angular.module('messagingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
