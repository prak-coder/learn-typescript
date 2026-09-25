const num = []; //default any array
const nums = [1, "one"]; // number|string
// nums[2]=true
type Point = {
  x: number;
  y: number;
};
const coord: Point[] = [{ x: 25, y: 89 }];
// coord.push({y:36,x:''})
const colors: string[] = [];
const balances: number[] = [];
const multiArray: string[][] = [[]];
multiArray.push(["color"]);
console.log(multiArray);
multiArray[0][0] = "blue";
console.log(multiArray);
multiArray[0].push("red");
console.log(multiArray);
