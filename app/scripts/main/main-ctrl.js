/* global Firebase */

'use strict';

angular.module('hackifieds')
  .controller('MainCtrl', function ($scope, Post) {
    
    $scope.posts = Post.all;
    $scope.post = {title: '', description: '', email: ''};

    $scope.submitPost = function () {
        Post.create($scope.post).then(function () {
                  $scope.post = {title: '', description: '', email: ''};
        });
    };

    $scope.deletePost = function (post) {
        Post.delete(post);
    };
    
});
