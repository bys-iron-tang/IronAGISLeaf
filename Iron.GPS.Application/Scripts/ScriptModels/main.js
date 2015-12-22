require.config({
    baseUrl: '../../Scripts/ScriptModels',
    paths: {
        'application-configuration': 'application-configuration',
        'angular': '../angular',
        'angular-route': '../angular-route.min',
        'angularAMD': '../angularAMD.min',
        'ui-bootstrap': '../angular-ui/ui-bootstrap-tpls',
        'blockUI': '../angular-block-ui',
        'ngload': '../ngload.min',
        'angular-sanitize': '../angular-sanitize',
        'ajaxService': 'services/ajaxService'
    },

    //add angular modules that  does not support AMD out of box, put them in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'blockUI': ['angular'],
        'angular-sanitize': ['angular'],
        'ui-bootstrap':['angular']
    },

    //kick start application
    deps: ['application-configuration']
});