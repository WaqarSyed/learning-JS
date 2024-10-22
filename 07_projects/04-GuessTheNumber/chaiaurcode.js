const submit = document.querySelector(".guessSubmit");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const hint = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const userInput = document.getElementById("guessField");
const p = document.createElement("p");
let randomNumber = Math.round(Math.random() * 100 + 1);
console.log(randomNumber);
let playGame = true;

let numGuesses = 10;
let prevGuesses = [];

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(parseInt(userInput.value));
    validateGuess(parseInt(userInput.value));
  });
}
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number between 1-100");
  } else {
    prevGuesses.push(guess);
    if (numGuesses === 0) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right `);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuesses--;
  remaining.innerHTML = `${numGuesses}`;
}
function displayMessage(message) {
  hint.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "true");
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame"> Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newBtn = document.querySelector("#newGame");
  newBtn.addEventListener("click", () => {
    // location.reload();
    randomNumber = Math.round(Math.random() * 100 + 1);
    prevGuesses = [];
    numGuesses = 10;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${numGuesses}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
