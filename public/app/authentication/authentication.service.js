(function () {
    "use strict";

    angular.module("app")
        .factory("authenticationService", authenticationService)

    authenticationService.$inject = ["$firebaseAuth", "firebaseDataService"];

    function authenticationService($firebaseAuth, firebaseDataService) {
        var firebaseAuthObject = $firebaseAuth();

        var service = {
            firebaseAuthObject: firebaseAuthObject,
            //  register: register,
            login: login,
            logout: logout,
            //  isLoggedIn: isLoggedIn,
            //  sendWelcomeEmail: sendWelcomeEmail
        };

        return service;

        //////////////////////////////////////////////////////////////////////////

        function login(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password)
                .then(function () {
                    console.log("AUTHENTICATED")
                });
        }

        function logout() {
            firebaseAuthObject.$signOut();
        }
    }

})();