angular.module('calcApp').controller('MealCtrl', function($rootScope) {
    function Customer() {
        this.subtotal = $rootScope.lastSubtotal || 0;
        this.tip = $rootScope.lastTip || 0;
        this.total = function () {
            return this.subtotal + this.tip;
        };
    }
            
    this.customer = new Customer();
    
    this.calcMeal = function (form) {
        this.customer.subtotal = this.mealPrice * (1 + this.taxRate / 100);
        this.customer.tip = this.customer.subtotal * (this.tipPercent / 100);

        $rootScope.lastSubtotal = this.customer.subtotal;
        $rootScope.lastTip = this.customer.tip;
        $rootScope.tipTotal += this.customer.tip;
        $rootScope.mealCount++;

        this.mealPrice = "";
        this.taxRate = "";
        this.tipPercent = "";
        form.$setPristine();
        
        console.log($rootScope);
    };
});