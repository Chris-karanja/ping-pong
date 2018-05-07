var printNumbers = function(userNumber){
  for(var x = 1; x <= userNumber; x++){
    if(x % 3 === 0 && x % 5 !== 0 && x % 15 !== 0){
        userNumbers.push("ping");
      }else if (x % 5 === 0 && x % 3 !== 0 && x % 15 !== 0) {
        userNumbers.push("pong");
