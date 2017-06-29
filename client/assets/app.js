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

// app.run(function($rootScope, $http, $location, $localStorage) {
//         // keep user logged in after page refresh
//         if ($localStorage.currentUser) {
//             $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
//         }
 
//         // redirect to login page if not logged in and trying to access a restricted page
//         $rootScope.$on('$locationChangeStart', function (event, next, current) {
//             var publicPages = ['/'];
//             var restrictedPage = publicPages.indexOf($location.path()) === -1;
//             if (restrictedPage && !$localStorage.currentUser) {
//                 $location.path('/');
//             }
//         });
// });