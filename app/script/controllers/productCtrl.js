angular.module('Amazony')
  .controller('ProductCtrl', function($scope, Poller){
     Poller.getAll('api/amazony/products.json', function(data){
       $scope.productsAmazony = data;
     });
     Poller.getAll('api/ebai/products.json', function(data){
       $scope.productsEbai = data;
     });
  });
