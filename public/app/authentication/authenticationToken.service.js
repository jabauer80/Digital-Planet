(function () {
    "use strict";

    angular.module("app")
        .factory("authenticationTokenService", authenticationTokenService)

    authenticationTokenService.$inject = ["authenticationService"]

    function authenticationTokenService(authenticationService) {

        var authenticationToken = {};

        authenticationToken.login = function () {
            authenticationService.login().then(function (authData) {
                authenticationToken.authData = authData;
                console.log("aTF.aD: " + authenticationToken.authData);
            }).catch(function (error) {
                authenticationToken.error = error;
            });
        };

        authenticationToken.logout = function () {
            authenticationService.logout();
            authenticationToken.authData = null;
            authenticationToken.error = null;
        };

        authenticationToken.isLoggedIn = function () {
            return (typeof authenticationToken.authData !== 'undefined')
                && authenticationToken.authData !== null;
        };

        authenticationToken.errorDuringLoggingIn = function () {
            return (typeof authenticationToken.error !== 'undefined')
                && authenticationToken.error !== null;
        };

        return authenticationToken;
    }

})();