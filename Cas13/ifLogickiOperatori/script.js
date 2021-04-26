let a = 9;

if ((a > 0) && (a < 10)) { // konjukcija: a > 0 I a < 10, istovremeno moraju da budu zadovoljeni
    console.log("Oba logicka uslova su zadovoljena");
} else {
    console.log("Barem jedan uslov nije zadovoljen");
}


let b = -5;

if ((b < 0) || (b > 15)) { //disjunkcija, ili ili, barem jedan uslov da bude tacan
    console.log("Barem jedan logicki uslov je zadovoljen");
} else {
    console.log("Nijedan uslov nije zadovoljen");
}

let c = -3;

if (!(c < 0)) { // negacija izraza i onda je c > 0 : nije (c < 0)
    console.log(`Broj ${c} je nenegativan`);
} else {
    console.log(`Broj ${c} je negativan`)
}


// Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

let pol = "z";
let god = 18;

if (pol=="m" && god >= 18) {
    console.log("Musko punoletan");
} else if (pol=="m" && god < 18) {
    console.log("Musko maloletan");
} else if (pol=="z" && god >= 18) {
    console.log("Zensko punoletan");
} else {
    console.log("Zensko maloletan");
}

// !(pol == m && godine >=18) === pol nije m || godine < 18  ako se negira izraz && postaje || 