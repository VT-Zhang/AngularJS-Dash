app.controller("clientProfileController", ["$scope", "$http", "storesFactory", function($scope, $http, storesFactory){

    var index = function(){
        storesFactory.getAllClients(function(data){
            $scope.clients = data;
        });
    }

    index(); 

}]);
