'use strict';

/**
 * @ngdoc function
 * @name sixupNgApp.controller: RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the sixupNgApp
 */
angular.module('sixupNgApp')
  .controller('RegisterCtrl', ['$scope', '$http', 'settings', '$base64', '$location', 'UserService',
        function ($scope, $http, settings, $base64, $location, User
        ) {

        $scope.userRegister = function (user, validity) {

          console.log('Registering ' + user.name);
          var url = settings.get_settings().api_url + settings.get_settings().auth_endpoint
          var data = {
            "username": user.name,
            "email": user.email,
            "password": user.password1
          }
          $http({method: 'POST', url: url, data:data})
            .then(function successCallback(response) {
              console.log(response.data);
              User.setisLoggedIn(true);
              User.setusername(user.name);
              User.setpassword(user.password1);
              User.setid(response.data['id']);
              $location.url( "/user" );
            }, function errorCallback(response) {
              console.log('bad login');
            });
        }
    }]);
