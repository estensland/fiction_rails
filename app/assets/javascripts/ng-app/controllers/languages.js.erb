'use strict';
angular.module('myApp.languages', ['ngRoute', 'templates'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/languages', {
    controller: 'LanguagesCtrl',
    templateUrl: '<%= asset_path("languages.html") %>',
    resolve: {
      jsonGrab: ['$http', '$route', function($http, $route) {
        return $http.get('/api/languages/').then(function(response) {
          return response.data;
        });
      }],
    }
  });
}])
.controller('LanguagesCtrl', ['$scope', 'jsonGrab', function($scope, jsonGrab) {
  $scope.json = jsonGrab;
}]);
