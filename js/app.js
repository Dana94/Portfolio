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

//$('.in-progress-projects').css('display', 'none');

var completed = document.getElementById('view-completed');
var inProgress = document.getElementById('view-in-progress');

//disable
//$(inProgress).css('')

//do the projcts fade in/out? Maybe another way in jQuery to use

completed.addEventListener("click", function(e) {
  console.log('hi');
  //display the completed programs
  $('.completed-projects').css('display', 'inline');
  $('.in-progress-projects').css('display', 'none');
  e.preventDefault(); 
}, false);

inProgress.addEventListener("click", function(e) {
  console.log('yo');
  //display the in-progress programs
  $('.completed-projects').css('display', 'none');
  $('.in-progress-projects').css('display', 'inline');
  e.preventDefault(); 
}, false);