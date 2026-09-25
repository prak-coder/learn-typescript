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
var gameBoard;
gameBoard = [["o", "o", "x"]];
// console.log(gameBoard);
gameBoard.push(["x", "o", "x"]);
console.log(gameBoard);
var product1 = { name: "coffee mug", price: 11.5 };
console.log(product1);
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var sum = 0;
    products.map(function (product) {
        sum += product.price;
    });
    return sum;
}
console.log(getTotal([
    { name: "gallery", price: 550 },
    { name: "monte", price: 250 },
]));
