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

// $('#modal-place').load('completed_projects_modals.html');

//
// var link = document.querySelector('link[rel=import]');

//     // Clone the <template> in the import.
//     var template = link.import.querySelector('#completed-projects');
//     var clone = document.importNode(template.content, true);

//     document.querySelector('#projects').appendChild(clone);
//

// $("#projects").load("completed_projects.html", () => {
//   console.log('loaded!');
// });

///https://www.w3schools.com/xml/ajax_intro.asp
// var xhttp = new XMLHttpRequest();
//   // xhttp.onreadystatechange = function() {
//   //   if (this.readyState == 4 && this.status == 200) {
//   //    document.getElementById("projects").innerHTML = this.responseText;
//   //   }
//   // };
//   xhttp.open("GET", "completed_projects.html", true);
//   xhttp.send();


$(document).ready(function(){
  $("#projects").load("completed_projects.html", function(){
    $('#here').text($('#projects').html()); // Shows html - just for testing
  });
});
// var getImport = document.querySelector('#completed-projects-page');
// var getContent = getImport.import.querySelector('#completed-projects');
// document.body.appendChild(document.importNode(getContent, true));



// var completed = document.getElementById('view-completed');
// var inProgress = document.getElementById('view-in-progress');

// //disable
// //$(inProgress).css('')

// //do the projcts fade in/out? Maybe another way in jQuery to use

// completed.addEventListener("click", function(e) {
//   console.log('hi');
//   //display the completed programs
//   $('#in-progress-projects').css('display', 'none');
//   $('#completed-projects').css('display', 'inline');
//   e.preventDefault(); 
// }, false);

// inProgress.addEventListener("click", function(e) {
//   console.log('yo');
//   //display the in-progress programs
//   $('#completed-projects').css('display', 'none');
//   $('#in-progress-projects').css('display', 'inline');
//   e.preventDefault(); 
// }, false);