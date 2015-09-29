angular.module('calcApp').controller('EarningsCtrl', function($rootScope) {
    function Earnings() {
        this.tipTotal = $rootScope.tipTotal || 0;
        this.mealCount = $rootScope.mealCount || 0;
        this.averageTip = function () {
            return this.tipTotal / this.mealCount || 0;
        };
    }
    
    this.earnings = new Earnings();

    this.resetCalc = function () {
        $rootScope.tipTotal = 0;
        $rootScope.mealCount = 0;
        $rootScope.lastSubtotal = 0;
        $rootScope.lastTip = 0;
        this.earnings = new Earnings();
    };
});