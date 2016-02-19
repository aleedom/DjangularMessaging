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
            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            login: login,
            register: register,
            setAuthenticatedAccount: setAuthenticatedAccount,
            unauthenticate: unauthenticate
        };
        return Authentication;

        /**
        * @name register
        * @desc Try to register a new user
        * @param {string} username The username entered by the user
        * @param {string} password The password entered by the user
        * @returns {Promise}
        * @memberOf messaging.authentication.services.Authentication
        */
        function register(email, username, password) {
            return $http.post('/api/accounts/', {
                username: username,
                password: password,
                email: email
            }).then(registerSuccessFn, registerErrorFn);

            /**
            * @name registerSuccessFn
            * @desc Log the new user in
            */
            function registerSuccessFn(data, status, headers, config) {
                Authentication.login(email, password);
            }

            /**
            * @name registerErrorFn
            * @desc Log 'Register Failure: Failed to Register!' to the console
            */
            function registerErrorFn(data, status, headers, config) {
                console.error('Register Failure: Failed to Register!');
            }
        }
        /**
        * @name login
        * @desc Try to log in with email `email` and password `password`
        * @param {string} email The email entered by the user
        * @param {string} password The password entered by the user
        * @returns {Promise}
        * @memberOf messaging.authentication.services.Authentication
        */
        function login(email, password) {
            return $http.post('/api/auth/login/', {
                email: email, password: password
            }).then(loginSuccessFn, loginErrorFn);

            /**
            * @name loginSuccessFn
            * @desc Set the authenticated account and redirect to index
            */
            function loginSuccessFn(data, status, headers, config) {
                Authentication.setAuthenticatedAccount(data.data);
                window.location = '/';
            }

            /**
            * @name loginErrorFn
            * @desc Log 'LoginError: Failed to login!' to the console
            */
            function loginErrorFn(data, status, headers, config) {
                console.error('LoginError: Failed to login!');
            }
        }
        /**
        * @name getAuthenticatedAccount
        * @desc Return the currently authenticated account
        * @returns {object|undefined} Account if authenticated, else `undefined`
        * @memberOf messaging.authentication.services.Authentication
        */
        function getAuthenticatedAccount() {
            if (!$cookies.authenticatedAccount) {
                return;
            }
            return JSON.parse($cookies.authenticatedAccount);
        }

        /**
        * @name isAuthenticated
        * @desc Check if the current user is authenticated
        * @returns {boolean} True is user is authenticated, else false.
        * @memberOf messaging.authentication.services.Authentication
        */
        function isAuthenticated() {
            return !!$cookies.authenticatedAccount;
        }

        /**
        * @name setAuthenticatedAccount
        * @desc Stringify the account object and store it in a cookie
        * @param {Object} user The account object to be stored
        * @returns {undefined}
        * @memberOf messaging.authentication.services.Authentication
        */
        function setAuthenticatedAccount(account) {
            $cookies.authenticatedAccount = JSON.stringify(account);
        }

        /**
        * @name unauthenticate
        * @desc Delete the cookie where the user object is stored
        * @returns {undefined}
        * @memberOf messaging.authentication.services.Authentication
        */
        function unauthenticate() {
            delete $cookies.authenticatedAccount;
        }
    }

})();
