'use strict';

/**
 * @ngdoc function
 * @name sixupNgApp.controller:UserlogoutCtrl
 * @description
 * # UserlogoutCtrl
 * Controller of the sixupNgApp
 */
angular.module('sixupNgApp')
  .controller('UserlogoutCtrl',['$location', 'UserService', function ($location, User) {

    // successful logout
    User.setisLoggedIn(false);
    User.setusername('');
    $location.path( "/" );
  }]);
