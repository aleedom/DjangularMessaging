/**
 * ConversationsController
 * @namespace messaging.conversations.controllers
 */
 (function() {
     'use strict';

     angular
        .module('messaging.conversations.controllers')
        .controller('ConversationsController', ConversationsController);

    ConversationsController.$inject = ['$scope'];

    /**
     * @namespace ConversationsController
     */
     function ConversationsController($scope) {
         var vm = this;
         vm.columns = [];

         activate();
        /**
        * @name activate
        * @desc Actions to be performed when this controller is instanciated
        * @memberof messaging.conversations.controllers.ConversationsController
        */
        function activate() {
            $scope.$watchCollection(function () { return $scope.conversations; }, render);
            $scope.$watch(function() { return $(window).width(); }, render);
        }

        /**
        * @name render
        * @desc Renders Posts into columns of approximately equal height
        * @param {Array} current The current value of `vm.conversations`
        * @param {Array} original The value of `vm.conversations` before it was updated
        * @memberof messaging.conversatinos.controllers.ConversationsController
        */
        function render(current, origonal) {
            if (current !== origonal) {
                vm.conversations = [];
            }
        }
     }
 })();
