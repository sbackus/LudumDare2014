$(document).ready(function() {

  $(".story-scene").each(function( index ) {
    if(this.getAttribute("part")!=0){
      this.style.display = 'none';
    }
  });

  $(".scene-container").each(function( containerIndex ) {
    for (i = 0; i<this.childElementCount-1; i++){
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

  });

});
