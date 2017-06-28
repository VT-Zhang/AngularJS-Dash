app.controller("ordersController", ["$scope", "storesFactory", "$location", "$cookies", function($scope, storesFactory, $location, $cookies){
    $scope.newOrder = {};

    var index = function(){
        storesFactory.ordersIndex(function(data){
            $scope.orders = data.orders;
            $scope.products = data.products;
            $scope.customers = data.customers;
            console.log($scope.orders);
            console.log($scope.products);
            console.log($scope.customers);
        });
    }
    index();

    $scope.create = function(){
        storesFactory.createOrder($scope.newOrder, function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
                console.log($scope.errors);
            }
            index();
            $scope.newOrder = {};
        });
    }

}]);
