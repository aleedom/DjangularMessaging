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

        /**
        * @name register
        * @desc Register a new user
        * @memberOf messaging.authentication.controllers.RegisterController
        */
        function register() {
            Authentication.register(vm.username, vm.password);
        }
    }
})();
