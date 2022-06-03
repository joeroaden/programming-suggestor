$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const years = parseInt($("input#howLong").val());
    //const gender = $("select#gender").val();

    if (years >=10) {
      $("#answer").show ();

    } else if (years <=2) {
      $("#answer3").show ();
    
    } else {
      $("#answer2").show();
    }
    
    event.preventDefault();
    
    });

    });








   
