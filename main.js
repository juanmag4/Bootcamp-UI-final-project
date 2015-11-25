var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider
            .when('/', {
                controller: 'homeCtrl',
                templateUrl: 'views/home.html'
            })
            .when('/section1', {
                controller: 'section1Ctrl',
                templateUrl: 'views/section1.html'
            })
            .when('/section2', {
                controller: 'section2Ctrl',
                templateUrl: 'views/section2.html'
            })
            .otherwise({
                redirectTo: '/'
            });
});