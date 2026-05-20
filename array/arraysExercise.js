// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(produts) {
    var totalPrice = produts.reduce(function (acc, product) {
        return acc + product.price;
    }, 0);
    return totalPrice;
}
var breakFast = [
    { name: "idly", price: 50 },
    { name: "dosa", price: 70 },
    { name: "cofee", price: 20 },
];
console.log(getTotal(breakFast));
function getTotalLoop(produts) {
    var total = 0;
    for (var _i = 0, produts_1 = produts; _i < produts_1.length; _i++) {
        var product = produts_1[_i];
        total += product.price;
    }
    return total;
}
console.log("loopTotal:".concat(getTotalLoop(breakFast)));
