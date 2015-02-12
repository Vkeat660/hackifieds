/* global Firebase */

'use strict';

angular.module('hackifieds')
  .controller('MainCtrl', function ($scope, $firebase) {
    
    var ref = new Firebase('https://hackifieds.firebaseio.com/');
    var sync = $firebase(ref);
    
  });
