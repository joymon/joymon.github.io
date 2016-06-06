function displayGistCount(){
  var github = new GitHub({} ); 3
  var repo = github.getRepo( "joymon", "joymon" );
  var gist= github.getGist();
 gist.read(function(err,gis,xmlH){
   alert(gis);
 });
}

function addGist(){
  if(firebase.auth().currentUser){
    alert("Token is " + document.getElementById('quickstart-oauthtoken').textContent);
    alert(firebase.auth().currentUser);
  }
  else{
    alert("firebase.auth().currentUser is not set");
  }
}
