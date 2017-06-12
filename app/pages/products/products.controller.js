(function() {
    "use strict";

    angular
        .module("app").controller("productsController", productsController);

    productsController.$inject = ["productsService"]

    function productsController(productsService) {
        var vm = this;

        vm.items = productsService.getProducts();
    }

})();