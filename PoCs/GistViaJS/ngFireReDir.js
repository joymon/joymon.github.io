var app=angular.module('ngFireApp',['firebase']);
app.controller('ngFireReDirController', ['$scope', '$firebase','$firebaseAuth',function($scope,$firebase,$firebaseAuth) {
  $scope.Test = "Testing success";
  $scope.init=function(){
    var ref = new Firebase('project-5197086768869881638.firebaseapp.com');
     // create an instance of the authentication service
    var auth = $firebaseAuth(ref);
    // login with Facebook
    auth.$authWithOAuthPopup("github").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  };
}]);
