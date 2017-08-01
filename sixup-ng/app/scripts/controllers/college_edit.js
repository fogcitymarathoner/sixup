'use strict';

/**
 * @ngdoc function
 * @name sixupNgApp.controller:CollegeEditCtrl
 * @description
 * # CollegeEditCtrl
 * Controller of the sixupNgApp
 */
angular.module('sixupNgApp')
  .controller('CollegeEditCtrl', ['$scope', '$http', 'settings', '$base64', '$location', 'UserService', '$routeParams',
        function ($scope, $http, settings, $base64, $location, User, $routeParams
        ) {
          console.log($routeParams.id);
          console.log('in college csm - edit' + User.getusername());
          const $up = User.getusername() + ':' + User.getpassword();
          var url = settings.get_settings().api_url + settings.get_settings().update_college_endpoint + $routeParams.id + '/';
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($up);

          $http({method: 'GET', url: url})
            .then(function successCallback(response) {
              console.log(response.data[0])
              $scope.college_name = response.data[0].college.name
            }, function errorCallback(response) {
              console.log('bad profile fetch');
            });

        $scope.collegeUpdate = function (user, validity) {

          console.log('Updating ' + $scope.college_name);
          var url = settings.get_settings().api_url + settings.get_settings().update_college_endpoint + $routeParams.id + '/';
          var data = {
            "college_name": $scope.college_name
          };
          $http({method: 'PUT', url: url, data:data})
            .then(function successCallback(response) {
              console.log('modified college ' + $scope.college_name);
              $location.url( "/colleges" );
            }, function errorCallback(response) {
              console.log('bad login');
            });
        }
  }]);
