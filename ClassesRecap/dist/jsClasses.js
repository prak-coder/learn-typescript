class Player {
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  get FullName() {
    return `${this.first} ${this.last}`;
  }
  set FullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  taunt() {
    console.log("Booo...");
  }
  getScore() {
    return this.#score;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
}
class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
}
const player1 = new Player("troy", "barnes");
const player2 = new Player("piercee", "hawthon");
console.log(player1);
console.log(player2);
// player1.taunt();
// // player1.#score = 20;
// console.log(player1.getScore());
// player1.updateScore(100);
// console.log(player1.getScore());

// console.log(player1.FullName);
// player1.FullName = "Britta Perry";
// console.log(player1.FullName);

const admin = new AdminPlayer("jeffery", "winger", [
  "persuade people",
  "lift heavy things",
]);

console.log(admin);
