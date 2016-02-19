(function () {
    'use strict';

    angular
        .module('messaging.authentication', [
            'messaging.authentication.controllers',
            'messaging.authentication.services'
        ]);

    angular
        .module('messaging.authentication.controllers', []);

    angular
        .module('messaging.authentication.services', ['ngCookies']);
})();
