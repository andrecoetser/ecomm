(function() {
    "use strict";

    angular
        .module("app").controller("shippingController", shippingController);

    shippingController.$inject = ["$state", "stateService"]

    function shippingController($state, stateService) {
        var vm = this;

        vm.stateService = stateService;

        vm.confirmItems = function() {
            $state.transitionTo("shop.checkout.confirm");
        }
    }
})();