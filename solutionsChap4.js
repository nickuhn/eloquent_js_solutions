//Sum of a Range

//create array with numbers from start to end
function range(start, end) {
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

//adds up elements of array
function sum(argArray) {
  var total = 0;
  for (var i = 0; i < argArray.length; i++) {
    total += argArray[i];
  }
  return total;
}

//Array creator with step option
function range(start, end, step) {
  var arr = [];
  if (step === undefined) {
    step = 1;
  }
  for (var i = start; i <= end; i+=step) {
    arr.push(i);
  }
  return arr;
}

//Array Creator with step and negatives

function range(start, end, step) {
  var arr = [];
  if (step === undefined) {
    step = 1;
  } else if (step > 0) {
      for (var i = start; i <= end; i+=step) {
        arr.push(i);
      }
  } else {
    for (var j = start; j >= end; j+=step){
      arr.push(j);
    }
  }
  return arr;
}


//Reversing and Array

//create a reverse array using push iteration

function reverseArray(arrToReverse) {
  var reversedArray = [];
  for (var i = arrToReverse.length - 1; i >= 0; i--) {
    reversedArray.push(arrToReverse[i]);
  }
  return reversedArray;
}

//revers an array in place

function reverseArrayInPlace(arrToReverse) {
  var placeHolder = 0;
  var lengthToReverse = Math.floor(arrToReverse.length / 2);
  for (var i = 0; i < lengthToReverse; i++) {
    placeHolder = arrToReverse[i];
    arrToReverse[i] = arrToReverse[(arrToReverse.length-1-i)];
    arrToReverse[(arrToReverse.length-1-i)] = placeHolder;
  }
  return arrToReverse;
}

//A List

//Array to List

function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list};
  }
  return list;
}

//List to Array

function listToArray(list) {
  var listArray=[];
  while (list) {
    listArray.push(list.value);
    list = list.rest;
  }
  return listArray;
}

//Prepend item to list

function prepend(add, list) {
  var  list2 = { value: add, rest: list};
  return list2;
}

//Find nth value in list

function nth(list, search) {
  if(search < 0) {
    return undefined;
  } else if (search === 0) {
    return list.value;
  } else {
    return nth(list.rest, search-1);
  }
}

//Deep Comparison

function deepEqual(a , b) {
  if ((typeof(a) === "object" && a !== null) && (typeof(b) === "object" && b !== null)) {
    var countA = 0;
    var countB = 0;
    for (var prop in a) {
      countA += 1;
    }
    for (prop in b) {
      countB +=1;
      if (!(prop in a) || !deepEqual(a[prop],b[prop])){
        return false;
      }
    }
    return countA === countB;
  } else {
    if (a === b) {
      return true;
    } else {
      return false;
    }
  }
}
















