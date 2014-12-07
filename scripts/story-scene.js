$(document).ready(function() {

  $(".scene-container").each(function( containerIndex ) {

    for (i = 1; i<this.childElementCount; i++){
      //hide all but the first scene
      var thisScene = this.children[i];
      thisScene.style.display = 'none';
    }

    for (i = 0; i<this.childElementCount-1; i++){
      // add a continue button
      var thisScene = this.children[i];
      var nextScene = this.children[i+1];
      var a = document.createElement('a');
      var linkImg = document.createElement("img");
      linkImg.setAttribute('src', 'images/nextButton.png');
      linkImg.setAttribute('alt', 'Next');
      a.appendChild(linkImg);
      a.className = "continue";
      a.addEventListener("click", function(){
        thisScene.style.display = 'none';
        nextScene.style.display = 'block';
      });
      this.children[i].children[1].appendChild(a);
    }

  });

});
