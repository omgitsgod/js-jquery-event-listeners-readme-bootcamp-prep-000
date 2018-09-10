//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('form').on('keydown', function(k) {
    if (k.which == (alert('')
  })
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
});
