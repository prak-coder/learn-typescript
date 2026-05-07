function square(num: number) {
  return num * num;
}
console.log(square(15));
console.log(square("potato"));
function greet(person: string) {
  return `hello ${person} may i take your order please`;
}
console.log(greet("sanders"));
console.log(greet(true));

const simpleInterest = (p: number, n: number, r: number) => {
  return (p * n * r) / 100;
};
console.log(simpleInterest(1000, 6, 2));
console.log(simpleInterest(1000, 6));
console.log(simpleInterest(1000, 6, 2, 545));
const scold = function (person: string = "britta") {
  return `${person} you are the worst`;
};
console.log(scold());
console.log(scold("pierce"));
