app.controller("clientNewController", ["$scope", "storesFactory", "$cookies", function($scope, storesFactory, $cookies){

    $scope.newClient = {};
    $scope.username = $cookies.get("username");
    var index = function(){
        storesFactory.getZohoID(function(data){
            $scope.clients = data;
        });
        storesFactory.loadStates(function(res){
            $scope.states = res.data;
        });
        storesFactory.loadCountries(function(res){
            $scope.countries = res.data;
        });
        storesFactory.getClientTypes(function(data){
            $scope.client_types = data;
        });
    }

    index();

    $scope.createClient = function(){
        storesFactory.createClient($scope.newClient, function(data){
            console.log(data);
            if(data.statusText === "Bad Request"){
                $scope.errors = data;
            }
            console.log($scope.errors);
            index();
            $scope.newClient = {};
        });
    }

    $scope.getZohoAccount = function(){
        storesFactory.getZohoAccount($scope.selectedID, function(data){
            console.log(data);
            $scope.newClient = data;
            console.log($scope.newClient.name);
        });
        
    }

    $scope.clearForm = function(){
        index();
        $scope.newClient = {};
    }

}]);
