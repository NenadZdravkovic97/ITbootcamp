// imenovane funkcije
function suma(a , b) { // deklaracija imenovane funkcije
    return a + b;
}

console.log(suma(5, 6));

// anonimne funkcije
let suma2 = function (a , b) { // deklaracija anonimne funkcije
    return a + b;
}

console.log(suma2(6, 7)); // poziv anponimne funkcije je preko promenljive u kojoj je sacuvana

// arrow funkcije
let suma3 = (a , b) => {
    return a + b;
}

console.log(suma3(20, 36));

// arrow f-ja koja ispisuje "Hello world!"

let hello = () => {
    console.log("Hello World");
}

hello();
hello();

// arrow f-ja koja pozdravlja korisnika

let korisnik = (ime) => {
    console.log(`Hello ${ime}`);
}

korisnik("Alaric");
korisnik("Olaf");

// Arrow f-ja koja ispisuje ime korisnika kao i pravni status

let korisnik2 = (ime, godine) => {
    if (godine < 18) {
        let ispis = "Korisnik " + ime + "je maloletno lice i ima " + godine + " godina";
        document.body.innerHTML += `<p style="color: green;">${ispis}</p>`
    } else {
        let ispis = "Korisnik " + ime + "je punoletno lice i ima " + godine + " godina";
        document.body.innerHTML += `<p style="color: red;">${ispis}</p>`
    }
}


korisnik2("Milica", 30);
korisnik2("Rade", 10);


// 5.
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.


// Prvi nacin
let slika = (putanja) => {
    return `<img src="${putanja}" >`;
}


// Drugi nacin

let slika2 = (putanja) => `<img src="${putanja}" >`;

// treci nacin

let slika3 = putanja => `<img src="${putanja}" >`;

// Pozivi

document.body.innerHTML += slika("img/1.jpg");
document.body.innerHTML += slika2("img/2.jpg");
document.body.innerHTML += slika3("img/3.jpg");


// 4.
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a, b) => {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

let max2 = (a, b) => (a >= b) ? a : b; // 1 ? 2 : 3


let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

let max4 = (a, b, c, d) => max2(max2(max2(a, b), c), d);




console.log(max2(4, 3));
console.log(max2(3, 4));
console.log(maks4(3, 54, 7, 50));

// 3.
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let  neparan = (n) => {
    if(n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

console.log(neparan(5));
console.log(neparan(6));

let neparan2 = n => (n % 2 == 1);


console.log(neparan2(7));
console.log(neparan2(8));







