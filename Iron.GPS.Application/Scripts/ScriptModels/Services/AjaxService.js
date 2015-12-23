define(['application-configuration'], function (app) {
    app.register.service('ajaxService', ['$http', function ($http) {
        this.AjaxGet = function (route, suncessFunction, errorFunction) {
            setTimeout(function () {
                $http({ method: "GET", url: route }).success(function (response, status, headers, config) {
                    suncessFunction(response, status);
                }).error(function (response) {

                    errorFunction(response);
                })
            },1000)
        };
    }])
});