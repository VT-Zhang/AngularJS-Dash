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
        storesFactory.loadClientTypes(function(res){
            $scope.client_types = res.data;
        });
    }

    index();

    $scope.create = function(){
        storesFactory.createClient($scope.newClient, function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
            }
            index();
            $scope.newClient = {};
        });
    }

    $scope.getZohoAccount = function(){
        storesFactory.getZohoAccount($scope.selected.zoho_id, function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
            }
            $scope.newClient = data;
            console.log($scope.newClient.name);
        });
        
    }

    $scope.clearForm = function(){
        index();
        $scope.newClient = {};
    }

}]);
