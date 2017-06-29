app.controller("loginController", ["$scope", "storesFactory", "$location", "$cookies", "jwtHelper", function($scope, mainFactory, $location, $cookies, jwtHelper){
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
    var expToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuYXV0aDAuY29tLyIsInN1YiI6ImZhY2Vib29rfDEwMTU0Mjg3MDI3NTEwMzAyIiwiYXVkIjoiQlVJSlNXOXg2MHNJSEJ3OEtkOUVtQ2JqOGVESUZ4REMiLCJleHAiOjE0MTIyMzQ3MzAsImlhdCI6MTQxMjE5ODczMH0.7M5sAV50fF1-_h9qVbdSgqAnXVF7mz3I6RjS6JiH0H8';  
    var tokenPayload = jwtHelper.decodeToken(expToken);
    var date = jwtHelper.getTokenExpirationDate(expToken);
    var bool = jwtHelper.isTokenExpired(expToken);
    console.log(tokenPayload);
    console.log(date);
    console.log(bool);
}]);
