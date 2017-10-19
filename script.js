$( document ).ready(function() {
	$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        $("#button").css("margin-left","-=10px");
        break;

        case 38: // up
        $("#button").css("margin-top","-=10px");
        break;

        case 39: // right
        $("#button").css("margin-left","+=10px");
        break;

        case 40: // down
        $("#button").css("margin-top","+=10px");
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
    
});