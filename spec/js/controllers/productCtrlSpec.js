describe('ProductCtrl', function(){
  var scope, controller;

  beforeEach(module('Amazony'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('keeps polling products through Poller service', function(){
    var mockService = {getAll:function(uri){}};
    spyOn(mockService,'getAll');
    controller('ProductCtrl', {
      $scope: scope,
      Poller: mockService
    });

    expect(mockService.getAll).toHaveBeenCalledWith('api/amazony/products.json');
    expect(mockService.getAll).toHaveBeenCalledWith('api/ebai/products.json');
  });
});
