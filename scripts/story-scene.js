$(document).ready(function() {


  $("#end").click(function(evt) {
    $(".scene-container").each(function( containerIndex ) {

      for (i = 1; i<this.childElementCount; i++){
        //hide all but the first scene
        var thisScene = this.children[i];
        thisScene.style.display = 'none';
      }
      //show the first scene
      var thisScene = this.children[0];
      thisScene.style.display = 'block';
    });
  });

  $(".scene-container").each(function( containerIndex ) {

    for (i = 1; i<this.childElementCount; i++){
      //hide all but the first scene
      var thisScene = this.children[i];
      thisScene.style.display = 'none';
    }

    for (i = 0; i<this.childElementCount-1; i++){
      var a = document.createElement('a');
      var linkImg = document.createElement("img");
      linkImg.setAttribute('src', 'images/nextButton.png');
      linkImg.setAttribute('alt', 'Next');
      a.appendChild(linkImg);
      a.className = "continue";
      a.addEventListener("click", function(e){

        //this is super hacky
        var thisScene = e.target.parentNode.parentNode.parentNode; // clicked element
        var idOfNextScene = thisScene.id.slice(0,-1) + (parseInt(thisScene.id.slice(-1))+1);
        var target = document.getElementById(idOfNextScene);
        Array.prototype.filter.call(target.parentNode.children, function (siblings) {
          siblings.style.display = 'none';
        });
        target.style.display = 'block';
      });
      this.children[i].children[1].appendChild(a);
    }

  });

});
