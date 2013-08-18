describe('ProductCtrl', function(){
  var scope, controller;

  beforeEach(module('Amazony'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('keeps polling products through Poller service', function(){
    var mockService = {getAll:function(uri, callback){
      if (uri == 'api/amazony/products.json'){
        callback("amazony");
      }else if(uri == 'api/ebai/products.json'){
        callback("ebai");
      }
    }};
    controller('ProductCtrl', {
      $scope: scope,
      Poller: mockService
    });

    expect(scope.productsAmazony).toBe("amazony");
    expect(scope.productsEbai).toBe("ebai");
  });
});
