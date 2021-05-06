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
test(5);
// console.log(y); van funkcije NE POSTOJI PROMENLJIVA Y 





