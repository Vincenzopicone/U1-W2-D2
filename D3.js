/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let N1 = 30
let N2 = 58

if (N1 > N2) {
  console.log("Il maggiore è n1")
} else {
  console.log("Il maggiore è n2")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


if (N1 != 5) {
  console.log("not equal")
} else {
  console.log("equal")
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let risultato3 = (25 % 5 === 0)

console.log ("Divisibile per 5")

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const N4= 17
const N5= 8

if (N4 === 8) {
  console.log("N4 Uguale a 8")
} else if (N5 === 8) {
  console.log("N5 uguale a 8")
} 
if (N4 - N5 === 8) {
  console.log("La sottrazione è uguale a 8")
} else {
  console.log("La sottrazione NON è uguale a 8")
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 55
let totalShoppingCart1 = 60
const shippingCosts = 10

if (totalShoppingCart < 50) {
  console.log("Totale da pagare:", totalShoppingCart+shippingCosts ,"Compresa spedizione di 10")
} else {
  console.log ("Totale da pagare:",totalShoppingCart)
}
/* if (totalShoppingCart1 < 50) {
  console.log("Totale da pagare:", totalShoppingCart1+shippingCosts , "Compresa spedizione di 10")
} else {
  console.log ("Totale da pagare:",totalShoppingCart1)
}*/



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

totalShoppingCart = totalShoppingCart * 0.8
totalShoppingCart1 = totalShoppingCart1 * 0.8
if (totalShoppingCart < 50) {
  console.log("Totale da pagare:", totalShoppingCart+shippingCosts ,"Compresa spedizione di 10")
} else {console.log ("Totale da pagare:",totalShoppingCart)
}
/*if (totalShoppingCart1 < 50) {
  console.log("Totale da pagare:", totalShoppingCart1+shippingCosts , "Compresa spedizione di 10")
} else {console.log ("Totale da pagare:",totalShoppingCart1)}*/


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numeri = [125,65,951]

numeri.sort(function(a,b) {return a-b });
console.log (numeri)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const typeN1 = 5
const typeN2 = 8

const risultato = (typeN1 + typeN2)

console.log (typeof risultato)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numero = 10;

const risultato1 = (numero % 2);

if (risultato1 > 0) {
  console.log ("Numero dispari!")
} else {
  console.log("Numero pari!")
};

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 10) {
    console.log("Meno di 10");
  } else if (val < 5) {
    console.log("Meno di 5");
  } else if (val >= 10) {
    console.log("Uguale a 10 o maggiore");
  }

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto"
}

console.log(me)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".

*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

console.log (me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.skills [2]

console.log (me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let arrayVuoto = []

arrayVuoto = [1,2,3,4,5,6,7,8,9,10]

console.log (arrayVuoto)


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

arrayVuoto[9] = 100

console.log (arrayVuoto)
