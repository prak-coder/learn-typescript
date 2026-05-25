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
abstract class Employee{
    constructor(public first:string,public last:string){}
   abstract getPay():number
   greet(){
    console.log('say hi');
   }
}
class FullTimeEmployee extends Employee{
    constructor(public first:string,public last:string,private salary:number){
        super(first,last)
    }
     getPay(){
        return this.salary;
    }
}

class PartTimeEmployee extends Employee{
    constructor(public first:string,public last:string,private ratePerHr:number,private hrsWorked:number){
        super(first,last)
    }
    getPay(): number {
        return this.ratePerHr * this.hrsWorked
    }
}

const troy = new FullTimeEmployee('troy','barns',6000)
const britta = new PartTimeEmployee('britta','perry',10,40)
console.log(troy.getPay());
console.log(britta.getPay());
