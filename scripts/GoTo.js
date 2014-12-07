$(document).ready(function() {
    $("#linkToKitchen").click(function(evt) {
        $("#Kitchen").zoomTo({targetsize:0.75, duration:600});
        evt.stopPropagation();
    });
    $("#linkToBathroom").click(function(evt) {
        $("#Bathroom").zoomTo({targetsize:0.75, duration:600});
        evt.stopPropagation();
    });
    $("#linkToOutside").click(function(evt) {
        $("#Outside").zoomTo({targetsize:0.75, duration:600});
        evt.stopPropagation();
    });

$("#WakeUp").zoomTo({targetsize:0.75, duration:600});
});

