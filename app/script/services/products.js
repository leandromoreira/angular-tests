angular.module('Amazony')
  .factory('Products', function($http, $timeout){
    return {
      getAll: function(callback){
        var onSuccess = function(result){
          callback(result);
          $timeout(poller, 3000);
        };

        var poller = function() {
          $http.get('api/amazony/products.json').success(onSuccess);
        };
        poller();
      }
    };
  });
