'use strict';

/**
 * @ngdoc service
 * @name sixupNgApp.settings
 * @description
 * # settings
 * Factory in the sixupNgApp.
 */
angular.module('sixupNgApp')
  .provider('settings', function () {
    // Service logic
    // ...

    var api_url;
    var auth_endpoint;
    var update_user_endpoint;
    var college_endpoint;
    var update_college_endpoint;

    // Public API here
    this.set_api_url = function (rurl) {
      api_url = rurl;
      return api_url;
    };
    this.set_update_user_endpoint = function (rurl) {
      update_user_endpoint = rurl;
      return update_user_endpoint;
    };
    this.set_auth_endpoint = function (rurl) {
      auth_endpoint = rurl;
      return auth_endpoint;
    };
    this.set_college_endpoint = function (rurl) {
      college_endpoint = rurl;
      return college_endpoint;
    };
    this.set_update_college_endpoint = function (rurl) {
      update_college_endpoint = rurl;
      return update_college_endpoint;
    };


    this.$get = function() {
      return {
        get_settings: function() {
          return {
            'api_url': api_url,
            'auth_endpoint': auth_endpoint,
            'update_user_endpoint': update_user_endpoint,
            'college_endpoint': college_endpoint,
            'update_college_endpoint': update_college_endpoint
          }
        }
      }
    };
  });
