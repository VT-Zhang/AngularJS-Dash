var app = angular.module("app", ["ngRoute", "ngCookies", "angular-jwt", "ngStorage"]);
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

app.config(function Config($httpProvider, jwtOptionsProvider) {
    // Please note we're annotating the function so that the $injector works when the file is minified
    $httpProvider.interceptors.push('jwtInterceptor');
    jwtOptionsProvider.config({
        whiteListedDomains: ['127.0.0.1', 'localhost'],
        tokenGetter: function(options, $cookies, jwtHelper) {
            var token = $cookies.get("token");
            console.log(token);
            return token;
        }
    });
});

// app.factory('authInterceptor', function ($rootScope, $q, $window) {
//   return {
//     request: function (config) {
//       config.headers = config.headers || {};
//       if ($window.sessionStorage.token) {
//         config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
//       }
//       return config;
//     },
//     response: function (response) {
//       if (response.status === 401) {
//         // handle the case where the user is not authenticated
//       }
//       return response || $q.when(response);
//     }
//   };
// });
// app.config(function ($httpProvider) {
//   $httpProvider.interceptors.push('authInterceptor');
// });