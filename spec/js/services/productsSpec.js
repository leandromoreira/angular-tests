describe('Products', function(){
  beforeEach(module('Amazony'));

  it('fetches products through API', inject(function(Products, $httpBackend){
    var fakeResponse = {'key': 'value'};
    $httpBackend.whenGET('api/amazony/products.json').respond(fakeResponse);

    var realResponse = {};
    Products.getAll().then(function(data){
      realResponse = data.data;
    });

    $httpBackend.flush();

    expect(realResponse).toEqual(fakeResponse);
  }));
});
