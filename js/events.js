//define functions here
function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function(){
    $('img').append(' class="tasty" ');
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
      alert("Your form is going to be submitted now.")
  });
}

$(document).ready(function(){

// call functions here

});
