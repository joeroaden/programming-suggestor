$(document).ready(function() {
  $("form#programming").submit(function(event) {
    const years = parseInt($("input#howLong").val());
    //const gender = $("select#gender").val();

    if (years >=10) {
      $("#answer").show ();

    } else if (years <=1) {
      $("#answer3").show ();  

    } else {
      $("#answer2").show();
      
    }
    
    event.preventDefault();
    
    });

    });

$(document).ready(function() {
  $("#answer3").click(function() {
    $(this).remove();
  });
});

$(document).ready(function() {
  $("#answer").click(function() {
    $(this).remove();
  });
});


$(document).ready(function() {
  $("#answer2").click(function() {
    $(this).remove();
  });

  
});

