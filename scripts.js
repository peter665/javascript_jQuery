$(document).ready(function(){
  var $width = $(window).width();
  var $square = ($width - 16*10 -16) / 16
  for(var i=1; i<=256; i++) {
    $('#container').append('<div class="smallDiv"></div>');
  }
  $('.smallDiv').width($square);
  $('.smallDiv').height($square);
  $('.smallDiv').hover(
    function(){
      $(this).addClass('colorB');
    },
    function(){
      $(this).animate({backgroundColor: 'red'}, 1500);

    });
});
