angular.module("authentication")
    .factory("authenticationService", function(){
        var data = {
            isAuthenticated: false,
            username: ""
        }

        return data;
    });