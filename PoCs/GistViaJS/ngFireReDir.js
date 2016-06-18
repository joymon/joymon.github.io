var app=angular.module('ngFireApp',['firebase']);
app.controller('ngFireReDirController', ['$scope', '$firebase',function($scope,$firebase) {
  $scope.Test = "Testing success";
  $scope.init=function(){
    var ref = new Firebase('project-5197086768869881638.firebaseapp.com'); 
  };
}]);
