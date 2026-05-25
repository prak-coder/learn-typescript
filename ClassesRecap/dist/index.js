// class Player {
//     public  readonly first:string;
//     public readonly last:string; //explicitly tell devs abt prop
//     score:number=0;
//     //score=0
//     constructor(first:string,last:string){
//     this.first = first;
//     this.last = last;
//     }
//     private secretMethod(){
//         console.log('SECRET IS OUT');
//     }
// }
// class Player{
//     constructor(public first:string,public last:string,private score=0){}//short hand
// }
// const player1 = new Player('star','burns')
// console.log(player1);
// const player2 = new Player('pierce','hawthorn')
// console.log(player2);
//player2.first='old white man';
//player1.secretMethod()
// interface Colorful{
//     color:string;
// }
// interface Printable{
//     print():void
// }
// class Car implements Colorful{
//     constructor(public brand :string,public color:string){}
// }
// class laptop implements Colorful,Printable{
//     constructor(public brand:string,public color:string){}
//     print(): void {}
// }
// const car1 = new Car('Hundai','blue');
// console.log(car1);
//Abstract class
class Employee {
    first;
    last;
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log('say hi');
    }
}
class FullTimeEmployee extends Employee {
    first;
    last;
    salary;
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    first;
    last;
    ratePerHr;
    hrsWorked;
    constructor(first, last, ratePerHr, hrsWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.ratePerHr = ratePerHr;
        this.hrsWorked = hrsWorked;
    }
    getPay() {
        return this.ratePerHr * this.hrsWorked;
    }
}
const troy = new FullTimeEmployee('troy', 'barns', 6000);
const britta = new PartTimeEmployee('britta', 'perry', 10, 40);
console.log(troy.getPay());
console.log(britta.getPay());
export {};
