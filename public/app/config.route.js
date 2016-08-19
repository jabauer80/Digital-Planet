(function () {
    "use strict";

    angular.module("app")
        .config(configFunction);
    // .run(runFunction);

    configFunction.$inject = ["$routeProvider"];

    function configFunction($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/landing/landing.tpl.html",
                //controller: 'MainCtrl as mainCtrl'
            })
            .otherwise({
                redirectTo: "/"
            });
    }

    /*
      runFunction.$inject = ["$location", "authService", "PROTECTED_PATHS"];
    
      function runFunction($location, authService, PROTECTED_PATHS) {
    
        authService.firebaseAuthObject.$onAuthStateChanged(function(authData) {
          if (!authData && pathIsProtected($location.path())) {
            authService.logout();
            $location.path("/login");
          }
        });
    
        function pathIsProtected(path) {
          return PROTECTED_PATHS.indexOf(path) !== -1;
        }
      }
      */

})();