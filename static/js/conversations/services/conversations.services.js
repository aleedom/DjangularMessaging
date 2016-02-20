(function() {
    'use strict';

    angular
        .module('messaging.conversations.services')
        .factory('Conversations', Conversations);

    Conversations.$inject = ['$http'];

    /**
    * @namespace Conversations
    * @returns {factory}
    */
    function Conversations($http) {
        var Conversations = {
            all: all,
            create: create
        };
        return Conversations;

        //////////////////////////

        /**
        * @name all
        * @desc Get all Conversations pertaining to this users
        * @returns {promise}
        * @memberof messaging.conversations.services.Conversations
        */
        function all() {
            return $http.get('/api/conversations/');
        }

        /**
        * @desc Create a new Post
        * @param {string} the name of the new conversation
        * @param {string []} the list of users to be added to the conversation
        * @returns {Promise}
        * @memberof messaging.conversaions.services.Conversaions
        */
        function create(name, users) {
            return $http.post('/api/conversations/', {
                name: name,
                users: users
            });
        }
    }
})();
