(function () {
    'use strict';

    angular
        .module('messaging', [
            'messaging.config',
            'messaging.routes',
            'messaging.authentication'
        ]);

    angular
        .module('messaging.routes', ['ngRoute']);
})();
