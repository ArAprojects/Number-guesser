
var updateButton = document.querySelector(".update-button");
var minInputDisplay = document.querySelector(".min-range");
var maxInputDisplay = document.querySelector(".max-range");
var minInput = document.querySelector(".min-range-input");
var maxInput = document.querySelector(".max-range-input");
var challengerNameDisplay1 = document.querySelector(".small-title-challenger-one-instance-one")
var challengerName1 = document.querySelector(".challenger-one-name")
var challengerNameDisplay2 = document.querySelector(".small-title-challenger-two-instance-two");
var challengerName2 = document.querySelector(".challenger-two-name")
var submitButton = document.querySelector(".submit-button");
var player1Guess = document.querySelector(".challenger-one-guess");
var player2Guess = document.querySelector(".challenger-two-guess");
var player1CurrentGuess = document.querySelector(".current-guess-one");
var player2CurrentGuess = document.querySelector(".current-guess-two");
var tooHighOrLow1 = document.querySelector(".high-or-low-1");
var tooHighOrLow2 = document.querySelector(".high-or-low-2");
var resetInputs = document.querySelector(".container-challenger");
var resetTheGame = document.querySelector(".reset-button");
var declaredWinner = document.querySelector(".winner");
var errorMessage = document.querySelector("#error")
var errorMessage1 = document.querySelector("#error-1")
var errorMessage2 = document.querySelector("#error-2")
var errorMessage3 = document.querySelector("#error-3")
var errorMessage4 = document.querySelector("#error-4")
var errorMessage5 = document.querySelector("#error-5")
var right = document.querySelector(".section-right");
var trackGuesses = document.querySelector(".number-of-guesses");
var clearTheGame = document.querySelector(".clear-button")
var numbGuess = 0




// ------------clear-right-side-cards-one-by-one-------------------

right.addEventListener('click', function(e) {
  if (e.target.className === 'clear-card') {
    e.target.closest('.card').remove();
  }
});


// ---------validation-&-errors----------------//
  minInput.addEventListener("keyup", inputError1);
  maxInput.addEventListener("keyup", inputError2);
  challengerName1.addEventListener("keyup", nameError1);
  challengerName2.addEventListener("keyup", nameError2);
  player1Guess.addEventListener("keyup", guessError1);
  player2Guess.addEventListener("keyup", guessError2);
  

  function inputError1() {
    if (minInput.value === "" || parseInt(maxInput.value) < parseInt(minInput.value)) {

      minInput.classList.add("red-box");
      errorMessage.classList.remove("hidden");
      updateButton.setAttribute("disabled", "disabled");
    }
    else {
      minInput.classList.remove("red-box");
      errorMessage.classList.add("hidden");
      updateButton.removeAttribute("disabled");
    }
  }

  function inputError2() {
    if (maxInput.value === "" || parseInt(maxInput.value) < parseInt(minInput.value)) {
      maxInput.classList.add("red-box");
      errorMessage1.classList.remove("hidden")
      updateButton.setAttribute("disabled", "disabled");
    }
    else {
      maxInput.classList.remove("red-box");
      errorMessage1.classList.add("hidden");
      updateButton.removeAttribute("disabled");

    }
  }

function nameError1() {
  if (challengerName1.value === ""){
    challengerName1.classList.add("red-box");
    errorMessage2.classList.remove("hidden")

  }
  else{
    challengerName1.classList.remove("red-box");
    errorMessage2.classList.add("hidden");

  }
}

function nameError2() {
  if (challengerName2.value === ""){
    challengerName2.classList.add("red-box");
    errorMessage3.classList.remove("hidden")
  }
  else{
    challengerName2.classList.remove("red-box");
    errorMessage3.classList.add("hidden");
  }
}

function guessError1() {
  if (player1Guess.value === ""){
    player1Guess.classList.add("red-box");
    errorMessage4.classList.remove("hidden")
  }
  else{
    player1Guess.classList.remove("red-box");
    errorMessage4.classList.add("hidden");
  }
}

function guessError2() {
  if (player2Guess.value === ""){
    player2Guess.classList.add("red-box");
    errorMessage5.classList.remove("hidden")
  }
  else{
    player2Guess.classList.remove("red-box");
    errorMessage5.classList.add("hidden");
  }
}

function disabler() {
  if (player1Guess.value === "" || player2Guess.value === "" || challengerName1.value === "" || challengerName2.value=== "") {
    submitButton.setAttribute("disabled", "disabled");
  }
  else{
    submitButton.removeAttribute("disabled")
  }
}

updateButton.addEventListener("click", updateRange); //Come back to
function updateRange(e) {
    e.preventDefault(e)
    minInputDisplay.textContent = minInput.value || 1;
    maxInputDisplay.textContent = maxInput.value || 100;
    newNumberGenerated = Math.floor(Math.random() * parseInt(maxInput.value) + parseInt(minInput.value)); 
     console.log(newNumberGenerated)
}

