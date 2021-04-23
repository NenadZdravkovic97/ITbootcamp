// 12. 
// Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
// Pocetak i kraj radnog vremena prvog lekara
let p1 = 14;
let k1 = 20;

// Pocetak i kraj radnog vremena drugog lekara
let p2 = 18;
let k2 = 24;

//Izvojimo slucajeve kad se ne preklapaju smene i stavimo ih u if i elseif
if (k1 < p2) {
    console.log("Ne");
} else if(k2 < p1) {
    console.log("Ne");
} else {
    console.log("Da");
}




// 13.
// Za uneti broj ispitati da li je paran ili nije.
let paran = 21;
if( paran % 2 == 0) {
    console.log(`Broj ${paran} je paran`);
} else {
    console.log(`Broj ${paran} je neparan`);
}

// 14.
// Za uneti broj ispisati da li je deljiv sa 3 ili ne.

let deljivSa3 = 8;
if( deljivSa3 % 3 == 0) {
    console.log(`Broj ${deljivSa3} je deljiv sa 3`);
} else {
    console.log(`Broj ${deljivSa3} nije deljiv sa 3`);
}

// 15.
// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let num1 = 50;
let num2 = 40;
let res;
if ( num1 > num2 ){
    res = num1 - num2;
    console.log(`broj1 > broj2 rezultat je ${res}`);
} else {
    res = num2 - num1;
    console.log(`broj2 > broj1 rezultat je ${res}`);
}


// 16.
// Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.

let broj = 20;
if( broj <= 0){
    broj--
    console.log(broj);
} else {
    broj++
    // broj+=1
    // broj = broj +1;
    console.log(broj);
}

// 17.
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od nih je najmanji. 
let x = 30;
let y = 20;
let z = 10;

if( x > y && x > z) {
    console.log("x je najveci");
}
if( x > y && x < z || x < y && x > z){
    console.log("x je srednji");
}
if ( x < y && x < z) {
    console.log("x je najmanji");
}

if ( y  > x && y > z) {
    console.log("y je najveci");
}
if ( y > x && y < z || y < x && y > z) {
    console.log("y je srednji");
}
if ( y < x && y < z) {
    console.log("y je najmanji");
}

if ( z > y && z > x) {
    console.log("z je najveci");
}
if ( z > y && z < x || z < y && z > x) {
    console.log("z je srednji");
}
if ( z < y && z < x) {
    console.log("z je najmanji");
}

//18.
//Za učitani broj ispitati da li je ceo.

let ceoBroj = 20.5;
if( ceoBroj % 1 == 0) {
    console.log("ceo")
} else {
    console.log("decimalni")
}

// 19.
// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od nih je najmanji.
// else if zabaguje

// 20. 
// Učitati dva cela broja i ispitati da li je veći od njih paran.

let noviBroj1 = 30;
let noviBroj2 = 40;
if (noviBroj1 > noviBroj2) {
    if(noviBroj1 % 2 == 0) {
        console.log(`Broj1 = ${noviBroj1} je paran i veci od broja2 = ${noviBroj2}`);
    }
} else {
    if(noviBroj2 % 2 == 0) {
        console.log(`Broj2 = ${noviBroj2} je paran i veci od broja1 = ${noviBroj1}`);
    }
}



