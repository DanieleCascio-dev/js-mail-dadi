//Random number

//Computer
const computerNum = Math.floor(Math.random() * 7);
console.log(computerNum);

//Player
const playerNum = Math.floor(Math.random() * 7);
console.log(playerNum);

//Condition
if (playerNum > computerNum) {
  console.log("Il giocatore ha vinto!");
} else if (playerNum < computerNum) {
  console.log("Il Computer ha vinto!");
} else if (playerNum === computerNum) {
  console.log("Pareggio!");
  alert("Pronto a ritirare i dadi!?");
  location.reload();
}
