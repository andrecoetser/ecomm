(function() {
    "use strict";

    angular.module("app", ["ui.router", "ui.bootstrap"]);

    angular.module("app")
        .config(config)
        .run();

    config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise("/shop/products");

        $stateProvider
            .state("shop", {
                url: "/shop",
                templateUrl: "pages/home/home.html"
            }).state("shop.products", {
                url: "/products",
                templateUrl: "pages/products/products.html"
            }).state("shop.checkout", {
                url: "/checkout",
                templateUrl: "pages/checkout/checkout.html"
            }).state("shop.cart", {
                url: "/cart",
                templateUrl: "pages/cart/cart.html"
            }).state("shop.checkout.shipping", {
                url: "/shipping",
                templateUrl: "pages/checkout/shipping/shipping.html"
            }).state("shop.checkout.confirm", {
                url: "/confirm",
                templateUrl: "pages/checkout/confirm/confirm.html"
            }).state("shop.checkout.complete", {
                url: "/complete",
                templateUrl: "pages/checkout/complete/complete.html"
            });
    }
})();