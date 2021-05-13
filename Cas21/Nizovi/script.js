// 12.
// Odrediti broj parnih elemenata sa neparnim indeksom.
let nizBrojeva = [10, 16, 15, 17, 12, -14];
let brElem = 0;
for (let i = 0; i < nizBrojeva.length; i++) {
    if (nizBrojeva[i] % 2 == 0 && i % 2 != 0) {
        brElem++;
    }
}

console.log(brElem);


// promena znaka
let a = 5;
// a *= -1; // a = a * -1;
a = -a; 

// 16.
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let namirnice = ["krema", "riba", "piletina", "voce", "povrce", "asepsol"];
namirnice[0] = "sok";

let lista = `<ul>`;
for (let i = 0; i < namirnice.length; i++) {
    lista += `<li>${namirnice[i]}</li>`;
}

lista += `</ul>`;

namirnice[0] = "lebac"; // ovo se ne ispisuje jer je promenilo vrednost nakon dodavanja


document.body.innerHTML += lista;

/////////////////////////////////
let rec = "abcdefg";
console.log(rec.length);
console.log(rec[0]);
console.log(rec[1]);
console.log(rec[5]);
for (let i = 0; i < rec.length; i++) {
    console.log(rec[i]);
}

// rec[0] ="t"; nije moguce menjati karakter u reci ovako

// 21.
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let stringovi = ["ana", "milica", "jelena"];
let sumaDuzina = 0;
for (let i = 0; i < stringovi.length; i++) {
    sumaDuzina += stringovi[i].length;
}

let arsrDuzina = sumaDuzina / stringovi.length;
console.log(arsrDuzina);

let brnatprosecnih = 0;
for (let i = 0; i < stringovi.length; i++) {
    if (stringovi[i].length > arsrDuzina) {
        brnatprosecnih++;
    }
}

console.log(brnatprosecnih);

// 22.
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

stringovi = ['Milos', "Milan", "Goran", "Ana"];


// prvi nacin
// rec.includes("a"); -- vraca true ukoliko rec sadrzi slovo a, u suprotnom vraca false
let brStringovaSaSlovomA = 0;
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    if(rec.includes("a") || rec.includes("A")) { // moze bez true
        brStringovaSaSlovomA++;
    }
}

console.log(brStringovaSaSlovomA);

// Drugi nacin
let brStringovaSaSlovomA2 = 0;
for (let i = 0; i < stringovi.length; i++) {
    let rec = stringovi[i];
    for (let j = 0; j < rec.length; j++) {
        //rec[j] je karakter u reci (slovo u reci)
        if (rec[j] == "a" || rec[j] == "A") {
            brStringovaSaSlovomA2++;
            break; // ako treba da preborjimo koliko ima slova a onda ide bez breaka
            // moze i ovako j = rec.lenght; onda nastavblja na sledecu rec
        }
    }
}

console.log(brStringovaSaSlovomA2);