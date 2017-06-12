(function() {
    "use strict";

    angular
        .module("app").controller("confirmController", confirmController);

    confirmController.$inject = ["$state", "stateService", "orderService"]

    function confirmController($state, stateService, orderService) {
        var vm = this;

        vm.stateService = stateService;

        vm.completePurchase = function() {
            if (orderService.submitOrder()) {
                vm.stateService.cart.items = [];
                $state.transitionTo("shop.checkout.complete");
            }
        }

        vm.back = function() {
            $state.transitionTo("shop.checkout.shipping");
        }
    }
})();