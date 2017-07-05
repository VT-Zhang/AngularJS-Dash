app.controller("loginController", ["$scope", "storesFactory", "$location", "$cookies", "$http", function($scope, storesFactory, $location, $cookies, $http){

    $scope.login = function(){
        storesFactory.login($scope.user, function(data){
            console.log(data);
            if(data.non_field_errors){
                $scope.errors = data.non_field_errors;
                $location.url("/");
            }
            else{
                $cookies.put("username", $scope.user.username)
                $location.url("/client_new");
            }

        });
    }

    $scope.logout = function(){
        storesFactory.logout();
        console.log("Now the credential is: " + $cookies.get("token"));
    }

}]);