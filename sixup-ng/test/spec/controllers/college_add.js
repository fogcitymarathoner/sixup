'use strict';

describe('Controller: CollegeAddCtrl', function () {

  // load the controller's module
  beforeEach(module('sixupNgApp'));

  var CollegeAddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollegeAddCtrl = $controller('CollegeAddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollegeAddCtrl.awesomeThings.length).toBe(3);
  });
});
