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
});
