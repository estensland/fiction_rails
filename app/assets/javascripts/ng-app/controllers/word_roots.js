'use strict';
angular.module('myApp.wordRoots', ['ngRoute', 'templates'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/word_roots', {
    controller: 'WordRootsCtrl',
    templateUrl: '<%= asset_path("word_roots.html") %>',
    resolve: {
      jsonGrab: ['$http', '$route', function($http, $route) {
        return $http.get('/api/word_roots/').then(function(response) {
          return response.data;
        });
      }],
    }
  });
}])
.controller('WordRootsCtrl', ['$scope', 'jsonGrab', function($scope, jsonGrab) {
  $scope.json = jsonGrab;
}]);
