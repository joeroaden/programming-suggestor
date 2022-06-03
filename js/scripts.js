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
//});



   //if (years) {
    //let answer = Ruby;
    //if (gender==="male" && years < 26) //{
      //answer +=50;
    //}

    //$("#language").text(quote);
    //$("#answer").show();
  //} else {
    //alert("Please enter your answers.");
  //}

    //event.preventDefault();
  //});
