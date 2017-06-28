app.controller("customersController", ["$scope", "storesFactory", "$location", "$cookies", function($scope, storesFactory, $location, $cookies){
    $scope.newCustomer = {};

    var index = function(){
        storesFactory.customersIndex(function(data){
            $scope.customers = data.customers;
            console.log($scope.customers);
        });
    }
    index();

    $scope.create = function(){
        storesFactory.createCustomer($scope.newCustomer, function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
            }
            index();
            $scope.newCustomer = {};
        });
    }

    $scope.delete = function(id){
        storesFactory.deleteCustomer(id, function(data){
            if(data.errors){
                console.log(data.errors);
            }
            index();
        });
    }

}]);