submitButton.addEventListener("click", updateChallengerNamesAndGuess); // This gets user names and guesses
function updateChallengerNamesAndGuess(e) {
    e.preventDefault(e);
    challengerName2.textContent = challengerName2.value;
    challengerNameDisplay2.textContent = challengerName2.textContent;
    challengerName1.textContent = challengerName1.value
    challengerNameDisplay1.textContent = challengerName1.textContent;
    player1CurrentGuess.textContent = player1Guess.value;
    player2CurrentGuess.textContent = player2Guess.value;
}


submitButton.addEventListener("click", tooHighOrLow) // This will tell player 1 if there guess is too high or low
function tooHighOrLow(e) {
    e.preventDefault(e);

    if (player1Guess.value < newNumberGenerated) {
        tooHighOrLow1.textContent = "That's too low"
    } else if (player1Guess.value > newNumberGenerated) {
        tooHighOrLow1.textContent = "That's too high"
    } else {
        tooHighOrLow1.textContent = "BOOM!"
    }
}
submitButton.addEventListener("click", tooHighOrLow3) // This will tell player 2 if their guess is too high or low
function tooHighOrLow3(e) {
    e.preventDefault(e);

    numbGuess++
    if (player2Guess.value < newNumberGenerated) {
        tooHighOrLow2.textContent = "That's too low"
    } else if (player2Guess.value > newNumberGenerated) {
        tooHighOrLow2.textContent = "That's too high"
    } else {
        tooHighOrLow2.textContent = "BOOM!"
    }
}



resetTheGame.addEventListener("click", resetGameInputs) //This will rest all input forms for the game

    function resetGameInputs() {
    document.querySelector(".challenger-one-name").value = "";
    document.querySelector(".challenger-two-name").value = "";
    document.querySelector(".challenger-one-guess").value = "";
    document.querySelector(".challenger-two-guess").value = "";
    document.querySelector(".min-range-input").value = "";
    document.querySelector(".max-range-input").value = "";
    document.querySelector(".small-title-challenger-one").textContent = "Challenger 1 Name";
    document.querySelector(".small-title-challenger-two").textContent = "Challenger 2 Name";
    document.querySelector(".current-guess-one").textContent = "#";
    document.querySelector(".current-guess-two").textContent = "#";
    document.querySelector(".high-or-low-1").textContent = "Pending Guess...";
    document.querySelector(".high-or-low-2").textContent = "Pending Guess...";
    }


clearTheGame.addEventListener("click", clearGameInputs) 

  function clearGameInputs() {
    resetGameInputs();
    newNumberGenerated = Math.floor(Math.random() * 100 + 1); 
    minInputDisplay.textContent = minInput.value
    maxInputDisplay.textContent = maxInput.value
    console.log(newNumberGenerated)
  }

function createCard2() {
  right.innerHTML = `
<article class="card card-one">
    <div class="challenger-names">
      <h5 class="small-title-challenger-one-instance-two">${challengerName1.value}</h5>
      <p class= "versus">VS</p>
      <h5 class="small-title-challenger-two small-title-challenger-two-instance-two">${challengerName2.value}</h5>
    </div>
    <div class="challenger-status">
      <h3 class="winner">${challengerName2.value}</h3>
      <h3 class = "card-winner">WINNER</h3>
    </div>
    <div class="guesses-timer-clear">
      <p><span class="number-of-guesses">${numbGuess}</span> GUESSES</p>
      <p><span class="time-to-guess-correct"></span>MINUTES</p>
      <button class="clear-card" type="button" name="button">X</button>
    </div>
</article>

  ` + right.innerHTML;
  	numbGuess = 0;
}

function createCard1() {
  right.innerHTML =`
<article class="card card-one">
    <div class="challenger-names">
      <h5 class="small-title-challenger-one-instance-two">${challengerName1.value}</h5>
      <p class= "versus">VS</p>
      <h5 class="small-title-challenger-two small-title-challenger-two-instance-two">${challengerName2.value}</h5>
    </div>
    <div class="challenger-status">
      <h3 class="winner">${challengerName1.value}</h3>
      <h3 class = "card-winner">WINNER</h3>
    </div>
    <div class="guesses-timer-clear">
      <p><span class="number-of-guesses">${numbGuess}</span>  GUESSES</p>
      <p><span class="time-to-guess-correct"></span>MINUTES</p>
      <button class="clear-card" type="button" name="button">X</button>
    </div>
</article>

  ` + right.innerHTML;
  	numbGuess = 0;

}

submitButton.addEventListener("click", determineWinner);
function determineWinner () {
  if (player2Guess.value == newNumberGenerated) {
    createCard2();
  } else if (player1Guess.value == newNumberGenerated) {
    createCard1();
  }

}
