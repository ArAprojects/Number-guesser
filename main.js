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


updateButton.addEventListener("click", updateRange);

function updateRange(e) {
	e.preventDefault();
	minInputDisplay.textContent = minInput.value;
	maxInputDisplay.textContent = maxInput.value;
};

button.addEventListener("click", updateChallengerNamesAndGuess);

function updateChallengerNamesAndGuess(e) {
	e.preventDefault(e);
	challengerName2.textContent = challengerName2.value;
	challengerNameDos.textContent = challengerName2.textContent;
	challengerName1.textContent = challengerName1.value
	challengerNameUno.textContent = challengerName1.textContent;
	player1CurrentGuess.textContent = player1Guess.value;
	player2CurrentGuess.textContent = player2Guess.value;
}

button.addEventListener("click", createRandomNumber);

function createRandomNumber(e) {
	e.preventDefault(e);
	newNumberGenerated = Math.floor(Math.random() * (+maxInput.value - +minInput.value)) + +minInput.value;
}













