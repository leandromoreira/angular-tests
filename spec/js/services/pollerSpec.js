describe('Products', function(){
  beforeEach(module('Amazony'));

  it('fetches products through API', inject(function(Poller, $httpBackend){
    var fakeResponse = {'key': 'value'};
    $httpBackend.whenGET('any/request/this.myformat').respond(fakeResponse);

    var realResponse = {};
    Poller.getAll('any/request/this.myformat').then(function(data){
      realResponse = data;
    });

    $httpBackend.flush();

    expect(realResponse.list).toEqual(fakeResponse);
  }));
});
