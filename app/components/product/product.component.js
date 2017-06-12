(function() {
    "use strict";

    angular
        .module("app")
        .directive("appProduct", function() {
            return {
                scope: {
                    item: "="
                },
                templateUrl: 'components/product/product.html',
            };
        })
        .controller("productComponent", productComponent);

    productComponent.$inject = ["$scope", "stateService"]

    function productComponent($scope, stateService) {
        var vm = this;

        vm.scope = $scope;

        vm.addToCart = function() {
            var exists = _.find(stateService.cart.items, function(i) { return i.id === vm.scope.item.id; });
            if (!!exists) {
                exists.quantity += 1;
            } else {
                stateService.cart.items.push({
                    id: vm.scope.item.id,
                    name: vm.scope.item.name,
                    unitPrice: vm.scope.item.price,
                    quantity: 1
                })
            }
        };
    }
})();