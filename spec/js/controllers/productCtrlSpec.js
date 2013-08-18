describe('ProductCtrl', function(){
  var scope;

  beforeEach(module('Amazony'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('ProductCtrl', {
      $scope: scope
    });
  }));

  it('fetches two products', function(){
    expect(scope.products.length).toBe(3);
  });
});
