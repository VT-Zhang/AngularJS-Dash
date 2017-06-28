app.controller("loginController", ["$scope", "storesFactory", "$location", "$cookies", function($scope, mainFactory, $location, $cookies){
    $scope.user;
    $scope.login = function(){
        storesFactory.login($scope.user, function(data){
            console.log(data);
            if(data.errors){
                $scope.errors = data.errors;
                $location.url("/");
            }
            else {
                $cookies.put("user_id", data.id);
                $cookies.put("username", data.username);
                $location.url("/client_new");
            }
        });
    }
}]);
