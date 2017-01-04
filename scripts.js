
$(document).ready(function(){
  var count = 16;
  var $square = 750 / count;

  generateSquares(count, $square);

  $('button').click(function(){
    $('div .smallDiv').remove();
    count = prompt("How many squares do you want per side?");
    $square = 750 / count;
    generateSquares(count, $square);
  });

  function generateSquares(count, $square) {
    for(var i=1; i<=count*count; i++) {
      $('#pad').append('<div class="smallDiv"></div>');
    }
    $('.smallDiv').width($square);
    $('.smallDiv').height($square);
    $('.smallDiv').hover(
      function(){
            $(this).addClass('colorB');
      });
  };


});
