/**
* Register controller
* @namespace messaging.authentication.controllers
*/
(function () {
    'use strict';

    angular
        .module('messaging.authentication.controllers')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$location', '$scope', 'Authentication'];

    /**
    * @namespace RegisterController
    */
    function RegisterController($location, $scope, Authentication) {
        var vm = this;
        vm.register = register;
        activate();

        /**
        * @name activate
        * @desc Actions to be performed when this controller is instantiated
        * @memberof thinkster.authentication.controllers.RegisterController
        */
        function activate() {
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }
        /**
        * @name register
        * @desc Register a new user
        * @memberof messaging.authentication.controllers.RegisterController
        */
        function register() {
            Authentication.register(vm.email, vm.username, vm.password);
        }
    }
})();
