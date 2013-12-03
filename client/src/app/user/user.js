angular.module("user")
    .config(function($routeProvider) {
        $routeProvider.when("/user/welcome", {
            templateUrl: "app/",
            controller: "userWelcomeController"
        });
    })

    .controller("userWelcomeController", ["$scope", "authentication", function ($scope, auth) {
        $scope.username = auth.username;
    }]);