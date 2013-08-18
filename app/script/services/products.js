angular.module('Amazony')
  .factory('Products', function($http){
    return {
      getAll: function(){
        return $http.get('api/amazony/products.json');
      }
    };
});
