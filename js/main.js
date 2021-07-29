//ESERCIZIO: Simon Says

//VARIABILI MINIMO E MASSIMO
var min = 1;
var max = 100;
let numRandom = []; //ArrAY con numRandom 

//5 NUMERI RANDOM
for (i = 0; i < 5; i++) { //Se devo creare 5 numeri Random utilizzo il Ciclo "For"
    numRandom.push(getRndInteger(1, 100)); //Per "INSERIRE" all'interno dell'Array i numeri random utilizzo il METODO "PUSH"
}

//STAMPO IN CONSOLE I 5 NUMERI RANDOM
console.log('I 5 numeri random')
console.log( numRandom.join()); //Per "UNIRE" i 5 num all'interno dell'Array utilizzo il METODO "JOIN"

//Un alert() espone 5 numeri generati casualmente.
alert( numRandom.join(' '));//Per "UNIRE" i 5 num all'interno dell'Array utilizzo il METODO "JOIN"

//FUNZIONE
function getRndInteger(numRandom) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;//Per "NUMERO INTERO" utilizzo il METODO "FLOOR" / Per "NUMERO RANDOM" utilizzo il METODO "RANDOM"
}

//Da li parte un timer di 30 secondi.
console.log('Timer 30 secondi');
let seconds = 30; //VARIABILE SECONDI
let idInterval = setInterval(timer, 1000);//Per intervallo di 1 secondo - nel countdown di 30 secondi

function timer() {
    console.log(seconds); //STAMPO SU CONSOLE I SECONDI
    document.getElementById('countdown').innerHTML = seconds; ////STAMPO SU HTML I SECONDI
    if (seconds == 1) {
        clearInterval(idInterval);//?
        alert('Indovina i numeri: '); //////STAMPO SU ALERT
        document.getElementById('countdown').innerHTML = ('I numeri Random sono ' +  numRandom.join(' '));////STAMPO SU HTML / Per "UNIRE" i 5 num all'interno dell'Array utilizzo il METODO "JOIN"
        //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        
        //VARIABILI - NUMERI INSERITI DALL'UTENTE
        let numeriUtente = [];

        for (i =0; i < 5; i++) { //Se devo creare "5 PROMPT" utilizzo il Ciclo "For"
            numeriUtente.push(parseInt(prompt('Inserisci i 5 numeri che ha visto precedentemente')));//Per "INSERIRE" all'interno dell'Array i numeri random utilizzo il METODO "PUSH"
        }
        //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        
        //CONDIZIONE
        for (i =0; i < numeriUtente.length; i++)  { //Se devo confrontare "5 numeriUtente" con "5 numRandom" utilizzo il Ciclo "For"
            if (numRandom.includes(numeriUtente[i])) { //Se devo verificare che all'interno del numRandom sono INCLUSI i numeriUtente utilizzo il METODO "INCLUDES"
                console.log('Il numero indovinato: ' + numeriUtente[i]); //Numero indovinato all'interno del numRandom
            }
        }
    }
    seconds--;
}








