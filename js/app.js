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


$(document).ready(function(){
  $("#projects").load("completed_projects.html", function(){
    console.log('done');
  });
  $('#modal-place').load('completed_projects_modals.html', function(){
    console.log('all good');
  });

});

var completed = document.getElementById('view-completed');
var inProgress = document.getElementById('view-in-progress');

completed.addEventListener("click", function(e) {
  console.log('hi');
  //display the completed programs
  $("#projects").load("completed_projects.html", function(){
    console.log('done');
  });
  $('#modal-place').load('completed_projects_modals.html', function(){
    console.log('all good');
  });
  //show the other button instead
  $('#in-progress-projects').css('display', 'none');
  $('#completed-projects').css('display', 'inline');
  e.preventDefault(); 
}, false);

inProgress.addEventListener("click", function(e) {
  console.log('yo');
  //display the in-progress programs
   $("#projects").load("ongoing_projects.html", function(){
    console.log('done');
  });
  $('#modal-place').load('ongoing_projects_modals.html', function(){
    console.log('all good');
  //show the other button instead
  $('#completed-projects').css('display', 'none');
  $('#in-progress-projects').css('display', 'inline');
  e.preventDefault(); 
}, false);