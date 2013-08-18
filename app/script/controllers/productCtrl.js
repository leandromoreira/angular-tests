angular.module('Amazony')
  .controller('ProductCtrl', function($scope, Products){
     Products.getAll(function(data){
       $scope.products = data;
     });
  });
