(function() {
    "use strict";

    angular
        .module("app").controller("homeController", homeController);

    homeController.$inject = ["$state", "productsService", "stateService"]

    function homeController($state, productsService, stateService) {
        var vm = this;

        vm.items = productsService.getProducts();
        vm.stateService = stateService;

        vm.stateService.routePosition.checkingOut = false;

        vm.goToCart = function() {
            if (vm.stateService.cart.items.length > 0) {
                $state.transitionTo("shop.cart");
            }
        }
    }

})();