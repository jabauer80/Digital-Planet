(function () {
    "use strict";

    angular.module("app", [
        "ngRoute",
        "firebase"
    ]).config(configFunction);

    function configFunction() {

        // initialize firebase
        var config = {
            apiKey: "AIzaSyBm8LCjJaMWrZ7KNVBv5lzOZUJEedvWI8o",
            authDomain: "digital-jupiter.firebaseapp.com",
            databaseURL: "https://digital-jupiter.firebaseio.com",
            storageBucket: "digital-jupiter.appspot.com",
        };
        firebase.initializeApp(config);
    }

})();