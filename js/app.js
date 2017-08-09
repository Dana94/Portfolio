/*Referenced at https://css-tricks.com/snippets/jquery/smooth-scrolling/*/

$('body').scrollspy({ target: '#navbar-example' });

$('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
});

$(document).ready(function(){
  $('a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top - 50;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});

var completed = document.getElementById('completed');
var inProgress = document.getElementById('in-progress');

//disable
//$(inProgress).css('')


completed.addEventListener("click", function(e) {
  console.log('hi');
  //display the completed programs
  //disable its button
  //undisable the inProgress button
  e.preventDefault(); 
}, false);

inProgress.addEventListener("click", function(e) {
  console.log('yo');
  //display the in-progress programs
  //disable its button
  //undisable the completed button
  e.preventDefault(); 
}, false);