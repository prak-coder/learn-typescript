function square(num) {
    return num * num;
}
console.log(square(15));
console.log(square("potato"));
function greet(person) {
    return "hello ".concat(person, " may i take your order please");
}
console.log(greet("sanders"));
console.log(greet(true));
var simpleInterest = function (p, n, r) {
    return (p * n * r) / 100;
};
console.log(simpleInterest(1000, 6, 2));
console.log(simpleInterest(1000, 6));
console.log(simpleInterest(1000, 6, 2, 545));
