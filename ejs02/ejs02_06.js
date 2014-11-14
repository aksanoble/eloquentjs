var size = 20;
var string = "";
var space = " ";
var hash = "#";
var newLine = "\n";


for (var i=1; i<size+1; i++){
  for (var j=1; j<size+1; j++){
    if ( ((i+j) % 2) === 0) {
      string = string +hash;
    }
      else string = string + space;

  }
  string = string + newLine;

}
console.log(string);

var makeNoise = function() {
console.log("Pling!");
}
console.log(makeNoise());