//ESERCIZIO: Simon Says

//VARIABILI MINIMO E MASSIMO
var min = 1;
var max = 100;
let numRandom = [];



//5 NUMERI RANDOM
for (i = 0; i < 5; i++) {
    numRandom.push(getRndInteger(1, 100));
}

//STAMPO IN CONSOLE I 5 NUMERI RANDOM
console.log('I 5 numeri random')
console.log( numRandom.join()); //join() per unire

//Un alert() espone 5 numeri generati casualmente.
alert( numRandom.join(' '));

//FUNZIONE
function getRndInteger(numRandom) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//Da li parte un timer di 30 secondi.
console.log('Timer 30 secondi');
let seconds = 30; //VARIABILE SECONDI
let idInterval = setInterval(timer, 300);

function timer() {
    console.log(seconds); //STAMPO SU CONSOLE
    document.getElementById('countdown').innerHTML = seconds; ////STAMPO SU HTML
    if (seconds == 1) {
        clearInterval(idInterval);
        alert('Indovina i numeri: '); //////STAMPO SU ALERT
        document.getElementById('countdown').innerHTML = ('I numeri Random sono ' +  numRandom.join(' '));////STAMPO SU HTML
        //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        
        //VARIABILI - NUMERI INSERITI DALL'UTENTE
        let numeriUtente = [];

        for (i =0; i < 5; i++) {
            numeriUtente.push(parseInt(prompt('Inserisci i 5 numeri che ha visto precedentemente')));
        }
        //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        
        //CONDIZIONE
        for (i =0; i < numeriUtente.length; i++)  {
            if (numRandom.includes(numeriUtente[i])) {
                console.log('Il numero indovinato: ' + numeriUtente[i]); //Numero indovinato all'interno del numRandom
            }
        }
    }
    seconds--;
}








