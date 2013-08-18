angular.module('Amazony')
  .factory('Poller', function($http, $timeout){
    return {
      getAll: function(uri, successCallback){
        var onSuccess = function(result){
          successCallback(result);
          $timeout(poller, 3000);
        };

        var poller = function() {
          $http.get(uri).success(onSuccess);
        };
        poller();
      }
    };
  });
