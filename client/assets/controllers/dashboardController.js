app.controller("dashboardController", ["$scope", "storesFactory", function($scope, storesFactory){
    var index = function(){
        storesFactory.dashboardIndex(function(data){
            $scope.products = data.products;
            $scope.customers = data.customers;
            $scope.orders = data.orders;
            console.log($scope.products);
        });
    }
    index();

}]);