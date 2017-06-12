(function() {
    "use strict";

    angular
        .module("app").controller("completeController", completeController);

    completeController.$inject = ["stateService"]

    function completeController(stateService) {
        var vm = this;

        vm.stateService = stateService;
    }
})();