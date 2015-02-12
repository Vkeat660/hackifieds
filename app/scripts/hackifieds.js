'use strict';

angular.module('hackifieds', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'firebase', 'ngResource', 'ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
