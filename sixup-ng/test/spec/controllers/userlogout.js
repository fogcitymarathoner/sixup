'use strict';

describe('Controller: UserlogoutCtrl', function () {

  // load the controller's module
  beforeEach(module('sixupNgApp'));

  var UserlogoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserlogoutCtrl = $controller('UserlogoutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserlogoutCtrl.awesomeThings.length).toBe(3);
  });
});
