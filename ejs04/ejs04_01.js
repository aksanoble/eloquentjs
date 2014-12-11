// Your code here.
function range (start, end) {
  var difference = 1 ;
  if (arguments.length == 3) difference = arguments[2];
  var myArray = [];
  var arrayLength = (Math.abs (end - start))/ Math.abs (difference );
      myArray[0] = start;
    for (var i = 1; i <= arrayLength; i++) {
    myArray[i] = myArray[i-1] + difference;
  }
return myArray;
}
function sum (array) {
  sumArray = 0;
  for (i=0; i<array.length; i++) {
    sumArray = sumArray + array[i];
  }
  return sumArray;
}

console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
