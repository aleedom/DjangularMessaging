/**
* messages
* @namespace messaging.messages.services
*/
(function () {
    'use strict';

    angular
        .module('messaging.messages.services')
        .factory('Messages', Messages);

    Messages.$inject = ['$http'];

    /**
    * @namespace Message
    */
    function Messages($http) {
        /**
        * @name Message
        * @desc The factory to be returned
        * @memberof messaging.messages.services.Message
        */
        var Messages = {
            get: get,
            create: create
        };
        return Messages;

        /////////////////////////

        /**
        * @name get
        * @desc Gets the messages for a particular channel
        * @param {string} conversation_name the name of the conversaion to get messages for
        * @returns {promise}
        * @memberof messaging.messages.services.Message
        */
        function get(conversation_name) {
            return $http.get('/api/accounts/'+conversation_name+'/messages');
        }

        /**
        * @name get
        * @desc Gets the messages for a particular channel
        * @param {string} conversation_name the name of the conversaion to get messages for
        * @returns {promise}
        * @memberof messaging.messages.services.Message
        */
        function create(conversation_name, text) {
            return $http.post('/api/accounts/'+conversation_name+'/messages/',{
                text: text,
                name: conversation_name,

            });
        }
    }
})();
