//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').prepend('<img class="tasty" />');
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if (key.which === 71){
      alert('g was pressed');
    }
  });
}

function submitIt() {
  $('form').on('submit', function(){
      alert("your form is going to be submitted now.")
  });
}

$(document).ready(function(){

// call functions here

});
