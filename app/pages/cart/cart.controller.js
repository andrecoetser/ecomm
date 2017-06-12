(function() {
    "use strict";

    angular
        .module("app").controller("cartController", cartController);

    cartController.$inject = ["stateService"]

    function cartController(stateService) {
        var vm = this;

        vm.stateService = stateService;

        vm.stateService.routePosition.checkingOut = false;


        vm.clear = function() {
            vm.stateService.cart.items = [];
            vm.stateService.goHome();
        }
    }
})();