(function () {
    "use strict";
    var app = angular.module("productManagement",
        [
            //"common.services",
            "ui.router",
            "ui.mask",
            "ui.bootstrap"
            //, "productResourceMock"
        ]);

    app.config([
            "$stateProvider",
            "$urlRouterProvider",

            function ($stateProvider, $urlRouterProvider, $http) {
                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state("home", {
                        url: "/",
                        templateUrl: "/home.html"
                    })
                .state("about", {
                    url: "/about",
                    templateUrl: "/about.html"
                })
                .state("contact", {
                    url: "/contact",
                    templateUrl: "/contact.html"
                })
                .state("event", {
                    url: "/event",
                    templateUrl: "/event.html"
                })
                .state("faq", {
                    url: "/faq",
                    templateUrl: "/faq.html"
                })
                .state("donate", {
                    url: "/donate",
                    templateUrl: "/donate.html"
                })
            }]
    );

}());