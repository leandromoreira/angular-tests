angular.module('Amazony')
  .factory('Poller', function($http, $timeout, $q){
    return {
      getAll: function(uri){
        var result = {list:[]};
        var deferred = $q.defer();

        var onSuccess = function(data){
          result.list = data;
          deferred.resolve(result);
          $timeout(poller, 3000);
        };

        var poller = function() {
          $http.get(uri).success(onSuccess);
        };
        poller();
        return deferred.promise;
      }
    };
  });
