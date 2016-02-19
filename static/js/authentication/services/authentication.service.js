/**
* Authentication
* @namespace messaging.authentication.services
*/
(function () {
    'use strict';

    angular
        .module('messaging.authentication.services')
        .factory('Authentication', Authentication);

    Authentication.$inject = ['$cookies', '$http'];

    /**
    * @namespace Authentication
    * @returns {Factory}
    */
    function Authentication($cookies, $http) {
        /**
        * @name Authentication
        * @desc The Factory to be returned
        */
        var Authentication = {
          register: register
        };
        return Authentication;

        ////////////////////

        /**
        * @name register
        * @desc Try to register a new user
        * @param {string} username The username entered by the user
        * @param {string} password The password entered by the user
        * @returns {Promise}
        * @memberOf messaging.authentication.services.Authentication
        */
        function register(email, username, password) {
            return $http.post('/api/accounts', {
                username: username,
                password: password,
                email: email
            });
        }
    }
})();
