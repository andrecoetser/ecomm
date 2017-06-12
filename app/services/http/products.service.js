(function() {
    "use strict";

    angular
        .module("app")
        .factory("productsService", productsService);

    function productsService() {
        var getProducts = function() {
            return [
                { id: 1, name: "Raspberry Pi", price: 65.99, img: "assets/raspberryPi.jpeg" },
                { id: 2, name: "Arduino Uno", price: 34.95, img: "assets/arduinoUno.jpeg" },
                { id: 3, name: "Raspberry Pi Zero", price: 15.99, img: "assets/raspberryPiZero.jpeg" },
                { id: 4, name: "SD Card", price: 10.00, img: "assets/sdCard.jpeg" }
            ]
        }

        return {
            getProducts: getProducts
        }
    }

})();