var app = angular.module("myModule", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "view/home.html"
        })
        .when("/product", {
            templateUrl: "view/product.html"
        })
        .when("/launch", {
            templateUrl: "view/launch.html"
        })
        .when("/price", {
            templateUrl: "view/price.html"
        })
        .when("/contact", {
            templateUrl: "view/contact.html"
        })
});
app.controller("myController", function ($scope) {

})