var colWidth = [14, 6, 15];
function drawTable(array) {
  for (var i = 0; i < array.length; i++) {
    var string = "";
    for (var j = 0; j < array[i].length; j++) {
        string = string + array[i][j];
        for (var k = 0; k < colWidth[j] - array[i][j].length; k++) {
            string = string + " ";
        }
    }
    console.log(string);
  }
}

var MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];

function objToArr(array) {
    mainArray = []
    array.forEach(function(value) {
        var newArr = [];
        newArr.push(value.name);
        newArr.push((String(value.height)));
        newArr.push(value.country)
        mainArray.push(newArr);
    });
    return (mainArray);
}

var testArray = objToArr(MOUNTAINS);

drawTable(testArray);