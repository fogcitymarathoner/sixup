'use strict';

/**
 * @ngdoc function
 * @name sixupNgApp.controller:CollegesCtrl
 * @description
 * # CollegesCtrl
 * Controller of the sixupNgApp
 */
angular.module('sixupNgApp')
  .controller('CollegesCtrl', ['$scope', '$http', 'settings', '$base64', '$location', 'UserService',
        function ($scope, $http, settings, $base64, $location, User
        ) {
          console.log('in college csm ' + User.getusername());
          const $up = User.getusername() + ':' + User.getpassword();
          var url = settings.get_settings().api_url + settings.get_settings().college_endpoint
          $http.defaults.headers.common['Authorization'] = 'Basic ' + $base64.encode($up);

          $http({method: 'GET', url: url})
            .then(function successCallback(response) {
              $scope.colleges = [];
              for (var i in response.data) {
                console.log(response.data[i]);
                $scope.colleges.push(response.data[i]);
              }
              console.log($scope.colleges);
            }, function errorCallback(response) {
              console.log('bad profile fetch');
            });
  }]);
