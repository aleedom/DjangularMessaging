/**
 * Conversations
 * @namespace messaging.conversations.directives
 */
(function () {
    'use strict';

    angular
        .module('messaging.conversations.directives')
        .directive('conversations', conversations);

    /**
     * @namespace Conversations
     */
     function conversations() {

         /**
          * @name directive
          * @desc the directive to be returned
          * @memberof messaging.conversations.directives.Conversations
          */
          var directive = {
              controller: 'ConversationsController',
              controllerAs: 'vm',
              restrict: 'E',
              scope: {
                  posts: '='
              },
              templateUrl: '/static/ng-templates/conversations/conversations.html'
          };
          return directive;
     }
})();
