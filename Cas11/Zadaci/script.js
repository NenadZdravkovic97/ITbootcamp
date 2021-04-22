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


