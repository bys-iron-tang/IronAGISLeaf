'use strict'
define(['angularAMD', 'angular-route', 'ui-bootstrap', 'angular-sanitize', 'blockUI', ], function (angularAMD) {
    var app = angular.module("mainModule", ['ngRoute', 'blockUI', 'ngSanitize', 'ui.bootstrap']);

    app.filter("leadingZeros", function () {
        return function (data) {
            var pad = "000" + data;
            pad = pad.substr(pad.length - 3);
            return pad;
        }
    });

    app.config(function ($httpProvider) {
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
        $httpProvider.defaults.withCredentials = true;
    });

    app.config(function (blockUIConfigProvider) {
        blockUIConfigProvider.message("loading.....");
        blockUIConfigProvider.autoBlock(false);
    });

    var indexController = function ($scope, $rootScope, $http, $location, blockUI) {

    };

    indexController.$inject = ['$scope', '$rootScope', '$http', '$location', 'blockUI'];

    app.controller("indexController", indexController);

    angularAMD.bootstrap(app);

    return app;
})