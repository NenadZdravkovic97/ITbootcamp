const pi = 3.14;
console.log(pi);


// pi = 3.1415; ne mozemo ponovo dodeliti vrednost konstanti
// const pi = 3.1415; ne mozemo ponovo deklarisati konstantu

let a;
console.log(a); //undefined vrednost promenljive
// console.log(b); // nedefinisana promenljiva

let recenica = "JS kaze: \"Hello world!\" ";
console.log(recenica);

recenica = `JS kaze: "Ili kupi alat, il'ostavi zanat!"`;
console.log(recenica);

// let god;
// console.log(god, god+3); // undefined, NaN - Not a Number

let god1 = null; // promenljiva ne sme da pocinje brojem i specijalnim karakterima !?.+-
console.log(god1, god1+3); // null, 3


// Kokatenacija stringova

let ime = "Nenad";
let prezime = "Zdravkovic";
let imePrezime = ime + " " + prezime;  // + kad koristimo reci on vrsi konkatenaciju tj. nadovezuje reci
console.log(imePrezime);
console.log(ime.length +  prezime.length); // + kad koristimo brojeve vrsi sabiranje

// Osnovne aritmeticke operacije
let p = 9;
let q = 3;

let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

let proizvod = p * q;
console.log(proizvod);

let kolicnik = p / q;
console.log(kolicnik);

// Menjanje vrednosti promenljive
//+=
p += 3; // ekvivalentno p = p + 3;
console.log(p); // 12

p -= 5; // ekvivalentno p = p - 5;
console.log(p); // 7

p *= 2; // ekvivalnetno p = p * 2;
console.log(p); // 14

//++ - Povecava vrednost promenljive za 1
console.log(p); // 14
p++;
console.log(p); // 15


let r = 50;
console.log(r++); // 50 r++ Prvo je ispisao r pa je povecao za +1 (u ovoj liniji ne vidimo povecanja)
console.log(r); // 51

let k = 50;
console.log(++k) // 51 - ++k - prvo je povecao pa ispisao (u ovoj liniji odmah vidimo povecanje)



//  7 / 3 = 2 (+ ost. 1) 

let x = 7;
let y = 3;

let ost = 7 % 3; // Racunanje ostatka pri deljenju

console.log(ost);

// stepenovanje

let stepen = y**4;
console.log(stepen);


let x1 = "godina";
let y1 = "prestupna";
console.log(x1 + " " + y1);

let rezultat1 = 26 + "godina"; // gledao 26 kao na broj krajnji rezultat je string, nadovezuje kao da su dva stringa u pitanju
console.log(rezultat1); 

let rezultat2 = "26" + "godina";
console.log(rezultat2);

let rezultat3 = 26 + 1 + "godina"; // prvo izvrsi sabiranje 26+1, pa onda tek nadoveze na rec godina
console.log(rezultat3);

let rezultat4 = 26 + "godina" + 1; // ne sabira
console.log(rezultat4);

let rezultat5 = "26" + "1" + "godina";
console.log(rezultat5);

let rezultat6 = 26 / "godina";
console.log(rezultat6); // NaN


