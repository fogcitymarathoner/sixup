'use strict';

/**
 * @ngdoc function
 * @name sixupNgApp.controller:UserloginCtrl
 * @description
 * # UserloginCtrl
 * Controller of the sixupNgApp
 */
angular.module('sixupNgApp')
  .controller('UserloginCtrl', ['$scope', '$http', 'settings', '$base64', '$location', 'UserService',
        function ($scope, $http, settings, $base64, $location, User
        ) {
        // Login User in get user id from username/password
        //
        $scope.userLogin = function (user, validity) {

          console.log('logging in');
          const $up = user.name + ':' + user.password;
          var url = settings.get_settings().api_url + settings.get_settings().auth_endpoint
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($up);

          $http({method: 'GET', url: url})
            .then(function successCallback(response) {
              User.setisLoggedIn(true);
              User.setusername(response.data[0]['username']);
              User.setpassword(user.password);
              User.setid(response.data[0]['id']);
              $location.url( "/user" );
            }, function errorCallback(response) {
              console.log('bad login');
            });
        }
    }]);
