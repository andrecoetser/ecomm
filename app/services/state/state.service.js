(function() {
    "use strict";

    angular
        .module("app")
        .factory("stateService", stateService);

    stateService.$inject = ["$state", "$stateParams"]

    function stateService($state, $stateParams) {

        var cart = {
            items: []
        };

        var routePosition = {
            checkingOut: false
        };

        var deliveryMethods = {
            standard: {
                name: "Standard delivery",
                price: 3.00
            },
            overnight: {
                name: "Overnight delivery",
                price: 9.99
            }
        }

        var selectedDeliveryOption = deliveryMethods.standard;

        var showCheckout = function() {
            return cart.items.length > 0 && !routePosition.checkingOut;
        };

        var goHome = function() {
            $state.transitionTo("shop.products", $stateParams, {
                reload: true,
                inherit: false,
                notify: true
            });
        };

        var goToCheckout = function() {
            if (cart.items.length > 0) {
                $state.transitionTo("shop.checkout");
            }
        }

        var cartItemCounter = function() {
            return _.reduce(cart.items, function(agt, item) {
                return agt + item.quantity;
            }, 0);
        };

        var cartItemTotal = function() {
            return _.reduce(cart.items, function(agt, item) {
                return agt + (item.quantity * item.unitPrice);
            }, 0);
        };

        var orderTotal = function(deliveryOption) {
            return cartItemTotal() + deliveryOption.price;
        };

        return {
            cart: cart,
            showCheckout: showCheckout,
            routePosition: routePosition,
            goHome: goHome,
            goToCheckout: goToCheckout,
            cartItemCounter: cartItemCounter,
            cartItemTotal: cartItemTotal,
            orderTotal: orderTotal,
            deliveryMethods: deliveryMethods,
            selectedDeliveryOption: selectedDeliveryOption
        }
    }

})();