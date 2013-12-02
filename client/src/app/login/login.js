angular.module("login")
    .config(function($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "app/login/login.tmpl.html",
                controller: "loginController"
            })
    })

    .controller("loginController", ["$scope", "$http", "authenticationService", function($scope, $http, auth){


    }]);