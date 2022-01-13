
function add(number1, number2){
  return number1 + number2;
}


$(document).ready(function() {
  $("#showButton").click(function() {
    $(".showing").toggle();
    $(".hiding").toggle();
   // $(".showing").toggle();
    //$(".hiding").toggle();
  });

 

  $( "#addButton" ).click(function() {
    alert( "Welcome to the Calculator. Click to continue" );
    const n1 = parseInt(prompt("enter a number:"));
    const n2 = parseInt(prompt("enter another number:"));
    const result = add(n1, n2);
    alert(result);
  });

  $(".hiding").hide();


});
