const num = []; //default any array
const nums = [1, "one"]; // number|string
const colors: string[] = [];
const balances: number[] = [];
const multiArray: string[][] = [[]];
multiArray.push(["color"]);
console.log(multiArray);
multiArray[0][0] = "blue";
console.log(multiArray);
multiArray[0].push("red");
console.log(multiArray);
