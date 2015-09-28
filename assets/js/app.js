angular.module('calcApp', ['ui.bootstrap'])
    .controller('CalcCtrl', function () {
        function Customer() {
            this.subtotal = 0;
            this.tip = 0;
            this.total = function () {
                return this.subtotal + this.tip;
            };
        }

        function Earnings() {
            this.tipTotal = 0;
            this.mealCount = 0;
            this.averageTip = function () {
                return this.tipTotal / this.mealCount || 0;
            };
        }

        this.customer = new Customer();
        this.earnings = new Earnings();


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

        this.resetCalc = function () {
            this.customer = new Customer();
            this.earnings = new Earnings();
        };
    });

function DEBUG(item) {
    console.log(item);
}