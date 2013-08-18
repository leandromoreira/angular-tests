var app = angular.module('Amazony', []);

app.config(function($routeProvider){
    $routeProvider
      .when('/products', {
        templateUrl: 'script/views/products.html',
        controller: 'ProductCtrl'
      })
      .otherwise({redirectTo: '/products'});
});

app.value('Config', {
  httpOptions: {timeout: 5000},
  pollingTimeout: 2000
});
