var config = {
          apiKey: "AIzaSyB3SIjtC6URYZgrh4MJLJn2FzWU2RosyD8",
          authDomain: "project-5197086768869881638.firebaseapp.com",
          databaseURL: "https://project-5197086768869881638.firebaseio.com",
          storageBucket: "project-5197086768869881638.appspot.com",
        };
        firebase.initializeApp(config);
        
var app=angular.module('ngFireApp',['firebase']);
app.controller('ngFireReDirController',['$scope', '$firebase','$firebaseAuth','$firebaseObject',
                                function($scope, $firebase, $firebaseAuth, $firebaseObject ) {
  $scope.Test = "Testing success";
  $scope.init=function(){
    //var ref = new Firebase('project-5197086768869881638.firebaseapp.com');
     // create an instance of the authentication service
    var auth = $firebaseAuth(firebase);
  
    auth.$authWithOAuthPopup("github").then(function(authData) {
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  };
  //function which logs in without using ngFire.Sync with angular differently
  $scope.initTraditional=function(){
  };
  
}]);
