

var updateButton = document.querySelector(".update-button");
var minInputDisplay = document.querySelector(".min-range");
var maxInputDisplay = document.querySelector(".max-range");
var minInput = document.querySelector(".min-range-input");
var maxInput = document.querySelector(".max-range-input");
var challengerNameUno = document.querySelector(".small-title-challenger-one-instance-one")
var challengerName1 = document.querySelector(".challenger-one-name")
var challengerNameDos = document.querySelector(".small-title-challenger-two-instance-one");
var challengerName2 = document.querySelector(".challenger-two-name")
var submitButton = document.querySelector(".submit-button");
var player1Guess = document.querySelector(".challenger-one-guess");
var player2Guess = document.querySelector(".challenger-two-guess");
var player1CurrentGuess = document.querySelector(".current-guess-one");
var player2CurrentGuess = document.querySelector(".current-guess-two");
var tooHighOrLow1 = document.querySelector(".high-or-low-1");
var tooHighOrLow2 = document.querySelector(".high-or-low-2");
var resetInputs = document.querySelector(".container-challenger");
var resetGame4Real = document.querySelector(".reset-button");
var declaredWinner = document.querySelector(".winner");
var errorMessage = document.querySelector("#error")
var right = document.querySelector(".section-right");

right.addEventListener('click', function(e) {
  if (e.target.className === 'clear-card') {
    e.target.closest('.card').remove();
  }
  // if(e.target.className)
});

minInput.addEventListener("keyup", validateRange);
maxInput.addEventListener("keyup", validateRange);
  function validateRange(e) {
    if (minInput.value === "" || maxInput.value === "" || minInput.value > maxInput.value) {
      updateButton.setAttribute("disabled", "disabled");
    } else {
      updateButton.removeAttribute("disabled");
    }
  }

  minInput.addEventListener("mouseout", error);
  function error(e) {
    if (minInput.value === "") {
      minInput.classList.add("red-box");
      errorMessage.classList.remove("hidden");
    }
    else {
      minInput.classList.remove("red-box")
      errorMessage.classList.add("hidden");
    }
  }




updateButton.addEventListener("click", updateRange); //Come back to
function updateRange(e) {
    e.preventDefault(e)
    minInputDisplay.textContent = minInput.value;
    maxInputDisplay.textContent = maxInput.value;
    newNumberGenerated = Math.floor(Math.random() * (+maxInput.value - +minInput.value)) + +minInput.value;
    console.log(newNumberGenerated)
}

submitButton.addEventListener("click", updateChallengerNamesAndGuess); // This gets user names and guesses
function updateChallengerNamesAndGuess(e) {
    e.preventDefault(e);
    challengerName2.textContent = challengerName2.value;
    challengerNameDos.textContent = challengerName2.textContent;
    challengerName1.textContent = challengerName1.value
    challengerNameUno.textContent = challengerName1.textContent;
    player1CurrentGuess.textContent = player1Guess.value;
    player2CurrentGuess.textContent = player2Guess.value;
}


/*button.addEventListener("click", createRandomNumber); // This creates a random number after the submit button is clicked
function createRandomNumber(e) {
    e.preventDefault(e);
} */
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
    if (player2Guess.value < newNumberGenerated) {
        tooHighOrLow2.textContent = "That's too low"
    } else if (player2Guess.value > newNumberGenerated) {
        tooHighOrLow2.textContent = "That's too high"
    } else {
        tooHighOrLow2.textContent = "BOOM!"
    }
}
resetGame4Real.addEventListener("click", resetCurrentGame);
function resetCurrentGame(e) {
    document.getElementsByClassName("container-challenger").innerHTML = "";
    }
updateButton.addEventListener("click", updateRange); //Come back to
function updateRange(e) {
    e.preventDefault(e)
    minInputDisplay.textContent = minInput.value;
    maxInputDisplay.textContent = maxInput.value;
    newNumberGenerated = Math.floor(Math.random() * (+maxInput.value - +minInput.value)) + +minInput.value;
    console.log(newNumberGenerated)
}
resetGame4Real.addEventListener("click", resetGameInputs) //This will rest all input forms for the game

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
    document.querySelector("")
    }
    submitButton.addEventListener("click", gameStarts)
    function gameStarts (e) {
        e.preventDefault(e)
        document.querySelector(".small-title-challenger-one-instance-two").textContent = challengerName1.textContent;
        document.querySelector(".small-title-challenger-two-instance-two").textContent = challengerName2.textContent;
        if (newNumberGenerated === player1Guess) {
            declaredWinner.textContent === challengerName1.textContent;
        }else {
            declaredWinner.textContent === "Puppies"
        }
        }
