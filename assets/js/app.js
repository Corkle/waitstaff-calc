angular.module('calcApp', ['ui.utils.masks'])
    .controller('CalcCtrl', function () {
        this.customer = {
            subtotal: 0,
            tip: 0,
            total: function () {
                return this.subtotal + this.tip;
            }
        };


        this.calcMeal = function (form) {
            this.customer.subtotal = this.mealPrice * (1 + this.taxRate);
            this.customer.tip = this.customer.subtotal * this.tipPercent;
        
            this.mealPrice = "";
            this.taxRate = "";
            this.tipPercent = "";
            form.$setPristine();
        };
    });









var DEBUG = function (item) {
    console.log(item);
};