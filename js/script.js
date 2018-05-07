var userNumbers = [];

var printNumbers = function(userNumber){
  for(var x = 1; x <= userNumber; x++){
    if(x % 3 === 0 && x % 5 !== 0 && x % 15 !== 0){
      userNumbers.push("ping");
    }else if (x % 5 === 0 && x % 3 !== 0 && x % 15 !== 0) {
      userNumbers.push("pong");
    }else if (x % 3 === 0 && x % 5 === 0 && x % 15 === 0) {
      userNumbers.push("ping-pong");
    }else {
      userNumbers.push(x);
    }
  }
};
// user interface logic
 $(document).ready(function() {
   $("form#user-number").submit(function(event) {
     event.preventDefault();
     var userNumber = parseInt($("input#number").val());
     var result = printNumbers(userNumber);

     $.each(userNumbers, function(index, value){
            $("#output").append((index + 1) + ": " + value + '<br>');
        });

     $("#output").show();
   });
 });
