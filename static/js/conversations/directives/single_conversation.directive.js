/**
* Conversation
* @namespace messaging.conversations.directives
*/
(function () {
    'use strict';

    angular
        .module('messaging.conversations.directives')
        .directive('conversation', conversation);

    /**
    * @namespace conversation
    */
    function conversation() {
        /**
        * @name directive
        * @desc The directive to be returned
        * @memberof messaging.conversations.directives.conversaion
        */
        var directive = {
            restrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/templates/conversations/converastion.html'
        };
        return directive;
    }
})();
