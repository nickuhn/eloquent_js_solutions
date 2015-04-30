// Minumum

function min(x , y) {
  if ( x < y ){
    return x;
  } else {
    return y;
  }
};

// Recursion

function isEven(number){
  if (number >= 0){       // positive loop
    if ( number === 0){
      return true;
    } else if ( number === 1) {
      return false;
    } else {
      number -= 2;
      return isEven(number);
    }
  } else {              //negative loop
    if ( number === 0){
      return true;
    } else if ( number === 1) {
      return false;
    } else {
      number += 2;
      return isEven(number);
  }
}
};


// Bean Counting

// Count Bs

function countBs (bString) {
  var bCount = 0;
  for (i = 0; i < bString.length; i++){
    if (bString.charAt(i) === 'B'){
      bCount++;
    }
  }
  return bCount;
};

// Count Char

function countChar (charString, compare) {
  var charCount = 0;
  charString = charString.toLowerCase(); //modifies function to find just the letter regardless of case.
  compare = compare.toLowerCase();
  for (i = 0; i < charString.length; i++){
    if (charString.charAt(i) === compare){
      charCount++;
    }
  }
  return charCount;
};
