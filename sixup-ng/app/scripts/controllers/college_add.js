'use strict';

/**
 * @ngdoc function
 * @name sixupNgApp.controller:CollegeAddCtrl
 * @description
 * # CollegeAddCtrl
 * Controller of the sixupNgApp
 */

angular.module('sixupNgApp')
  .controller('CollegeAddCtrl', ['$scope', '$http', 'settings', '$base64', '$location', 'UserService',
    function ($scope, $http, settings, $base64, $location, User
        ) {
          console.log('in college csm - add' + User.getusername());
          const $up = User.getusername() + ':' + User.getpassword();
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($up);


        $scope.collegeAdd = function (user, validity) {

          console.log('Updating ' + $scope.college_name);
          var url = settings.get_settings().api_url + settings.get_settings().college_endpoint;
          var data = {
            "college_name": $scope.college_name
          };
          $http({method: 'POST', url: url, data:data})
            .then(function successCallback(response) {
              console.log('modified college ' + $scope.college_name);
              $location.url( "/colleges" );
            }, function errorCallback(response) {
              console.log('bad college addition');
            });
        }
  }]);
