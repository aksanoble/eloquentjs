function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

century = [];
for (var i=16; i< 22; i++) {
century.push(ancestry.filter(function (person) {
  return Math.ceil(person.died / 100) == i;
}).map(function (person){return person.died - person.born;})

);}

for (var i= 0; i<6; i++) {
  console.log(i+16,":",(average(century[i])));};

