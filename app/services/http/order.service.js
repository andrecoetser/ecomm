(function() {
    "use strict";

    angular
        .module("app")
        .factory("orderService", orderService);

    function orderService() {
        var submitOrder = function(order) {
            //submit to backend
            return true;
        }

        return {
            submitOrder: submitOrder
        }
    }

})();