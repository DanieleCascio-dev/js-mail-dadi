const arrayMail = [
  "danielecascio@gmail.com",
  "marcoaurelio@gmail.com",
  "francescorossi@gmail.com",
  "lorisbarbiero@gmail.com",
  "lucagiardina@gmail.com",
  "olgademina@gmail.com",
];

const userMail = prompt("Inserisci la gmail che stai cercando ");
/* console.log(userMail); */

//Variabile booleana
let found = false;

//ciclo for
for (i = 0; i < arrayMail.length; i++) {
  if (userMail === arrayMail[i]) {
    found = true;
  }
}

console.log(found);

//Stampo il messaggio
if (found) {
  console.log("Abbiamo trovato la tua gmail!");
} else {
  console.warn("Nessuna corrsipondenza trovata!");
}
