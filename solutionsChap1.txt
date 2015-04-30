// Looping a Triangle

var triangle = '';
for (i=0; i<7; i++){
  triangle += '#';
  console.log(triangle);
};

// Fizz Buzz

for(i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log("FizzBuzz");
  }else if(i % 3 === 0){
    console.log("Fizz");
  }else if(i % 5 === 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
};

// Chess Board

function chessBoard(size) {
var board = "";
for(y = 0; y < size; y++){
  for(x = 0; x < size; x++){
    if((x + y) % 2 === 0){
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
return board;
}
console.log(chessBoard(8));

