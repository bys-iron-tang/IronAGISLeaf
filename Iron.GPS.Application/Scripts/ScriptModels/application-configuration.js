'use strict'
define(['angularAMD', 'angular-route', 'ui-bootstrap', 'angular-sanitize', 'ajaxService'], function (angularAMD) {
    var app = angular.module("mainModule", ['ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngSanitize', 'ajaxService']);

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

    //app.config(function (blockUIConfigProvider) {
    //    blockUIConfigProvider.message("loading.....");
    //    blockUIConfigProvider.autoBlock(false);
    //});

    var indexController = function ($scope, $rootScope, $http, $location, blockUI) {
        $scope.initializeController = function () {
            //if ($location.path() != "") {
                $scope.initializeApplication($scope.initializeApplicationComplete, $scope.initializeApplicationError);
            //}
        };

        $scope.initializeApplication = function (successFunction, errorFunction) {
            //$scope.AjaxGet("/api/main/InitializeApplication", successFunction, errorFunction);
            ajaxService.AjaxGet("/api/main/InitializeApplication", successFunction, errorFunction);

        };

        $scope.initializeApplicationComplete = function (reponse) {
            if (response) {
                var res = response;
            }
        };

        $scope.AjaxGet = function (route, successFuntion, errorFunction) {
            $http({ method: 'GET', url: route }).success(function (response, status, headers, config) {
                successFunction(response, status);
            }).error(function (response) {
                errorFunction(response);
            });
        };
    };

    indexController.$inject = ['$scope', '$rootScope', '$http', '$location'];

    app.controller("indexController", indexController);

    angularAMD.bootstrap(app);

    return app;
})