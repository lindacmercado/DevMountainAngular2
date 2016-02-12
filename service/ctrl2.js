angular.module("app")
  .controller("ctrl2", function($scope) {
    $scope.getStuff = function() {
      $scope.name = service.check())
    }
  });
