'use strict';

/**
 * @ngdoc function
 * @name sixupNgApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the sixupNgApp
 */
angular.module('sixupNgApp')
  .controller('UserCtrl', ['$scope', '$http', 'settings', '$base64', '$location', 'UserService',
        function ($scope, $http, settings, $base64, $location, User
        ) {
          console.log('in profile ' + User.getusername() + User.getpassword());
          const $up = User.getusername() + ':' + User.getpassword();
          var url = settings.get_settings().api_url + settings.get_settings().auth_endpoint;
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($up);
          $http({method: 'GET', url: url})
            .then(function successCallback(response) {
              $scope.username = response.data[0]['username'];
              $scope.first_name = response.data[0]['first_name'];
              $scope.last_name = response.data[0]['last_name'];
              $scope.email = response.data[0]['email'];
            }, function errorCallback(response) {
              console.log('bad profile fetch');
            });

        $scope.userUpdate = function (user, validity) {

          console.log('Updating ' + $scope.username);
          var url = settings.get_settings().api_url + settings.get_settings().update_user_endpoint + User.getid() + '/';
          var data = {
            "first_name": this.first_name,
            "last_name": this.last_name,
            "email": this.email
          };
          $http({method: 'PUT', url: url, data:data})
            .then(function successCallback(response) {
              console.log('modified profile ' + User.getusername());
            }, function errorCallback(response) {
              console.log('bad login');
            });
        }
  }]);
