class Player {
    first;
    last;
    score = 0;
    //score=0
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
const player1 = new Player('star', 'burns');
console.log(player1);
export {};
