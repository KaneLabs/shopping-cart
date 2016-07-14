var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: '../partials/home.html',
    controller: 'HomeController'
  })
  .when('/about', {
    templateUrl: '../partials/about.html',
    controller: 'AboutController'
  })
  .when('/contact', {
    templateUrl: '../partials/contact.html',
    controller: 'ContactController'
  })
  .when('/checkout', {
    templateUrl: '../partials/checkout.html',
    controller: 'CheckoutController'
  })
  .otherwise({
    redirectTo: '/'
  })

  $locationProvider.html5Mode(true);
});
