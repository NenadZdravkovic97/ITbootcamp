
// 3.
// Odrediti proizvod elemenata celobrojnog niza.


let  brojevi2 = [1, 2, 3, 4, 5];
let proizvod = 1;

for(let i = 0; i < brojevi2.length; i++) {
    proizvod *= brojevi2[i];
}

console.log(proizvod);


// funkcija

function proizvodNiz(niz) {
    let proizvod = 1;

    for(let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    console.log(proizvod);
}
proizvodNiz(brojevi2);


// 4.
// Odrediti srednju vrednost elemenata celobrojnog niza.

let brojevi3 = [1, 2, 3, 4, 5, 6, 7, 8];
suma = 0
let brojac = 0;
for (let i = 0; i < brojevi3.length; i++) {
    suma += brojevi3[i];
    brojac++;
}

let srednjaVrednost = suma / brojac;
console.log(srednjaVrednost);

//funkcija

function srednjaVrednostF(niz) {
    suma = 0
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += brojevi3[i];
        brojac++;
    }

    let srednjaVrednost = suma / brojac;
    console.log(srednjaVrednost);
}

srednjaVrednostF(brojevi3);

// 6, 8, 9, 10 ,11

// 6.
// Odrediti minimalnu vrednost u celobrojnom nizu.

let brojevi4 = [20, 15, 3, 42, 10, 3, 12, 3];
let min = brojevi4[0];

for (let i = 0; i < brojevi4.length; i++) {
    if(min > brojevi4[i]) {
        min = brojevi4[i];
    }    
}

console.log(min);

// 8.
// Odrediti indeks minimalnog elementa celobrojnog niza.

let index = 0;

for (let i = 0; i < brojevi4.length; i++) {
    if(min == brojevi4[i]) {
        index = i;
        // break; //ispis prvog
        console.log(index); // ispis svih indexa
    }
}

// console.log(index); ispis poslednjeg
// FUnkcija za 6. i 8. zadatak
// [20, 15, 3, 42, 10, 3, 12, 3]
console.log("funkcija za 6. i 8. zadatak")
let min_and_index = (niz) => {
    let min = niz[0];
    let index = 0;
    for (let i = 0; i < niz.length; i++) {
        if(min > niz[i]) {
            min = niz[i];
            if (min == niz[i]) {
                index = i;
            }
        }    

    }
    console.log(min);
    console.log(index);
}

min_and_index(brojevi4);
// 9.
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

let brojevi5 = [48, 5, 15, 29, 31, 47, 45];
let sum = 0;
brojac = 0;
for (let i = 0; i < brojevi5.length; i++) {
    sum += brojevi5[i];
    brojac++;
}
let arsr = sum / brojac;
// console.log(brojac)  uso 5x u petlju znaci brojac = 5;
// console.log(arsr);
brojac = 0
for (let i = 0; i < brojevi5.length; i++) {
    if(brojevi5[i] > arsr) {
        brojac++;
        // console.log(brojevi5[i]);
    }
}

console.log(`Broj elemenata  celobrojnog niza koji su veći od ${arsr} je ${brojac}`);

// funkcija

let veciOdArsr = (niz) => {
    let sum = 0;
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        sum += niz[i];
        brojac++;
    }
    let arsr = sum / brojac;

    brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > arsr) {
            brojac++;
        }        
    }
    return brojac;
}

console.log(veciOdArsr(brojevi5));


// 10.
// Izračunati zbir pozitivnih elemenata celobrojnog niza.

let brojevi6 = [-10, 15, -2, 20, -5, 44, -25, 13, 70, -20];
let zbir = 0;
for (let i = 0; i < brojevi6.length; i++) {
    if(brojevi6[i] > 0) {
        zbir += brojevi6[i];
    }
}

console.log(`zbir pozitivnih elemenata celobrojnog niza ${brojevi6} je ${zbir}`);

// funkcija

let zbirPoz = (niz) => {
    let zbir = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] > 0) {
            zbir += niz[i];
        }        
    }
    return zbir;
}

console.log(zbirPoz(brojevi6));


// 11.
// Odrediti broj parnih elemenata u celobrojnom nizu.
let brojevi7 = [-10, 15, -2, 20, -5, 44, -25, 13, 70, -20, 27, 22, 88, 44];
brojac = 0;
for (let i = 0; i < brojevi7.length; i++) {
    if (brojevi7[i] % 2 == 0) {
        brojac++;
    }    
}

console.log(`broj parnih elemenata u celobrojnom nizu ${brojevi7} je ${brojac}`);

// funkcija

let brojParnih = (niz) => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 == 0) {
            brojac++;
        }  
    }
    return brojac;
}

console.log(brojParnih(brojevi7));