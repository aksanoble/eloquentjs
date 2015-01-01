function Vector(x,y) {
 this.x = x;
 this.y = y;
}

Vector.prototype.plus = function (vector) {
  var sumX = this.x + vector.x;
  var sumY = this.y + vector.y;
  return new Vector(sumX, sumY);
}

Vector.prototype.minus = function (vector) {
  var diffX = this.x - vector.x;
  var diffY = this.y - vector.y;
  return new Vector(diffX, diffY);
}

Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    },
  enumerable: true
    });

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5