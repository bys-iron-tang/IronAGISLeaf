require.config({
    paths: {
        'application-configuration': 'application-configuration',
        'angular': '../angular.min',
        'angular-route': '../angular-route.min',
        'angularAMD': '../angularAMD.min',
        'ui-bootstrap': '../angular-ui/ui-bootstrap-tpls',
        'blockUI': '../angular-block-ui.min',
        'ngload': '../ngload.min',
        'angular-sanitize': '../angular-sanitize',
    },

    //add angular modules that  does not support AMD out of box, put them in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
    },

    deps: ['']
});