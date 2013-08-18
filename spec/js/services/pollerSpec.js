describe('Products', function(){
  beforeEach(module('Amazony'));

  it('fetches products through API', inject(function(Poller, $httpBackend){
    var fakeResponse = {'key': 'value'};
    $httpBackend.whenGET('api/amazony/products.json').respond(fakeResponse);

    var realResponse = {};
    Poller.getAll('api/amazony/products.json', function(data){
      realResponse = data;
    });

    $httpBackend.flush();

    expect(realResponse).toEqual(fakeResponse);
  }));
});
