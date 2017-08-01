'use strict';

/**
 * @ngdoc service
 * @name sixupNgApp.auth
 * @description
 * # auth
 * Provider in the sixupNgApp.
 */

angular.module('sixupNgApp')
  .provider('UserService', function () {
    // Service logic
    // ...
    var isLoggedIn;
    var username;
    var password;
    var id;

    // Public API here
    this.set_isLoggedIn = function (rurl) {
      isLoggedIn = rurl;
      return isLoggedIn;
    };
    this.set_username = function (rurl) {
      username = rurl;
      return username;
    };
    this.set_password = function (rurl) {
      password = rurl;
      return password;
    };
    this.set_id = function (rurl) {
      id = rurl;
      return id;
    };


    this.$get = function() {
      return {
        get_user: function() {
          return {
            'isLoggedIn': isLoggedIn,
            'username': username,
            'password': password,
            'id': id
          }
        }
      }
    };
  });

angular.module('sixupNgApp')
  .factory('UserService', function () {

    var data = {
        isLoggedIn: false,
        username: '',
        password: '',
        id: 0
    };

    return {
        getisLoggedIn: function () {
            return data.isLoggedIn;
        },
        setisLoggedIn: function (isLoggedIn) {
            data.isLoggedIn = isLoggedIn;
        },
        getusername: function () {
            return data.username;
        },
        setusername: function (username) {
            data.username = username;
        },
        getpassword: function () {
            return data.password;
        },
        setpassword: function (password) {
            data.password = password;
        },
        getid: function () {
            return data.id;
        },
        setid: function (id) {
            data.id = id;
        }
    };
});
