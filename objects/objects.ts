// function printName(person: { first: string; last: string }): void {
//   console.log(person);
// }

// const user = { first: "tom", last: "hanks" };
// const halfUser = { first: "jimmy" };
// printName(user);
// printName(halfUser);

type Point = {
  x: number;
  y: number;
  z?: number;
};

function calcAddTwo(point: Point): Point {
  return {
    x: point.x + 2,
    y: point.y + 2,
  };
}
const p: Point = { x: 5, y: 9 };

console.log(calcAddTwo(p));
