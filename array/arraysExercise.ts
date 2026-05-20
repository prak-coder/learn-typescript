// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard: string[][] = [];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product = {
  name: string;
  price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(produts: Product[]): number {
  const totalPrice = produts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  return totalPrice;
}
const breakFast: Product[] = [
  { name: "idly", price: 50 },
  { name: "dosa", price: 70 },
  { name: "cofee", price: 20 },
];
console.log(getTotal(breakFast));

//use simple to avoid acc number type error
function getTotalLoop(produts: Product[]): number {
  let total: number = 0;
  for (const product of produts) {
    total += product.price;
  }
  return total;
}
console.log(`loopTotal:${getTotalLoop(breakFast)}`);
