//Recursion
function isEven(number) {
  if (number == 1)
    return false;
  else if (number == 2)
    return true;
  else if (number < 0)
    return isEven (number +2);
  else return isEven (number -2);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-5));

//Counting Beans
var B = 0;
function countBs(s) {
  stringLength = s.length;
  for (i = 0; i < stringLength; i++) {
	 if (s.charAt(i) == "B")
       B = B+1;
   }
  return B ;
}
console.log(countBs("bbbC"));

//Counting any letter
function countChar(s,y) {
  var count = 0;
  stringLength = s.length;
  for (i = 0; i < stringLength; i++) {
	 if (s.charAt(i) == y)
       count = count+1;
   }
  return count ;
}
console.log(countChar("bbbC", "b"));
console.log(countChar("kakkerlak", "k"));
