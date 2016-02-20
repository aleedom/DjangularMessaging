(function () {
    'use strict';

    angular
        .module('messaging', [
            'messaging.config',
            'messaging.routes',
            'messaging.authentication',
            'messaging.conversations',
            'messaging.layout'
        ]);
    angular
        .module('messaging.config', []);
    angular
        .module('messaging.routes', ['ngRoute']);

    angular
        .module('messaging')
        .run(run);
    run.$inject = ['$http'];

    /**
    * @name run
    * @desc Update xsrf $http headers to align with Django's defaults
    **/
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }

})();
