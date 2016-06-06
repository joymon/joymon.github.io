function displayGistCount(){
  var github = new GitHub({} ); 3
  var repo = github.getRepo( "joymon", "joymon" );
  var gist= github.getGist();
 gist.read(function(err,gis,xmlH){
   alert(gis);
 });
}

function addGist(){
  var token=document.getElementById('quickstart-oauthtoken').textContent;
  if(firebase.auth().currentUser && token){
    addHardcodedGistToLoggedInUser(token);
    //alert("Token is " + token);
    //alert(firebase.auth().currentUser);
  }
  else{
    alert("firebase.auth().currentUser is not set");
  }
}
function addHardcodedGistToLoggedInUser(authToken) {
  var github = new GitHub({token:authToken});
  var repo = github.getRepo( "joymon", "joymon" );
  var gist= github.getGist();
  gist.create({
    "description": "Test coded public gist",
    "public": true,
    "files": {
      "file1.karel": {
        "content": "A sample karel progrma!"
      }
    }
  }).then(function(data) {
    // Promises!
    let gistJson = data;
    gist.read(function(err, gist, xhr) {
      if(err===null){
        alert(gist);
      }
    });
  });
}
