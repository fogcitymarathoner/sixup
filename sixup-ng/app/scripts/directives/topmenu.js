'use strict';

/**
 * @ngdoc directive
 * @name sixupNgApp.directive:topMenu
 * @description
 *
 * reveals top menu when logged it, otherwise show button to login page
 *
 * # topMenu
 */
angular.module('sixupNgApp')
  .directive('topMenu',['UserService', function (User) {
    return {
      template:'<ng-include src="template"/>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watch(function () {
            return User.getisLoggedIn();
          },
          function (isLoggedIn) {

            if( isLoggedIn ){
              scope.template = 'views/top-menu/logged_in.html';
            } else {
              scope.template = 'views/top-menu/logged_out.html';
            }
          });
      }
    };
  }]);
//http://stackoverflow.com/questions/18892793/angularjs-directives-how-to-conditionally-apply-a-template
