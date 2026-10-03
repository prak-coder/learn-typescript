'use strict';

let secretNumber: number = Math.trunc(Math.random() * 20) + 1;
let score: number = 20;
let highscore: number = 0;

const againBtn = document.querySelector('.again')! as HTMLButtonElement;
const messageEl = document.querySelector('.message')! as HTMLParagraphElement;
const checkBtn = document.querySelector('.check')! as HTMLButtonElement;
const guessInputEl = document.querySelector('.guess')! as HTMLInputElement;
const body = document.querySelector('body')! as HTMLBodyElement;
const numberEl = document.querySelector('.number')! as HTMLElement;
const scoreEl = document.querySelector('.score')! as HTMLElement;

const highscoreEl = document.querySelector('.highscore')! as HTMLElement;

const displayMessage = function (message: string): void {
  messageEl.textContent = message;
};

checkBtn.addEventListener('click', function () {
  const guess = Number(guessInputEl.value);
  console.log(guess, typeof guess);

  // When there is no input
  if (guessInputEl.value === '') {
    displayMessage('⛔️ No number!');
    return;

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    numberEl.textContent = secretNumber.toString();

    body.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore.toString();
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      scoreEl.textContent = score.toString();
    } else {
      displayMessage('💥 You lost the game!');
      scoreEl.textContent = '0';
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreEl.textContent = score.toString();
  numberEl.textContent = '?';
  guessInputEl.value = '';

  body.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
