app.controller("loginController", ["$scope", "storesFactory", "$location", "$cookies", "$http", "$localStorage", function($scope, storesFactory, $location, $cookies, $http, $localStorage){

    $scope.login = function(){
        storesFactory.login($scope.username, $scope.password, function(data){
            console.log(data);
            $scope.errors = data.non_field_errors;        
        });
    }

    $scope.logout = function(){
        storesFactory.logout();
        console.log("Now the credential is: " + $localStorage.currentUser);
    }

    // $scope.login = function(){
    //     $http({
    //         url: "http://127.0.0.1:8000/api/auth/token",
    //         method: "POST",
    //         data:
    //         {
    //             "username":$scope.username,
    //             "password":$scope.password
    //         }
    //     })
    //     .then(function(returned_data){
        
    //             $scope.token = returned_data.data.token;
    //             $localStorage.currentUser = { username: $scope.username, token: $scope.token };
    //             $http.defaults.headers.common.Authorization = 'Bearer ' + $scope.token;
    //             var tokenPayload = jwtHelper.decodeToken($scope.token);
    //             var date = jwtHelper.getTokenExpirationDate($scope.token);
    //             var bool = jwtHelper.isTokenExpired($scope.token);
    //             console.log(returned_data);
    //             console.log($scope.token);
    //             console.log(tokenPayload);
    //             console.log(date);
    //             console.log(bool); 
    //             console.log($localStorage.currentUser);

    //     })
    //     .catch(function(err){
    //         console.log(err);
    //         $scope.errors = err.data.non_field_errors;
    //     });
    // }

}]);

// (function () {
//     'use strict';

//     angular
//         .module('app')
//         .controller('loginController', Controller);

//     function Controller($location, AuthenticationService) {
//         var vm = this;

//         vm.login = login;

//         initController();

//         function initController() {
//             // reset login status
//             AuthenticationService.Logout();
//         };

//         function login() {
//             vm.loading = true;
//             AuthenticationService.Login(vm.username, vm.password, function (result) {
//                 if (result === true) {
//                     $location.path('/');
//                 } else {
//                     vm.error = 'Username or password is incorrect';
//                     vm.loading = false;
//                 }
//             });
//         };
//     }

// })();