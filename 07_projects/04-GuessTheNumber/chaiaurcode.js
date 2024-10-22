const form = document.querySelector("form");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const hint = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const p = document.createElement("p");
const randomNumber = Math.round(Math.random() * 100 + 1);
console.log(randomNumber);
let playGame = true;

let numGuesses = 10;
let prevGuesses = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userGuess = parseInt(document.getElementById("guessField").value);
  --totalGuesses;
  userGuesses.push(userGuess);
  console.log(totalGuesses);
  console.log(userGuess);
  console.log(userGuesses);
});
function validateGuess(guess) {
  //
}
function checkGuess(guess) {
  //
}
function displayGuess(guess) {
  //
}
function displayMessage(message) {
  //
}
function endGame(params) {
  //
}
function newGame(params) {
  //
}
