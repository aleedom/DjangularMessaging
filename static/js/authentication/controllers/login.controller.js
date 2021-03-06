/*
* LoginController
* @namespace messaging.authentication.controllers
*/
(function() {
    'use strict';

    angular
        .module('messaging.authentication.controllers')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication'];

    function LoginController($location, $scope, Authentication) {
        var vm = this;

        vm.login = login;

        activate();

        /**
        * @name activate
        * @desc Actions to be performed when this controller is instantiated
        * @memberof messaging.authentication.controllers.LoginController
        */
        function activate() {
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }

        /**
        * @name login
        * @desc Log the user in
        * @memberof messaging.authentication.controllers.LoginController
        */
        function login() {
            Authentication.login(vm.username, vm.password);
        }
    }
})();
