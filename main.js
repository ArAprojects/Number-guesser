var updateButton = document.querySelector(".update-button");
var minInputDisplay = document.querySelector(".min-range");
var maxInputDisplay = document.querySelector(".max-range");
var minInput = document.querySelector(".min-range-input");
var maxInput = document.querySelector(".max-range-input");
var challengerNameUno = document.querySelector(".small-title-challenger-one-instance-one")
var challengerName1 = document.querySelector(".challenger-one-name")
var challengerNameDos = document.querySelector(".small-title-challenger-two-instance-one");
var challengerName2 = document.querySelector(".challenger-two-name")
var button = document.querySelector(".submit-button");
var player1Guess = document.querySelector(".challenger-one-guess");
var player2Guess = document.querySelector(".challenger-two-guess");
var player1CurrentGuess = document.querySelector(".current-guess-one");
var player2CurrentGuess = document.querySelector(".current-guess-two");
var tooHighOrLow1 = document.querySelector(".high-or-low-1");
var tooHighOrLow2 = document.querySelector(".high-or-low-2");
var resetGame = document.querySelector(".container-challenger");
var resetGame4Real = document.querySelector(".reset-button")






button.addEventListener("click", updateChallengerNamesAndGuess); // This gets user names and guesses

function updateChallengerNamesAndGuess(e) {
	e.preventDefault(e);
	challengerName2.textContent = challengerName2.value;
	challengerNameDos.textContent = challengerName2.textContent;
	challengerName1.textContent = challengerName1.value
	challengerNameUno.textContent = challengerName1.textContent;
	player1CurrentGuess.textContent = player1Guess.value;
	player2CurrentGuess.textContent = player2Guess.value;
}

button.addEventListener("click", createRandomNumber); // This creates a random number after the submit button is clicked

function createRandomNumber(e) {
	e.preventDefault(e);
}


button.addEventListener("click", tooHighOrLow) // This will tell player 1 if there guess is too high or low

function tooHighOrLow(e) {
	e.preventDefault(e);
	if (player1Guess.value < newNumberGenerated) {
		tooHighOrLow1.textContent = "That's too low"
	} else if (player1Guess.value > newNumberGenerated) {
		tooHighOrLow1.textContent = "That's too high"
	} else {
		tooHighOrLow1.textContent = "You got it!"
	}
}

button.addEventListener("click", tooHighOrLow3) // This will tell player 2 if their guess is too high or low

function tooHighOrLow3(e) {
	e.preventDefault(e);
	if (player2Guess.value < newNumberGenerated) {
		tooHighOrLow2.textContent = "That's too low"
	} else if (player2Guess.value > newNumberGenerated) {
		tooHighOrLow2.textContent = "That's too high"
	} else {
		tooHighOrLow2.textContent = "You got it!"
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





















