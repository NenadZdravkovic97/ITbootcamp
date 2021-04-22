let a = 5;
let b = 7;
// 1. nacin 
if( a == b ) {
    console.log(`a = ${a} i b = ${b} su jednake vrednosti`);
} else {
    console.log(`a = ${a} i b = ${b} nisu jednake vrednosti`);
}

// 2. nacin 
if ( a != b ) {
    console.log("a i b nisu jednake vrednosti");
} else {
    console.log("a i b jesu jednake vrednosti");
}



// Dodavanje HTML elementa iz script fajla
document.body.innerHTML = "<h1>Ovo je <i>heading</i></h1>";
document.body.innerHTML += "<h3>Zadaci</h3>"; //Nadovezuje a ne overriduje

// Ukoliko dodamo samo otvoren tag, automatski ce ga zatvoriti i obrnuto.
// document.body.innerHTML += "<p>";
// document.body.innerHTML += "Neki tekst";
// document.body.innerHTML += "</p>";

let v = 2021;
document.body.innerHTML += 
`<p>
    Neki novi tekst
    <span>Neki span i broj u spanu ${v}</span>
</p>
`;

// let slika = "../female.png"
// document.body.innerHTML += `<img src="${slika}">`;


// if else if else 
let broj = -10;

if(broj < 0) {
    console.log("Broj je manji od nule");
} else if (broj == 0) {
    console.log("Broj je jedank nuli");
} else if (broj > 0) {
    console.log("Broj je veci od nule");
} else {
    console.log("Doslo je do greske")
}

console.log("kraj");

let ime = "Nenad";
let brSlova = ime.length;

if(brSlova > 10) {
    console.log("Dugacko ime");
} else if (brSlova < 10) {
    console.log("Kratko ime");
} else {
    console.log("Doslo je do greske")
}





