import { sample, mutiply } from "./utils.js";
import User from "./User.js";
import type { Person, color, Point } from "./types.js";
console.log(mutiply(154, 246));
console.log(sample(["troy", "jeff", "abed"]));
const troy = new User("troy", "troy@greendale.com");
console.log(troy);
const britta: Person = {
  name: "britta",
  age: 26,
};
console.log(britta);
const sky: color = "blue";
console.log(sky);
const p: Point = {
  x: 25,
  y: 87,
};
console.log(p);
