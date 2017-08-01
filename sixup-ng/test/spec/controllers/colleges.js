'use strict';

describe('Controller: CollegesCtrl', function () {

  // load the controller's module
  beforeEach(module('sixupNgApp'));

  var CollegesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollegesCtrl = $controller('CollegesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollegesCtrl.awesomeThings.length).toBe(3);
  });
});
