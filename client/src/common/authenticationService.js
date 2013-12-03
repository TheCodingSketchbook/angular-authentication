angular.module("authentication")
    .factory("authenticationService", function(){
        var data = {
            isAuthenticated: false,
            userType: "",
            username: ""
        }

        return data;
    });