//Function for creating average
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

//Finding a person by their name
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

//Filtering persons whose mother are in the dataset
var withMom = ancestry.filter(function (person) {
  if (person.mother in byName) return person;})
//Map birthday for child
var childBirthday = withMom.map(function (person){
  return person.born;});
//List all Moms
var moms = withMom.map(function (person) {
  return person.mother;});
// List all data pertaining to mothers
var momData = moms.map(function (person,i) {
   var mom = moms[i];
  if (mom in byName) return byName[mom]});
// Find birthday for all mothers
var momBirthday = momData.map(function(mommy) {
  return mommy.born;});

// Calculate age difference
ageDiff = [];
for (var i=0; i<moms.length; i++) {
  ageDiff[i] = childBirthday[i] - momBirthday[i];
};

//Calculate average
console.log(average(ageDiff));