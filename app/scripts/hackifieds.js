'use strict';

angular.module('hackifieds', [
   'ngAnimate',
   'ngCookies',
   'ngTouch',
   'ngSanitize',
   'ngResource',
   'firebase',
   'ngRoute'
  ])
  .constant('FIREBASE_URL', 'https://hackifieds.firebaseio.com/')
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
