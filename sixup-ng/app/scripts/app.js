'use strict';

/**
 * @ngdoc overview
 * @name sixupNgApp
 * @description
 * # sixupNgApp
 *
 * Main module of the application.
 */
angular
  .module('sixupNgApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	  'base64',
	  'ngResource'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
	    //
      // users - authentication
      //
      .when('/userLogin', {
        templateUrl: 'views/users/login.html',
        controller: 'UserloginCtrl',
        controllerAs: 'userLogin'
      })
      .when('/userLogout', {
        templateUrl: 'views/users/logout.html',
        controller: 'UserlogoutCtrl',
        controllerAs: 'userLogout'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/user', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/colleges', {
        templateUrl: 'views/colleges.html',
        controller: 'CollegesCtrl',
        controllerAs: 'colleges'
      })
      .when('/college_edit/:id', {
        templateUrl: 'views/college_edit.html',
        controller: 'CollegeEditCtrl',
        controllerAs: 'collegeEdit'
      })
      .when('/college_add', {
        templateUrl: 'views/college_add.html',
        controller: 'CollegeAddCtrl',
        controllerAs: 'collegeAdd'
      })
      .otherwise({
        redirectTo: '/'
      })
})

      .config(function (settingsProvider) {
      var api_host = 'localhost';
      var api_port = '8000';
      var api_user_login_endpoint = '/users/';
    settingsProvider.set_api_url('http://'+api_host+':'+api_port); // no trailing '/' because resource urls have those prepended
    settingsProvider.set_auth_endpoint(api_user_login_endpoint);
    settingsProvider.set_update_user_endpoint('/user-update/');
    settingsProvider.set_college_endpoint('/colleges/');
    settingsProvider.set_update_college_endpoint('/college-update/');
  });
