// My code here.
function reverseArray(array) {
  var reversedArray = [];
  for (i = (array.length -1); i>=0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}
//after a lot of trials and a stackoverflow question
function reverseArrayInPlace(array) {
  var holder = reverseArray(array);
  for (i = array.length -1; i>=0; i--) {
    array[i] = holder[i];
  }
  return array;
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
