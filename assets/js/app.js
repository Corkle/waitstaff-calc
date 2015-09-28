angular.module('calcApp', ['ui.bootstrap'])
    .controller('CalcCtrl', function () {
        

        function Earnings() {
            this.tipTotal = 0;
            this.mealCount = 0;
            this.averageTip = function () {
                return this.tipTotal / this.mealCount || 0;
            };
        }

        
        this.earnings = new Earnings();


        

        this.resetCalc = function () {
            this.customer = new Customer();
            this.earnings = new Earnings();
        };
    });

function DEBUG(item) {
    console.log(item);
}
