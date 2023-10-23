const computerElem = document.querySelector(".computer");
const playerElem = document.querySelector(".player");
const winner = document.querySelector(".winner");
const tryAgain = document.getElementById("try");
console.log(tryAgain);

//Random number

//Computer
const computerNum = Math.floor(Math.random() * 7);
console.log(computerNum);
computerElem.innerHTML = `<h2>Computer</h2><div class="dice lightcoral">${computerNum}</div>`;
//Player
const playerNum = Math.floor(Math.random() * 7);
console.log(playerNum);
playerElem.innerHTML = `<h2>Player</h2><div class="dice lightblue">${playerNum}</div>`;

let winnerMess = "";
//Condition
if (playerNum > computerNum) {
  winnerMess = "Player win!";
} else if (playerNum < computerNum) {
  winnerMess = "Computer win!";
} else {
  winnerMess = "Draw!";
  /*  alert("Pronto a ritirare i dadi!?");
  location.reload(); */
}
console.log(winnerMess);
winner.innerHTML = `<h2>${winnerMess}</h2>`;

tryAgain.addEventListener("click", function () {
  location.reload();
});
