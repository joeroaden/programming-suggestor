$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const years = parseInt($("input#howLong").val());
    //const gender = $("select#gender").val();

    if (years >=3) {
      $("#answer").show ();
   
    } else {
      $("#answer2").show();
    }
    
    event.preventDefault();
    
    });

    });








   
