angular.module("authentication", []);
angular.module("login", ["ngRoute"]);

angular.module("app", ["authentication", "login", "ngRoute"])
    .config(function($routeProvider){
    });