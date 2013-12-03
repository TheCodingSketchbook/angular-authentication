angular.module("login")
    .config(function($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "app/login/login.tmpl.html",
                controller: "loginController",
                access: {
                    isFree: true
                }
            });
    })

    .controller("loginController", ["$scope", "$http", "authenticationService", function($scope, $http, authData){
        $scope.login = function(){
            var config = {
                method: "GET",
                url: "/login"
            };

            $http(config)
                .success(function (data, status, headers, config) {
                    if (data.status) {
                        authData.isAuthenticated = true;
                        authData.username = data.userName;
                        authData.userType = data.userType;
                    }
                    else {
                        userData.isAuthenticated = false;
                        authData.username = "";
                        authData.userType = "";
                    }
                })
                .error(function (data, status, headers, config) {
                    userData.isAuthenticated = false;
                    authData.username = "";
                    authData.userType = "";
                });
        }
    }]);