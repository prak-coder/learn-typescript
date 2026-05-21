const age: number | string = 25;
let a = 5,
  b = 6,
  c = 9;
function orOperator(value: number): void {
  if (value === a || value === b) {
    console.log("a or b");
  } else {
    console.log("c");
  }
}
type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};

let p: Point = {
  x: 7,
  y: 8,
};

function printAge(age: number | string): void {
  console.log(`you are ${age} years old`);
}
printAge(25);
printAge("16");

//Type Narrowing

function calcTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
    return price * tax;
  } else {
    return (price = tax * price);
  }
}
console.log(calcTax("$50", 10));
console.log(calcTax(20, 10));

//array union types
//an array hold only number or string

const stuff: (number | string)[] = [1, 2, 3, "four", 5];

//const stuff:number[]| string[] means stuff is array with only number or only strings

const pointCord: (Point | Loc)[] = [];
pointCord.push({ lat: 23.14, long: 65.45 });
pointCord.push({ x: 5, y: 9 });
console.log(pointCord);
