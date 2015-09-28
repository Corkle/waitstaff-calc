angular.module('calcApp').controller('MealCtrl', function($rootScope) {
    function Customer() {
        this.subtotal = 0;
        this.tip = 0;
        this.total = function () {
            return this.subtotal + this.tip;
        };
    }
    
    this.customer = new Customer();
    
    this.calcMeal = function (form) {
        this.customer.subtotal = this.mealPrice * (1 + this.taxRate);
        this.customer.tip = this.customer.subtotal * this.tipPercent;

        this.earnings.tipTotal += this.customer.tip;
        this.earnings.mealCount++;

        this.mealPrice = "";
        this.taxRate = "";
        this.tipPercent = "";
        form.$setPristine();
    };
});