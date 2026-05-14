// function printName(person: { first: string; last: string }): void {
//   console.log(person);
// }

// const user = { first: "tom", last: "hanks" };
// const halfUser = { first: "jimmy" };
// printName(user);
// printName(halfUser);

// type Point = {
//   x: number;
//   y: number;
//   z?: number;
// };

// function calcAddTwo(point: Point): Point {
//   return {
//     x: point.x + 2,
//     y: point.y + 2,
//   };
// }
// const p: Point = { x: 5, y: 9 };

// console.log(calcAddTwo(p));
// type Song = {
//   title: string;
//   duration: number;
//   year: number;
//   readonly artist: string;
// };
// const famous: Song = {
//   title: "famoussong",
//   duration: 3,
//   year: 2026,
//   artist: "prak",
// };

// famous.artist = "you";

type Circle = {
  radius: number;
};
type Color = {
  color: string;
};
type ColorfulCircle = Circle & Color;
type ColorfulCircleNum = Circle &
  Color & {
    no: number;
  };
const happyFace: ColorfulCircle = {
  radius: 5,
  color: "yellow",
};
const happyFaceno: ColorfulCircleNum = {
  radius: 5,
  color: "yellow",
  no: 2,
};
console.log(happyFace);
console.log(happyFaceno);
