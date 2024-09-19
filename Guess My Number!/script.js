'use strict';

let randomNumber = Math.floor(Math.random() * 100) + 1;

let score = 20;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  // when guess is TOO HIGH

  if (guess > randomNumber) {
    // if (guess !== randomNumber) {
    //   let masag = '';
    //   if (guess > randomNumber) {
    //     masag = '❗ Too Big!';
    //   }
    //   if (guess < randomNumber) {
    //     masag = '❗ Too Small!';
    //   }
    // document.querySelector('.message').textContent = masag;
    document.querySelector('.message').textContent = '❗ Too Big!';
    document.querySelector('.body').style.backgroundColor = '#f2694e';
    document.querySelector('.message').style.backgroundColor = '#f57e00';
    document.querySelector('.number').textContent = '?';
    score--;
    document.querySelector('.score').textContent = score;
  }

  // When guess is TOO LOW

  if (guess < randomNumber) {
    document.querySelector('.message').textContent = '❗ Too Small!';
    document.querySelector('.body').style.backgroundColor = '#f24e4e';
    document.querySelector('.message').style.backgroundColor = '#f57e00';
    document.querySelector('.number').textContent = '?';
    score--;
    document.querySelector('.score').textContent = score;
  }

  // When the user guess is RIGHT

  if (guess == randomNumber) {
    document.querySelector('.message').textContent = '✅ You Won!';
    document.querySelector('.body').style.backgroundColor = '#4BB543';
    document.querySelector('.message').style.backgroundColor = '';
    document.querySelector('.number').textContent = randomNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // WHEN THE USER ENTER A *-* Input

  if (guess <= 0) {
    document.querySelector('.message').textContent = '❌ WRONG INPUT';
    document.querySelector('.number').textContent = '?';
  }

  // WHEN USER SCORE FINISHS

  if (score < 0) {
    document.querySelector('.message').textContent = 'You Failed';
    document.querySelector('.body').style.backgroundColor = '#f2694e';
    document.querySelector('.message').style.backgroundColor = '#f57e00';
    document.querySelector('.number').textContent = '?';
  }

  if (score == 0) {
    document.querySelector('.message').textContent = 'You Failed';
    document.querySelector('.body').style.backgroundColor = '#f2694e';
    document.querySelector('.message').style.backgroundColor = '#f57e00';
    document.querySelector('.number').textContent = '?';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 100) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.message').style.backgroundColor = '#222222';
  document.querySelector('.body').style.backgroundColor = '#222222';
  document.querySelector('.score').textContent = score;
});
