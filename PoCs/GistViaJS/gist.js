function displayGistCount(){
  var github = new Github({} ); 3
  var repo = github.getRepo( "gollum", "gollum" ); 4
  repo.show( function(err, repo) { 5
    alert(repo);
  });
}

function addGist(){
  alert('not implemented');
}
