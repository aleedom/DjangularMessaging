(function () {
    'use strict';

    angular
        .module('messaging.routes')
        .config(config);

    config.$inject = ['$routeProvider'];

    /**
    * @name config
    * @desc Define valid application routes
    */
    function config($routeProvider) {
    $routeProvider.when('/register', {
        controller: 'RegisterController',
        controllerAs: 'vm',
        templateUrl: '/static/ng-templates/authentication/register.html'
    }).when('/login', {
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: '/static/ng-templates/authentication/login.html'
    }).otherwise('/');
    }
})();
