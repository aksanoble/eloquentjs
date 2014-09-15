//Using string length as mentioned in the hint

var string = "#";
var hash = "#";
while(string.length <=7) {
    console.log(string);
    string =string+ hash;
}

//Using For Loop
var string = "#";
var hash = "#";
for (var i = 1; i<=7; i++) {
    console.log(string);
    string = string + hash;
}

//Fizz and Buzz seperate
for (var i = 1; i<=100; i++) {
    if (i%3 == 0 && i%5 != 0)
        console.log("Fizz");
    else if (i%3 != 0 && i%5 ==0)
        console.log("Buzz");
    else console.log(i);
}

//Now FizzBuzz for divisible by both 3 and 5
for (var i = 1; i<=100; i++) {
    if (i%3 == 0 && i%5 != 0)
        console.log("Fizz");
    else if (i%3 != 0 && i%5 ==0)
        console.log("Buzz");
    else if (i%3 == 0 && i%5 ==0)
        console.log("FizzBuzz");
    else console.log(i);
}

//Without using the & Operator
for (var i = 1; i<=100; i++) {
    if (i%3 == 0){
        if(i%5 == 0)
            console.log("FizzBuzz");
        else console.log("Fizz");
    }
    else if (i%5 == 0) {
        if(i%3 !=0)
            console.log("Buzz");}
    else console.log(i);
}