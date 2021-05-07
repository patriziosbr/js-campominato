// // Il computer deve generare 16 numeri casuali tra 1 e 100.
// // I numeri non possono essere duplicati.
// // In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// // L'utente non può inserire più volte lo stesso numero.
// // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
// // La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
// // Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
// // BONUS: (da fare solo se funziona tutto il resto)
// // all'inizio il software richiede anche una difficoltà all'utente che cambia il range di numeri casuali:
// // con difficoltà 0 => tra 1 e 100
// // con difficoltà 1 => tra 1 e 80
// // con difficoltà 2 => tra 1 e 5


/*
  nota -> Esercizio dato da Andrea C.
  esercizio: 
  ---> mostra (attraverso un while) un prompt all'utente chiedendo un numero.
    - aggiungi il numero ad un array 
    - fai fare al ciclo while 4 giri

    (bonus) 
    -> permetti di inserire solo numeri unici
    -> dopo il while stampa l'array di numeri ed affianco la sua lunghezza
*/

var numeriUtente = [];

while (numeriUtente.length < 4) {
    var inserisciNum = parseInt(prompt('inserisci un numero da 1 a 100'));
    if (!numeriUtente.includes(inserisciNum)){
        numeriUtente.push(inserisciNum);
    } else if (isNaN) {
        parseInt(prompt('ERRORE inserisci un numero da 1 a 100'));
    }
}
console.log(numeriUtente, "l'unghezza array: " + numeriUtente.length);

// ------------redo on 06/05-----------


/*  */

// var difficulty = parseInt(prompt('inserisci la difficoltà:\n 1 - normal \n 2 - hard \n 0 - easy'))

// switch (difficulty) {
//     case 2:
//         var hard = 20;
//         break;
//     case 1:
//         var normal = 80;
//         break;
//     default:
//         var easy = 100;
//         break;
// }


/* */


var arrBomb = [];
var tentativi = [];
var maxAttempt = 4;

while (arrBomb.length < 16) {
    randomInt = getRndInteger(1,100);
    if (!arrBomb.includes(randomInt)) {
        arrBomb.push(randomInt);
    }
}
console.log(arrBomb);

var gameOver = false;
while (gameOver == false) {
    var insertNum = parseInt(prompt('inserisci un numero da 1 a 100'));
    if (insertNum >= 1 && insertNum <= 100 && !tentativi.includes(insertNum) ) {
        tentativi.push(insertNum);
    }
    if (arrBomb.includes(insertNum)) {
        gameOver = true;
    }
    if (tentativi.length == maxAttempt ) {
        gameOver = true;
        alert('Hai vinto');
    }
}
console.log(tentativi);
console.log(maxAttempt);
console.log(arrBomb.length);


// ----------FUNCTIONS--------------

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}




