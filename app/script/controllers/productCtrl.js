angular.module('Amazony')
  .controller('ProductCtrl', function($scope){
    $scope.products = [
                       {
                         'name': 'book of music',
                         'price': 34.55,
                         'tags': ['music', 'guitar']
                        },
                       {
                         'name': 'book of game',
                         'price': 34.55,
                         'tags': ['sony', 'nintendo', 'microsoft']
                        },
                       {
                         'name': 'book of books',
                         'price': 34.55,
                         'tags': ['writing', 'reading']
                        }
                       ];
});
