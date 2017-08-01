'use strict';

describe('Service: appuser', function () {

  // instantiate service
  var appuser,
    init = function () {
      inject(function (_appuser_) {
        appuser = _appuser_;
      });
    };

  // load the service's module
  beforeEach(module('sixupNgApp'));

  it('should do something', function () {
    init();

    expect(!!appuser).toBe(true);
  });

  it('should be configurable', function () {
    module(function (appuserProvider) {
      appuserProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(appuser.greet()).toEqual('Lorem ipsum');
  });

});
