"use strict";

let game1 = document.querySelector(".game-1-img");
let game2 = document.querySelector(".game-2-img");
let game3 = document.querySelector(".game-3-img");
let game4 = document.querySelector(".game-4-img");

game1.addEventListener("click", function () {
  window.location = "./Guess My Number!/index.html";
});

game2.addEventListener("click", function () {
  window.location = "./Pig Game/index.html";
});

game3.addEventListener("click", function () {
  window.location = "./Simon Game/index.html";
});

game4.addEventListener("click", function () {
  window.location = "./Drum-Kit/index.html";
});
