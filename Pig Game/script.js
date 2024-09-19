'use strict';

// variables area

let dice = document.querySelector('.dice');

let player1Score = document.getElementById('score--0');
let player2Score = document.getElementById('score--1');
let current1Score = document.getElementById('current--0');
let current2Score = document.getElementById('current--1');

let player1 = document.querySelector('.player--0');
let player2 = document.querySelector('.player--1');

let player1Name = document.getElementById('name--0');
let player2Name = document.getElementById('name--1');
let input1 = document.querySelector('.input-1');
let input2 = document.querySelector('.input-2');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

let randomNumber = 0;
let score = [0, 0];

// Displaying the start of the game

dice.style.cssText = 'display: none;';

// Functions area

// function to generate random number between 1 and 6

let randomNumberGen = function () {
  randomNumber = Math.floor(Math.random() * 6 + 1);
};

// function to turn off Roll & Hold buttons

let allButtonsOff = function () {
  btnRoll.disabled = true;
  btnHold.disabled = true;
};

// function to turn on Roll & Hold buttons

let allButtonsOn = function () {
  btnRoll.disabled = false;
  btnHold.disabled = false;
};

// function to reset all the game to start

let restartAll = function () {
  dice.style.cssText = 'display: none;';
  player1.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--winner', 'player--active');
  current1Score.textContent = '0';
  current2Score.textContent = '0';
  player1Score.textContent = '0';
  player2Score.textContent = '0';
};

// function to show who is the winner

let winnerIs = function (value) {
  value.classList.toggle('player--winner');
  dice.style.cssText = 'display: none';
};

// function to toggle between player1 and player2

let togglePlayers = function () {
  player2.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// the events of the whole game

// event for Roll Button

btnRoll.addEventListener('click', function () {
  randomNumberGen();
  dice.style.cssText = 'display: block;';
  dice.src = `dice-${randomNumber}.png`;
  player1Name.textContent = input1.value;
  player2Name.textContent = input2.value;
  if (player1.classList.contains('player--active')) {
    if (randomNumber !== 1) {
      current1Score.textContent =
        Number(current1Score.textContent) + randomNumber;
    } else {
      togglePlayers();
      current1Score.textContent = 0;
    }
  } else {
    if (randomNumber !== 1) {
      current2Score.textContent =
        Number(current2Score.textContent) + randomNumber;
    } else {
      togglePlayers();
      current2Score.textContent = 0;
    }
  }
});

// event for Hold Button

btnHold.addEventListener('click', function () {
  if (player1.classList.contains('player--active')) {
    togglePlayers();
    player1Score.textContent =
      Number(current1Score.textContent) + Number(player1Score.textContent);
    current1Score.textContent = 0;
  } else {
    togglePlayers();
    player2Score.textContent =
      Number(current2Score.textContent) + Number(player2Score.textContent);
    current2Score.textContent = 0;
  }
  if (Number(player1Score.textContent) >= 100) {
    winnerIs(player1);
    allButtonsOff();
  }
  if (Number(player2Score.textContent) >= 100) {
    winnerIs(player2);
    allButtonsOff();
  }
});

// event for NewGame Button

btnNew.addEventListener('click', function () {
  restartAll();
  allButtonsOn();
});
