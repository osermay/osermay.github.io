var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/about", {
        templateUrl : "/about.html"
    })
    .when("/projects", {
        templateUrl : "/projects.html"
    });
});