'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const againBtn = document.querySelector('.again');
const messageEl = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const guessInputEl = document.querySelector('.guess');
const body = document.querySelector('body');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const displayMessage = function (message) {
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
    }
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        numberEl.textContent = secretNumber.toString();
        body.style.backgroundColor = '#60b347';
        numberEl.style.width = '30rem';
        if (score > highscore) {
            highscore = score;
            highscoreEl.textContent = highscore.toString();
        }
        // When guess is wrong
    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            scoreEl.textContent = score.toString();
        }
        else {
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
export {};
//# sourceMappingURL=index.js.map