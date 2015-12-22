define(['application-configuration'], function (app) {
    app.register.service('ajaxService', ['$http', function ($rootScope) {
        this.AjaxGet = function (route, suncessFunction, errorFunction) {
            $http({ method: "GET", url: route }).success(function (response, status, headers, config) {
                suncessFunction(response, status);
            }).error(function (response) {

                errorFunction(response);
            })
        };
    }])
});