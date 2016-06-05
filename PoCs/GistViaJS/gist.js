function displayGistCount(){
  var github = new GitHub({} ); 3
  var repo = github.getRepo( "joymon", "joymon" );
  var gist= github.getGist();
 gist.read(function(err,gis,xmlH){
   alert(gis);
 });
}

function addGist(){
  alert('not implemented');
}
