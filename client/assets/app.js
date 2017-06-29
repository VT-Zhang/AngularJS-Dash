var app = angular.module("app", ["ngRoute", "ngCookies", "angular-jwt"]);
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
    jwtOptionsProvider.config({
      tokenGetter: ['myService', function(myService) {
        myService.doSomething();
        return localStorage.getItem('id_token');
      }]
    });
  })