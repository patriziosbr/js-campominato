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


// // var askedNum = parseInt(prompt('inserisci un numero da 1 a 100'))


// var arrBomb = [];
// var arrUserNumber = [];

// while (arrBomb.length < 16 ) { // continuo a provare finchè arrBomb ha 16 numeri unici
//     var randomNumber =  getRandomInt(1, 100); // genero un n. casuale
   
//     if ( !arrBomb.includes(randomNumber) ) { // controllo se non (!) è incluso
//         arrBomb.push(randomNumber);
//     }
// }
//  console.log('end:', arrBomb); 

 // chiedere un numero all'utente > controllare se non è duplicato > controllare se il numeroUtente è presente nell' arrBomb


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
    }
}
console.log(numeriUtente, "l'unghezza array: " + numeriUtente.length);




// var gameOver = false;

//  while(gameOver != true) {
//      var userNumber = parseInt(prompt('inserisci un numero da 1 a 100'));

//     if( arrBomb.includes(userNumber)) {
//         // l'utente ha perso
//         gameOver = true;
//     } else {
//         if( ! arrUserNumber.includes(userNumber) && userNumber > 1 && userNumber <= 100) {
//             arrUserNumber.push(userNumber);
//         }

//     }
// }


//------------FUNCTION-----------------

//random number
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


    


// function checkInArray(element, array) {
    
//     for(var i=0; i < array.length; i++) {
//         if(element == array[i]) {
//             return true
//         } else {
//             return 'non trovato'
//         }
//     }
// }
// console.log(checkInArray(insertNum, arrBomb));






// while...
// var c = 0;
// while (c < 5) { // se questa condizione è false, esco dal ciclo
//     console.log('ciao');
//     c++;
// }




