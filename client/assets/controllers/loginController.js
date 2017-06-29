app.controller("loginController", ["$scope", "storesFactory", "$location", "$cookies", "jwtHelper", "$http", function($scope, mainFactory, $location, $cookies, jwtHelper, $http){

    $scope.login = function(){
        storesFactory.verifyUser($scope.username, $scope.password, function(data){
            console.log(data);
            
        });
    }

    

    

    $http({
        url: "http://127.0.0.1:8000/api/auth/token",
        method: "POST",
        data:
        {
            "username":"alvin",
            "password":"chenyuan0122"
        }
    })
    .then(function(returned_data){
        $scope.token = returned_data.data.token;
        console.log($scope.token);
        var tokenPayload = jwtHelper.decodeToken($scope.token);
        var date = jwtHelper.getTokenExpirationDate($scope.token);
        var bool = jwtHelper.isTokenExpired($scope.token);
        console.log(tokenPayload);
        console.log(date);
        console.log(bool);
    })
    .catch(function(err){
        console.log(err);
    });


    
}]);
