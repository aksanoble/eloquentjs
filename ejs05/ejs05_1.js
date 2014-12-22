//First solution without using .reduce method
var arrays = [[1, 2, 3], [4, 5], [6]];
var flatArray = [];
for (var i=0; i< arrays.length; i++) {
flatArray = flatArray.concat(arrays[i]);
};
console.log(flatArray);

//After looking at the solution
var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(function (start,current) {
  return start.concat(current);}));
