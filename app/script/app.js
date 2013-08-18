var app = angular.module('Amazony', []);

app.config(function($routeProvider){
    $routeProvider
      .when('/amazony', {
        templateUrl: 'script/views/amazony.html',
        controller: 'ProductCtrl'
      })
      .when('/ebai', {
        templateUrl: 'script/views/ebai.html',
        controller: 'ProductCtrl'
      })
      .otherwise({redirectTo: '/amazony'});
});

