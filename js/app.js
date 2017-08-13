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

// $('#projects').load('completed_projects.html');
// $('#modal-place').load('completed_projects_modals.html');

//
var link = document.querySelector('link[rel=import]');

    // Clone the <template> in the import.
    var template = link.import.querySelector('#completed-projects');
    var clone = document.importNode(template.content, true);

    document.querySelector('#projects').appendChild(clone);
////








var completed = document.getElementById('view-completed');
var inProgress = document.getElementById('view-in-progress');

//disable
//$(inProgress).css('')

//do the projcts fade in/out? Maybe another way in jQuery to use

completed.addEventListener("click", function(e) {
  console.log('hi');
  //display the completed programs
  $('#in-progress-projects').css('display', 'none');
  $('#completed-projects').css('display', 'inline');
  e.preventDefault(); 
}, false);

inProgress.addEventListener("click", function(e) {
  console.log('yo');
  //display the in-progress programs
  $('#completed-projects').css('display', 'none');
  $('#in-progress-projects').css('display', 'inline');
  e.preventDefault(); 
}, false);