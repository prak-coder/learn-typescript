// function printName(person: { first: string; last: string }): void {
//   console.log(person);
// }
function calcAddTwo(point) {
    return {
        x: point.x + 2,
        y: point.y + 2,
    };
}
var p = { x: 5, y: 9 };
console.log(calcAddTwo(p));
