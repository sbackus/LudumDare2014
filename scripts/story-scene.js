$(document).ready(function() {

  $(".scene-container").each(function( containerIndex ) {
    for (i = 0; i<this.childElementCount-1; i++){
      // add a continue button
      var thisScene = this.children[i];
      var nextScene = this.children[i+1];
      var a = document.createElement('a');
      var linkText = document.createTextNode("Continue");
      a.appendChild(linkText);
      a.className = "continue";
      a.addEventListener("click", function(){
        thisScene.style.display = 'none';
        nextScene.style.display = 'block';
      });
      this.children[i].appendChild(a);
    }
    for (i = 1; i<this.childElementCount; i++){
      var thisScene = this.children[i];
      thisScene.style.display = 'none';
    }
  });

});
