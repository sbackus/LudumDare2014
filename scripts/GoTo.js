$(document).ready(function() {
  document.registerElement('go-to');

  $("go-to").click(function(evt) {
    var location = evt.toElement.getAttribute('location')
    $(location).zoomTo({targetsize:0.75, duration:600});
    $(location).click()
    evt.stopPropagation();
  });

$("#WakeUp").zoomTo({targetsize:0.75, duration:600});
$("#WakeUp").click();
});

