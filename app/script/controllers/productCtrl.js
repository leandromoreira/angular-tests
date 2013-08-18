angular.module('Amazony')
  .controller('ProductCtrl', function($scope, Poller){
     $scope.productsAmazony = Poller.getAll('api/amazony/products.json');
     $scope.productsEbai    = Poller.getAll('api/ebai/products.json');
  });
