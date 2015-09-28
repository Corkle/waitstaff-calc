angular.module('calcApp', ['ui.bootstrap', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/components/home/home.html'
        })
        .when('/new-meal', {
            templateUrl: 'app/components/new-meal/new-meal.html',
            controller: 'MealCtrl as meal'
        })
        .when('/my-earnings', {
            templateUrl: 'app/components/my-earnings/my-earnings.html',
            controller: 'EarningsCtrl as earnings'
        })
        .otherwise('/');
}])
.controller('NavBarCtrl', function($scope) {
 $scope.isCollapsed = true;
});