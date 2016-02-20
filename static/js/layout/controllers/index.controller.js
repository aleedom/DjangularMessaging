/**
* IndexController
* @namespace messaging.layout.controllers
*/

( function () {
    'use strict';

    angular
        .module('messaging.layout.controllers')
        .controller('IndexController', IndexController);

    IndexController.$inject = ['$scope', 'Authentication', 'Conversations'];

    /**
    * @namespace IndexController
    */
    function IndexController($scope, Authentication, Conversations) {
        var vm = this;
        vm.isAuthenticated = Authentication.isAuthenticated();
        vm.conversations = [];

        activate();

        /**
        * @name activate
        * @desc Actions tobe performed when this controller is instantiaed
        * @memberof messaging.layout.controllers.IndexController
        */
        function activate() {
            Conversations.all().then(conversationsSuccessFn, conversationsErrorFn);

            $scope.$on('conversation.created', function (event, conversation) {
                vm.conversations.unshift(conversation);
            });
            $scope.$on('conversation.created.error', function () {
                vm.posts.shift();
            });

            /**
            * @name conversationsSuccessFn
            * @desc Upate conversations array on views
            */
            function conversationsSuccessFn(data, status, headers, config) {
                console.log("conversations returned");
                console.log(data);
                vm.conversations = data.data;
                console.log(vm.conversations && vm.conversations.length);
            }

            /**
            * @name conversationsErrorFn
            * @desc Show error in modal???
            */
            function conversationsErrorFn(data, status, headers, config) {
                console.error("Error Creating Conversation: ", data.error);
            }
        }
    }

})();
