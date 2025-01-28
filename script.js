"use strict";

const generateSecret = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = generateSecret();
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("❌ Not a Number");
  } else {
    if (guess == secretNumber) {
      displayMessage("🎉 Correct Answer");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = secretNumber;

      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

      document.querySelector(".check").disabled = true;
      document.querySelector(".check").style.backgroundColor = "#ccc";
    } else {
      if (score <= 1) {
        displayMessage("💔 You lost the game");
        document.querySelector(".score").textContent = 0;
      } else {
        guess > secretNumber
          ? displayMessage("📈 Too high!!")
          : displayMessage("📉 Too low!!");
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = generateSecret();

  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  document.querySelector(".check").disabled = false;
  document.querySelector(".check").style.backgroundColor = "#eee";
});
