/**
* MessagesController
* @namespace messaging.messages.controllers
*/
(function() {
    'use strict';

    angular
        .module('messaging.messages.controllers')
        .controller('MessagesController', MessagesController);

    MessagesController.$inject = ['$location', '$routeParams', 'Conversations', 'Messages'];

    function MessagesController($location, $routeParams, Conversations, Messages){
        var vm = this;

        vm.messages = [];
        vm.conversations = [];

        activate();

        function activate() {
            var username = $routeParams.conversation_name.substr(1);

            Messages.get(username).then(messagesSuccessFn, messagesErrorFn);
            Conversations.my_conversations(username).then(conversationsSuccessFn, conversationsErrorFn);

            function messagesSuccessFn(data, status, headers, config) {
                vm.messages = data.data;
            }
            function messagesErrorFn(data, status, headers, config) {
                $location.url('/');
            }
            function conversationsSuccessFn(data, status, headers, config) {
                vm.conversations = data.data;
            }
            function conversationsErrorFn(data, status, headers, config) {
                vm.conversations = data.data;
            }
        }
    }
})();
