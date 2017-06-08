'use strict';

var app = angular.module('app', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'ng-fusioncharts'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    var genericRT = {
        templateUrl: 'views/container.html',
        controller: 'FarmCtrl'
    };
    $routeProvider.when('/farms', genericRT);
    $routeProvider.when('/farms/:farmId', genericRT);
    $routeProvider.when('/farms/:farmId/entities/:entityId', genericRT);
    $routeProvider.otherwise({ redirectTo: '/farms' });

    $locationProvider.html5Mode(true);
}]);