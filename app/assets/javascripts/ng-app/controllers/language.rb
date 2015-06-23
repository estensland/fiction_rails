'use strict';
angular.module('myApp.language', ['ngRoute', 'templates'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/languages/:id', {
    controller: 'LanguageCtrl',
    templateUrl: '<%= asset_path("language.html") %>',
    resolve: {
      jsonGrab: ['$http', '$route', function($http, $route) {
        return $http.get('/api/language/').then(function(response) {
          return response.data;
        });
      }],
    }
  });
}])
.controller('LanguageCtrl', ['$scope', 'jsonGrab', function($scope, jsonGrab) {
  $scope.json = jsonGrab;
}]);
