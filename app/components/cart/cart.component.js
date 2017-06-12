(function() {
    "use strict";

    angular
        .module("app")
        .component("appCart", {
            templateUrl: 'components/cart/cart.html'
        })
        .controller("cartComponent", cartComponent);

    cartComponent.$inject = ["stateService"]

    function cartComponent(stateService) {
        var vm = this;

        vm.stateService = stateService;

        vm.addToCart = function(item) {
            item.quantity += 1;
        };

        vm.removeFromCart = function(item) {
            item.quantity -= 1;

            if (item.quantity === 0) {
                vm.stateService.cart.items.splice(
                    _.findIndex(vm.stateService.cart.items,
                        function(i) { return i.id == item.id }), 1);
            }

            if (vm.stateService.cartItemCounter() === 0) {
                vm.stateService.goHome();
            }
        }
    }
})();