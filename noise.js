$(document).ready( function() {


  var playByNote = function(musicNote){
    var musicID = "#"+musicNote+"Audio";
    $(musicID)[0].load();
    $(musicID)[0].play();
  };

  $(".instrument").on("click", "button", function(event){
    var musicTone = $(this).attr("class").substr(-1);
    playByNote(musicTone);
  });


  $("body").on("keydown", function(event){
    // Keyboard plays using keys: dfghjkl
    var usedKeys = {'d':'c', 'f':'d', 'g':'e', 'h':'f', 'j':'g', 'k':'a', 'l':'b'};
    var musicTone = usedKeys[event.key.toLowerCase()];

    playByNote(musicTone);
  });

});
