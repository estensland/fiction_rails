angular.module('myApp.directives.info_panel', [])
  .directive('infoPanel', function() {
    return {
      constrict: 'E',
      scope: {
        task: '=',
        list: '=',
        categories: '=',
        obj: '=',
        selectedItem: '=',
        tasks: '='
      },

      templateUrl: '<%= asset_path("info_panel.html") %>',
      controller: function($scope, $http) {

      }
    }
  })