/**
 * Created by Hua on 8/1/16.
 */
var app = angular.module('ResApp', ['ui.router','ngResource','ngAnimate','us.bootstrap']);
app.config(['$locationProvider','$stateProvider',]function($))
app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            controller: "LoginController",
            templateUrl: "tem/Login.html"
        })
        .when('/', {
            controller: '',
            templateUrl: ''
        })
        .when('/', {
            controller: 'Controller',
            templateUrl: ''
        })
        .otherwise({
            redirectTo: '/login'
        });
});
