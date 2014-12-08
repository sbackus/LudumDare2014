$(document).ready(function() {
  document.registerElement('go-to');

  $("go-to").click(function(evt) {
    var location = evt.toElement.getAttribute('location')
    if (location == null){
      location = evt.toElement.parentNode.getAttribute('location')
    }
    $(location).zoomTo({targetsize:0.75, duration:600});
    $(location).click()
    evt.stopPropagation();
  });

$("#Intro").zoomTo({targetsize:0.75, duration:600});
$("#Intro").click();
});

