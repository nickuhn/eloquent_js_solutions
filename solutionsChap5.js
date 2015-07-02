//Flattening

function flatten(array) {
  var newArray = array.reduce(function(x, y) {
    return x.concat(y);
  });
  return(newArray);
}

//Mother Child Age Difference

//average of array function and byName used as is from book
function average(array) {
  function plus(a, b) {
    return a + b;
  }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//My code, filters out mothers not in the JSON then builds an array of the
//age a mother was when child was born. Finally averages that array.
var ageOfMother  = [];

var motherExists = ancestry.filter(function(person) {
   return byName[person.mother] !== null;
});

motherExists.forEach(function(person) {
  ageOfMother.push(person.born - byName[person.mother].born);
});

console.log(average(ageOfMother));

//Historical life expectancy

var byCentury = {};
ancestry.forEach(function(person) {
  var centuryBorn = Math.ceil(person.died / 100);
  if (centuryBorn in byCentury) {
    byCentury[centuryBorn].push(person.died - person.born);
  } else {
    byCentury[centuryBorn] = [person.died - person.born];
  }
  return byCentury;
});

for (var century in byCentury) {
  console.log(century + ': ' + average(byCentury[century]));
}

//Bonus

function groupBy(array, sortFunction) {
  var sorted = {};
  array.forEach(function(item) {
    var group = sortFunction(item)
    if (group in sorted) {
      sorted[group].push(item);
    } else {
      sorted[group] = [item];
    }
  });
  return sorted;
}

//Every and Then Some

function every(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i])) {
      return false;
    }
  }
  return true;
}

function some(array, test) {
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])) {
      return true;
    }
  }
  return false;
}





