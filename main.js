var button = document.querySelector(".submit-button");
var challengerNameUno = document.querySelectorAll(".small-title-challenger-one");
var challengerName1 = document.querySelector(".challenger-one-name")
var challengerNameDos = document.querySelectorAll(".small-title-challenger-two");
var challengerName2 = document.querySelector(".challenger-two-name")


/* This is for entering the names of the players*/

button.addEventListener("click", function () {
	for(i = 0; i < challengerNameUno.length;i++) {
	challengerName1.textContent = challengerName1.value
	challengerNameUno[i].textContent = challengerName1.textContent;
}
	})
button.addEventListener("click", function () {
	for(i = 0; i < challengerNameDos.length;i++) {
	challengerName2.textContent = challengerName2.value
	challengerNameDos[i].textContent = challengerName2.textContent;
}
	})







