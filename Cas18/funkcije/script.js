let pr = 4;
let pr2 = 5
if (pr < 10) {
    pr = "0" + pr;
}
if (pr2 < 10) {
    pr2 = "0" + pr2;
}

console.log(pr); // poziv funkcije log
console.log(pr2); // poziv funkcije log


// Definicija funkcije (telo funkcije)
function mojaFunkcija() {
    console.log("Zdravo svete");
}


console.log("Neki tekst pre poziva funkcije");
// Poziv funkcije
mojaFunkcija();
console.log("Neki tekst posle poziva funkcije");

// Poziv funkcije
mojaFunkcija();


// Definicija druge funkcije

function isipisiTekst(tekst) { //promenljiva tekst vazi samo u ovom bloku i ovde
    console.log(`Ispisujem tekst: ${tekst}`); // parametar tekst
}
// Pozivi funkcije 
isipisiTekst("ITbootcamp"); // prilikom poziva funkcije prosledjuje se neka vrednost
isipisiTekst('Pera Peric'); 
isipisiTekst(25); 
let x = "Mika";
isipisiTekst(x); // tekst preuzima vrednost x
let tekst = "Zika"; // razlicita promenljiva u odnosu na funkciju
isipisiTekst(tekst); //prosledjuje se vrednost promelnjive "tekst"
console.log(tekst); // nije parametar tekst nego globalna promelnjiva "let tekst";


function test(x) {
    if (x % 2 == 0) {
        var y = "Paran"; // var-function scope (promenljiva vazi unutar funkcije), kad uvedemo sa var onda varijable vaze unutar funkcije, var je na nivou funkcije
    } else {
        let z = "Neparan"; // let - block scope (promenljiva vazi unutar bloka)
    }
    console.log(x);
    console.log(y);
    // console.log(z); // z uopste nije deklarisana van else bloka
}

// test(6);
// test(5);
// console.log(y); van funkcije NE POSTOJI PROMENLJIVA Y 





function korisnik(ime, prezime) {
    console.log(`Korisnik ${ime} ${prezime}`);
}

korisnik("Alaric", "I");
korisnik("Pera", "Peric");
korisnik("Pera Peric"); // druga vrednost je undefined

// Napisati funkciju koja ispisuje ime i prezime korisnika (koji se prosledjuju kao parametri),
// kao i info da li je rpezime korisnika dugacko (dugacko je ako ima vise od 10 karaktera)

function korisnikPrezime(ime, prezime) {
    if (prezime.length > 10) {
        console.log(`Korisnik ${ime} ${prezime} ima dugacko prezime`);
    } else {
        console.log(`Korisnik ${ime} ${prezime} nema dugacko prezime`);
    }
}

korisnikPrezime("Jelena", "Matejic");
korisnikPrezime("Stefan", "Stanimirovic");

function korisnikGodine(ime, god) {
    if (god >= 18) {
        console.log(`Korisnik ${ime} ima ${god} godina i punoletna je`);
    } else {
        console.log(`Korisnik ${ime} ima ${god} godina i maloletna je`);
    }
}
korisnikGodine("Pera", 29);
korisnikGodine("Laza", 10);


// funkcija koja ISPISUJE zbir svoja dva parametra
function zbir1(a, b) {
    let rez = a + b;
    console.log(rez);
}
zbir1(5, 10);
// console.log(a); ove dve linije ne rade, jer promelnjive a i be ne postoje!
// console.log(b); ove dve linije ne rade, jer promelnjive a i be ne postoje!
let a = 20;
let b = 40;
zbir1(a, b);
zbir1("Dra", "Gon");

/*
let datum = new Date();
let dan = datum.getDay(); // VRACA dan u nedelji
if (dan == 6 || dan == 0) { //vikend

} else { //radni dan

}


datum.getDay(); // NE ISPISUJE dan u nedelji 

//getDay(); nema input, output je: {0, 1, 2, 3, 4, 5, 6}
//sin(x); input: bilo koji realan broj, output je: neki broj izmedju [-1, 1]
//abs(x); input: bilo koji realn broj, output je:[0, +beskonacno]
//sin(abs(x)) + cos(abs(x));
// if (sin(x)>= 0) {...}
*/

// FUnkicja koja Vraca zbir svoja dva parametra
function zbir2(a, b) {
    let rez = a + b;
    return rez;
}

let z = zbir2(5, 6);
console.log(`Zbir brojeva 5 i 6 jednak je: ${z}`);
console.log(`Sum of numbers 5 and 6 is equal to: ${z}`);

if (z >= 0) {
    console.log(`zbir je neneagativan broj ${z}`);
} else {
    console.log(`zbir je negativan broj ${z}`);
}


if (zbir2(-5, -6) >= 0) { // ovde ne moze zbir1(); zato sto nema return nego on sam ispisuje u konzoli vrednost
    console.log(`zbir brojeva -5 i -6 je neneagativan broj ${z}`);
} else {
    console.log(`zbir brojeva -5 i -6 je negativan broj ${z}`);
}


let s = zbir2(5, 8) + zbir2(8, 9);
//      13          +    17 
// s =   30, ovo je moguce zbog returna

if(s % 2 == 0) {
    console.log("Zbir ova cetiri broja je paran");
} else {
    console.log("Zbir ova cetiri broja je neparan");
}


function proizvod(a, b) {
    return a * b;
    // console.log("Hello world") nakon returna prestaje izvrsavanje i ovaj deo koda se ne izvrsava
}

//return ima dvojaku ulogu:
// 1. VRACA vrednost funkciji gde se nalazi
// 2. PREKIDA izvrsenje funkcije

console.log(proizvod(5, 6));