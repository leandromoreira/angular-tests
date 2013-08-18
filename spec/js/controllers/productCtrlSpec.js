describe('ProductCtrl', function(){
  var scope, controller;

  beforeEach(module('Amazony'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller;
  }));

  it('fetches products through Products service', function(){
    var mockService = {getAll:function(){}};
    spyOn(mockService, 'getAll');
    controller('ProductCtrl', {
      $scope: scope,
      Products: mockService
    });

    expect(mockService.getAll).toHaveBeenCalled();
  });
});
