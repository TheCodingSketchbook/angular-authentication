angular.module("authentication")
    .factory("AuthenticationService", function(){
        var data = {
            isAuthenticated: false,
            username: ""
        }

        return data
    });