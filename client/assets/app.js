var app = angular.module("app", ["ngRoute", "ngCookies"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl:"partials/login.html"
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
    .when("/client_new", {
        templateUrl:"partials/client_new.html"
    })
    .otherwise({
        templateUrl:"partials/dashboard.html"
    });
});
