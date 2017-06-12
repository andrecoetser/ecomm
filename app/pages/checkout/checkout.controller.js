(function() {
    "use strict";

    angular
        .module("app").controller("checkoutController", checkoutController);

    checkoutController.$inject = ["$state", "stateService"];

    function checkoutController($state, stateService) {
        var vm = this;

        stateService.routePosition.checkingOut = true;

        $state.transitionTo("shop.checkout.shipping");
    }

})();