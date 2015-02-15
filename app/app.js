angular.module("protractor", []);

angular.module("protractor").controller("MainCtrl", ["$scope", function($scope){
    $scope.message = "Go Go Protractor";
}])