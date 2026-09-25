// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
var highScore;
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff;
stuff = [1, 2, 3];
stuff = ["red", "blue"];
var cookingSkillofBritta = "Beginner";
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors;
colors = [
    { r: 10, g: 5, b: 8 },
    { h: 8, s: 5, l: 5 },
];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(mystring) {
    if (typeof mystring === "string") {
        console.log("Hello, <".concat(mystring, ">"));
    }
    else {
        for (var _i = 0, mystring_1 = mystring; _i < mystring_1.length; _i++) {
            var person = mystring_1[_i];
            console.log("Hello, <".concat(person, ">"));
        }
    }
}
greet("troy");
greet(["jeff", "annie"]);
