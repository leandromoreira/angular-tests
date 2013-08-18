angular.module('Amazony')
  .controller('ProductCtrl', function($scope, Products){
    $scope.products = Products.getAll();
  });
