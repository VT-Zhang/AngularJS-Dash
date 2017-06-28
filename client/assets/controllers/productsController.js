app.controller("productsController", ["$scope", "storesFactory", "$location", "$cookies", function($scope, storesFactory, $location, $cookies){
    $scope.newProduct = {};

    var index = function(){
        storesFactory.productsIndex(function(data){
            $scope.products = data;
            console.log($scope.products);
        });
    }
    index();

    $scope.create = function(){
        storesFactory.createProduct($scope.newProduct, function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
                console.log($scope.errors);
            }
            index();
            $scope.newProduct = {};
        });
    }

}]);
