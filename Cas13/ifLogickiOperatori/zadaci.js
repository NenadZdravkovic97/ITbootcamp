// 21.
//  Naći koji je najveći od tri uneta broja 
// a, b i c, korišćenjem logičkih operatora.

let a = 50;
let b = 40;
let c = 30

if ( a > b && a > c) {
    console.log(`${a} je najveci`);
} else if( b > a && b > c) {
    console.log(`${b} je najveci`);
} else {
    console.log(`${c} je najveci`);
}

// 22.
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.
let t = 30;

if ((t < -15) || (t > 40)) {
    console.log("Ekstremna temperatura");
} else {
    console.log("Normalno");
}

// if ( t < -15) {
//     console.log("Ekstremna hladnoca");
// } else if ( t > 40 ) {
//     console.log("Ekstremna toplota");
// } else {
//     console.log("srednja temperatura");
// }

// 23.
// Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let d = new Date();
let year = d.getFullYear();

if((year % 4 == 0 && year % 100 !=0) || (year % 400 == 0)) {
    console.log(`Prestupna godina ${year}`);
} else {
    console.log(`Nije prestupna godina ${year}`);
}

// 24.
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
let dan = d.getDay();
let vreme = d.getHours();
let pR = 9;
let kR = 20;

let pV = 10;
let kV = 18;

if((dan == 0) || (dan == 6)) {
    if ((vreme >=pV) && (vreme < kV)) {
        console.log("Otvoreno vikend");
    } else {
        console.log("Zatvoreno vikend");
    }
} else {
    if ((vreme >= pR) && (vreme < kR)) {
        console.log("Otvoreno radni dan");
    } else {
        console.log("Zatvoreno radni dan");
    }
}

