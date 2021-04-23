// 1.
// Za dva uneta broja ispisati koji je veći a koji je manji.
let a = 10;
let b = 5;
if( a > b) {
    console.log(`a = ${a} je vece od b = ${b}`)
} else {
    console.log(`b = ${b} je vece od a = ${a}`)
}

// 2.
// Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.

let temperatura = -20;

if ( temperatura >= 0) {
    console.log(`Temperatura je u plusu, sada je ${temperatura} stepeni`)
} else {
    console.log(`Temperatura je u minusu, sada je ${temperatura} stepeni`)
}

// 3.
// U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar. 
let pol = "muski";
let zenskaSlika = "female.png"
let muskaSlika = "male.jfif"

if ( pol == "zenski") {
    document.body.innerHTML += `<img src=${zenskaSlika} >`
} else {
    document.body.innerHTML += `<img src=${muskaSlika} >`
}


// 4. 
// U odnosu na preuzeto trenutno vreme sa računara, ispisati da li je trenutno jutro ili popodne.

let datum = new Date();
let trenutnoVreme = datum.getHours();

if( trenutnoVreme < 12 ) {
    console.log("Jutro");
} else {
    console.log("Podne");
}

// 5.
// Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let godina = datum.getFullYear();
let godinaRodjenja = 2004;
let brojGodina = godina - godinaRodjenja;

if ( brojGodina >= 18) {
    console.log("Osoba je punoletna")
} else {
    console.log("Osoba je maloletna")
}

// 6.
// Odrediti najveći od tri uneta broja.
let prviBroj = 100;
let drugiBroj = 40;
let treciBroj = 30;

let veciBroj = Math.max(prviBroj, drugiBroj, treciBroj);
console.log(veciBroj);


// Drugi nacin 

let a1 = 225;
let a2 = 17;
let a3 = 3;

let maks = a1;  // pretpostavka da je najveci 1. broj
if(a2 > maks) {
    maks = a2; // pretpostavka mora se updatuje ako je pretpostavka losa
}
if (a3 > maks) {
    maks = a3;
}
console.log(maks);




// 7.
// Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let brojPoena = 80;

if ( brojPoena > 50 && brojPoena <= 60) {
    console.log('Ocena 6');
} else if ( brojPoena > 60 && brojPoena <= 70) {
    console.log('Ocena 7');
} else if ( brojPoena > 70 && brojPoena <= 80) {
    console.log('Ocena 8');
} else if ( brojPoena > 80 && brojPoena <= 90) {
    console.log('Ocena 9');
} else if ( brojPoena > 90 ) {
    console.log('Ocena 10');
} else {
    console.log("pao");
}

// 8.
// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let dan = datum.toLocaleString("default", { weekday: "long" });

if ( dan == "Monday" || dan == "Tuesday" || dan == "Wednesday" || dan == "Thursday" || dan == "Friday") {
    console.log('radni dan');
} else {
    console.log("vikend");
}


console.log("drugi nacin");

let dan2 = datum.getDay();

if ( dan2 == 0) {
    console.log("vikend je");
} else if ( dan2 ==6) {
    console.log("vikend je");
} else {
    console.log("Radni dan");
}

// 9.
// Za vreme preuzeto sa računara ispisati 
// dobro jutro za vreme manje od 12 sati ujutru, 
// dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.


if( trenutnoVreme < 12 ) {
    console.log("Jutro");
} else if ( trenutnoVreme < 18) {
    console.log("Popodne")
} else {
    console.log("Vece");
}

// 10.
// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 

let prviDatum = new Date();
let drugiDatum = new Date(2018, 11, 24, 10, 33, 30, 0);

if ( prviDatum > drugiDatum) {
    console.log("Prvi je veci od drugog");
} else if (drugiDatum > prviDatum) {
    console.log("Drugi je veci od prvog");
} else {
    console.log("Isti datum");
}


// 01-01-2020
// 02-02-1900 kad poredimo stringove uvodimo prvu vrednost koja je najjaca, prvo godina, pa mesec pa dan
//Kretanje od opsteg ka posebnom
let dat1 = "2020-05-23"; 
let dat2 = "2021-05-01";
if (dat1 < dat2) { 
    console.log(`${dat1} je bio pre ${dat2}`);
} else if (dat2 < dat1) {
    console.log(`${dat2} je bio pre ${dat1}`);
} else {
    console.log(`${dat1} i ${dat2} su isti`);
}


let danN1 = 04;
let mesN1 = 05;
let godN1 = 2020;

let danN2 = 02;
let mesN2 = 05;
let godN2 = 2020;

if( godN1 < godN2 ) {
    console.log("Datum 1 je raniji");
} else if( godN2 < godN1 ) {
    console.log("Datum 2 je raniji");
} else if ( mesN1 < mesN2 ) {
    console.log("Datum 1 je raniji");
} else if (mesN2 < mesN1) {
    console.log("Datum 2 je raniji");
} else if ( danN1 < danN2) {
    console.log("Datum 1 je raniji");
} else if ( danN2 < danN1 ) {
    console.log("Datum 2 je raniji");
} else {
    console.log("Isti datumi");
}




// 11. 
// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

if ( trenutnoVreme >= 9 && trenutnoVreme < 17) {
    console.log("Radi");
} else {
    console.log("Ne radi");
}

console.log("Odvaja zadatke");

// vreme < 9 zatvoreno
// vreme >= 17 zatvoreno
// else otvoreno

// 12. 
// Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.

// let Lekar1Start = 9;
// let Lekar1End = 17;

// let Lekar2Start = 11;
// let Lekar2End = 19;

// if (Lekar1Start >= 9 && Lekar1End >=9 && Lekar1End <= 19 && Lekar2End <= 19 ) {
//     console.log("DA");
// } else {
//     console.log("NE")
// }

// Pocetak i kraj radnog vremena prvog lekara
let p1 = 14;
let k1 = 20;

// Pocetak i kraj radnog vremena drugog lekara
let p2 = 21;
let k2 = 24;

if (k1 < p2) {
    console.log("Ne");
} else if(k2 < p1) {
    console.log("Ne");
} else {
    console.log("Da");
}


// 13. 
// Za uneti broj ispitati da li je paran ili nije.

let broj = 10;

if ( broj % 2 == 0) {
    console.log("Paran broj");
} else {
    console.log("Neparan broj");
}

// 14.
// Za uneti broj ispisati da li je deljiv sa 3 ili ne.

let broj2 = 40;
if ( broj2 % 3 === 0) {
    console.log("Deljiv");
} else {
    console.log("Nije deljiv");
}

// 15. 
// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let num1 = 40;
let num2 = 150;
let res;
if ( num1 > num2 ) {
    res = num1 - num2;
    console.log("Broj jedan je veci",res);
} else {
    res = num2 - num1;
    console.log("Broj dva je veci",res);
}





