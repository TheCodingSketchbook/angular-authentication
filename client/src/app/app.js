angular.module("app.directives", [])
angular.module("authentication", []);
angular.module("login", ["ngRoute"]);
angular.module("user", ["ngRoute"]);

var app = angular.module("app", [
    "ngRoute",
    "directives",
    "authentication",
    "login",
    "user"]);

app.config(function ($routeProvider) {
    $routeProvider.otherwise({ redirectTo: "/welcome" });
});