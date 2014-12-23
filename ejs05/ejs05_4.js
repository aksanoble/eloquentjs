function every(array, isNaN) {
  var p = true;
  for (var i = 0; i< array.length; i++) {
    if (!isNaN(array[i])) {
      return false;
    }

  }
  return p;
}


function some(array, isNaN) {
  var p = false;
  for (var i = 0; i< array.length; i++) {
    if (isNaN(array[i])) {
      return true;
    }

  }
  return p;
}
console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false