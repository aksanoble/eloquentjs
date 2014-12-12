// Your code here.
function arrayToList(array) {
  list = {value: array[(array.length)-1], rest:null};
  for (var i= array.length -2; i>=0; i--) {
    var local = list;
    list = {value: array[i], rest: local};
  }
  return list;
}

//listToArray defined after looking at the hint
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend (value, list) {
  var local = list;
  list = {value:value, rest:local};
  return list;
}

//the nonrecursive way of defining nth
function nth(list, number) {
  var i = 0;
  for (var node = list; node; node = node.rest) {
    if (number == i) return node.value
    else if (node !== null) i++;
    else return undefined;
  }
}

// recursive after looking at the solution

function nth(list, n) {
  if (n==0) return list.value;
  else return nth(list.rest, n-1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20