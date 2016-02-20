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
        }).when('/', {
            controller: 'IndexController',
            controllerAs: 'vm',
            templateUrl: '/static/ng-templates/layout/index.html'
        }).when('/newconversation', {
            controller: 'NewConversationController',
            controllerAs: 'vm',
            templateUrl: '/static/ng-templates/conversations/new-conversation.html'
        }).otherwise('/');
    }
})();
