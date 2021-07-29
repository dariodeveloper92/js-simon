
//ESERCIZIO: Simon Says

//VARIABILI MINIMO E MASSIMO
var min = 1;
var max = 100;

//5 NUMERI RANDOM
let numRandom1 = (getRndInteger(1, 100));
let numRandom2 = (getRndInteger(1, 100));
let numRandom3 = (getRndInteger(1, 100));
let numRandom4 = (getRndInteger(1, 100));
let numRandom5 = (getRndInteger(1, 100));

//STAMPO IN CONSOLE I 5 NUMERI RANDOM
console.log('I 5 numeri random')
console.log('1) '+ numRandom1);
console.log('2) '+ numRandom2);
console.log('3) '+ numRandom3);
console.log('4) '+ numRandom4);
console.log('5) '+ numRandom5);

//Un alert() espone 5 numeri generati casualmente.
alert(numRandom1 + ' ' + numRandom2 + ' ' + numRandom3 + ' ' + numRandom4 + ' ' + numRandom5);


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
        document.getElementById('countdown').innerHTML = ('I numeri Random sono ' + numRandom1 + ' ' + numRandom2 + ' ' + numRandom3 + ' ' + numRandom4 + ' ' + numRandom5);////STAMPO SU HTML
        //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
        
        //VARIABILI - NUMERI INSERITI DALL'UTENTE
        var numeriUtente1 = parseInt(prompt('Inserisci il primo numero che ha visto precedentemente'));
        var numeriUtente2 = parseInt(prompt('Inserisci il secondo numero che ha visto precedentemente'));
        var numeriUtente3 = parseInt(prompt('Inserisci il terzo numero che ha visto precedentemente'));
        var numeriUtente4 = parseInt(prompt('Inserisci il quarto numero che ha visto precedentemente'));
        var numeriUtente5 = parseInt(prompt('Inserisci il quinto numero che ha visto precedentemente'));
        //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        
        //CONDIZIONE
        if(numUtente1 = numRandom1) {
            console.log('I numeri indovinati sono: ' + numUtente1);
        } 
        else if(numUtente2 = numRandom2) {
            console.log('I numeri indovinati sono: ' + numUtente1);
        }
        else if(numUtente3 = numRandom3) {
            console.log('I numeri indovinati sono: ' + numUtente1);
        }
        else if(numUtente4 = numRandom4) {
            console.log('I numeri indovinati sono: ' + numUtente1);
        }
        else if(numUtente5 = numRandom5) {
            console.log('I numeri indovinati sono: ' + numUtente1);
        }
        else {
            console.log('Non hai indovinato i numeri ');
        }
        
    }
    seconds--;
}








