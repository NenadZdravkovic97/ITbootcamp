// 2.
// Odrediti zbir elemenata celobrojnog niza.

let brojevi = [5, 15, 2, 4];
let sum = 0;
brojevi.forEach(e => {
    sum += e;
});

console.log(sum);


// 3.
// Odrediti proizvod elemenata celobrojnog niza.
let proizvod = 1;
brojevi.forEach(e => {
    proizvod *= e;
});

console.log(proizvod);

// 4.
// Odrediti srednju vrednost elemenata celobrojnog niza.

sum = 0;
brojevi.forEach(e => {
    sum += e;
});

let arsr = sum / brojevi.length;
console.log(arsr);


// 5.
// Odrediti maksimalnu vrednost u celobrojnom nizu.
brojevi = [5, 25, 2, 44, 1, 12];
let maks = brojevi[0];

brojevi.forEach(e => {
    if (e > maks) {
        maks = e;
    }
})

console.log(maks);

// 6.
// Odrediti minimalnu vrednost u celobrojnom nizu.

let min = brojevi[0];

brojevi.forEach(e => {
    if (e < min) {
        min = e;
    }
})

console.log(min);

// 7.
// Odrediti indeks maksimalnog elementa celobrojnog niza.



brojevi = [5, 55, 2, 44, 1, 12];
maks = brojevi[0];
let index = 0;

brojevi.forEach((e, i) => {
    if (maks < e) {
        maks = e;
        index = i;
    }
});

console.log(`Maksimalni element je ${maks} i njegov index je ${index}`);


// 8.
// Odrediti indeks minimalnog elementa celobrojnog niza.

brojevi = [5, 55, 2, 44, 1, 12];
min = brojevi[0];
index = 0;

brojevi.forEach((e, i) => {
    if (min > e) {
        min = e;
        index = i;
    }
});

console.log(`Maksimalni element je ${min} i njegov index je ${index}`);


// 9.
// Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti. 

brojevi = [48, 55, 2, 44, 1, 12, 60, 7];
sum = 0;
brojevi.forEach(e => {
    sum += e;
});

arsr = sum / brojevi.length;
// console.log(arsr); 
let counter = 0;
brojevi.forEach(e => {
    if (e > arsr) {
        counter++;
    }
})

console.log(`Broj elemenata u nizu koji su veci od ${arsr} je ${counter}`);

/* 10.
Izračunati zbir pozitivnih elemenata celobrojnog niza. */
brojevi = [48, -55, 2, 44, 1, -12, 60, -7];
sum = 0;
brojevi.forEach(e => {
    if (e > 0) {
        sum += e;
    }
});

console.log(`Zbir svih pozitivnih elemenata je ${sum}`);

// 11.
// Odrediti broj parnih elemenata u celobrojnom nizu.

brojevi = [2, 3, 11, 14, 20, 15, 18];
counter = 0;

brojevi.forEach(e => {
    if (e % 2 == 0) {
        counter++;
    }
});

console.log(`Broj parnih elemenata u nizu je ${counter}`);


// 12.
// Odrediti broj parnih elemenata sa neparnim indeksom.
brojevi = [2, 3, 11, 14, 20, 15, 18, 10, 12, 24];
counter = 0;

brojevi.forEach((e, i) => {
    if (e % 2 == 0 && i % 2 != 0) {
        counter++;
    }
});

console.log(`Broj parnih elemenata sa neparnim indeksom u nizu je ${counter}`);

// 13.
// Izračunati sumu elemenata niza sa parnim indeksom.
brojevi = [2, 3, 11, 14, 20, 15, 18, 10, 12, 24];
sum = 0;

brojevi.forEach((e, i) => {
    if (i % 2 == 0) {
        sum += e;
    }
});
console.log(`Suma elemenata niza sa parnim indeksom je ${sum}`);


// 14.
// Promeniti znak svakom elementu celobrojnog niza.
brojevi = [1, -5, 2, -20, 15, 18, -11, -14];
let promenjeni = [];
brojevi.forEach((e, i) => {
    e = -e;
    promenjeni.push(e);
});

console.log(brojevi);
console.log(promenjeni);