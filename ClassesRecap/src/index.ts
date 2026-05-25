class Player {
    first:string;
    last:string;
    score:number=0;
    //score=0
    constructor(first:string,last:string){
    this.first = first;
    this.last = last;
    }
}

const player1 = new Player('star','burns')
console.log(player1);