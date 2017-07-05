app.controller("clientProfileController", ["$scope", "$http", "storesFactory", '$mdEditDialog', '$q', '$timeout', function($scope, $http, storesFactory, $mdEditDialog, $q, $timeout){

    var index = function(){
        storesFactory.getAllClients(function(data){
            $scope.clients = data;
        });
    }

    index(); 

    $scope.query = {
        order: 'name',
        limit: 5,
        page: 1
    };

    $scope.limitOptions = [5, 10, 15];


    $scope.logPagination = function (page, limit) {
        console.log('page: ', page);
        console.log('limit: ', limit);
    }

}]);
