'use strict';
angular.module('myApp.wordRoot', ['ngRoute', 'templates'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/word_roots/:id', {
    controller: 'WordRootCtrl',
    templateUrl: '<%= asset_path("word_root.html") %>',
    resolve: {
      jsonGrab: ['$http', '$route', function($http, $route) {
        return $http.get('/api/word_roots/').then(function(response) {
          return response.data;
        });
      }],
    }
  });
}])
.controller('WordRootCtrl', ['$scope', 'jsonGrab', function($scope, jsonGrab) {
  $scope.json = jsonGrab;
}]);
