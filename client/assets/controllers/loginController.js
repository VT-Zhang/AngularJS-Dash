app.controller("loginController", ["$window", "$scope", "storesFactory", "$location", "$cookies", "$http", "$localStorage", function($window, $scope, storesFactory, $location, $cookies, $http, $localStorage){

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
        console.log("Now the credential is: " + $localStorage.token);
    }

    // $scope.submit = function () {
    //     $http
    //       .post("http://127.0.0.1:8000/api/auth/token", $scope.user)
    //       .then(function (data, status, headers, config) {
    //         $window.sessionStorage.token = data.token;
    //         $scope.message = 'Welcome';
    //       })
    //       .catch(function (data, status, headers, config) {
    //         // Erase the token if the user fails to log in
    //         delete $window.sessionStorage.token;

    //         // Handle login errors here
    //         $scope.message = 'Error: Invalid user or password';
    //       });
    //   };
}]);