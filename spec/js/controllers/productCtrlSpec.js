describe('ProductCtrl', function(){
  var scope, controller;

  beforeEach(module('Amazony'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('keeps polling products through Products service', function(){
    var mockService = {getAll:function(callback){
      callback(42);
    }};
    controller('ProductCtrl', {
      $scope: scope,
      Products: mockService
    });

    expect(scope.products).toBe(42);
  });
});
