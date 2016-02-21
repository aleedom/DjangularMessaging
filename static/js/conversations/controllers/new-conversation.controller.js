/**
* NewConversation controller
* @namespace messaging.conversations.controllers
*/
(function () {
    'use strict';

    angular
        .module('messaging.conversations.controllers')
        .controller('NewConversationController', NewConversationController);

    NewConversationController.$inject = ['$location', '$scope', 'Authentication', 'Conversations'];

    /**
    * @namespace RegisterController
    */
    function NewConversationController($location, $scope, Authentication, Conversations) {
        var vm = this;
        vm.submit = submit;
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
        function submit() {
            Conversations.create(vm.conversation_name, vm.conversation_users.split(", "));
            $location.url('/');
}
    }
})();
