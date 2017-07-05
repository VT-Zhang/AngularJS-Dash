var app = angular.module("app", ["ngMaterial", "ngMessages", "ngRoute", "ngCookies", "angular-jwt", "ngStorage", "md.data.table"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl:"partials/login.html",
        controller:"loginController"
    })
    .when("/client_new", {
        templateUrl:"partials/client_new.html",
        controller: "clientNewController"
    })
    .when("/client_profile", {
        templateUrl:"partials/client_profile.html",
        controller: "clientProfileController"
    })
    .when("/nutrition", {
        templateUrl:"partials/nutrition.html",
        controller: "nutritionController"
    })
    .when("/dashboard", {
        templateUrl:"partials/dashboard.html"
    })
    .when("/orders", {
        templateUrl:"partials/orders.html"
    })
    .when("/products", {
        templateUrl:"partials/products.html"
    })
    .when("/customers", {
        templateUrl:"partials/customers.html"
    })
    .otherwise({
        templateUrl:"partials/dashboard.html"
    });
});

app.factory('httpRequestInterceptor', function ($cookies) {
    return {
        request: function (config) {
            config.headers['Authorization'] = 'JWT ' + $cookies.get("token");
            return config;
        }
    };
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpRequestInterceptor');
});

app.config(['$mdThemingProvider', function ($mdThemingProvider) {
    'use strict';
    
    $mdThemingProvider.theme('default')
      .primaryPalette('blue');
}])


// app.config(function Config($httpProvider, jwtInterceptorProvider, jwtOptionsProvider) {
//     // Please note we're annotating the function so that the $injector works when the file is minified
//     jwtOptionsProvider.config({
//         whiteListedDomains: ['http://127.0.0.1', 'localhost']
//     });
//     jwtInterceptorProvider.tokenGetter = function($cookies) {
//         var token = "Authorization: JWT ";
//         token += $cookies.get("token");
//         console.log(token);
//         return token;
//     }
//     $httpProvider.interceptors.push('jwtInterceptor');
// });
