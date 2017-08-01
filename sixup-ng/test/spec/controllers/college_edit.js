'use strict';

describe('Controller: CollegeEditCtrl', function () {

  // load the controller's module
  beforeEach(module('sixupNgApp'));

  var CollegeEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CollegeEditCtrl = $controller('CollegeEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CollegeEditCtrl.awesomeThings.length).toBe(3);
  });
});
