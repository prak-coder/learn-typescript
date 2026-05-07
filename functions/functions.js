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
var scold = function (person) {
    if (person === void 0) { person = "britta"; }
    return "".concat(person, " you are the worst");
};
console.log(scold());
console.log(scold("pierce"));
function add(x, y) {
    return x + y;
}
console.log(5, 3);
function rando(x) {
    if (Math.random() > 0.5) {
        return x.toString();
    }
    return x;
}
