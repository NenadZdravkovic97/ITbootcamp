// U DOM-u svaki HTML element je jedan JS objekat
console.log(document);
console.log(typeof document);

console.log(document.URL); // string
console.log(document.body); // objekat iz DOM stabla
console.log(document.documentElement); // objekat iz DOM stabla

console.log(document.anchors); // HTMLCollection
console.log(document.links); // HTMLCollection

let r1 = document.getElementById('div1');
console.log(r1); // objekat koji ima navedeni id

let r2 = document.getElementsByClassName('container');
console.log(r2); // HTMLCollection svih objekata koji imaju navedenu klasu

let r3 = document.getElementsByTagName('div');
console.log(r3); // HTMLCollection svih objekata koji imaju navedeni tag name

let r4 = document.getElementsByName('link');
console.log(r4); //NodeList svih objekata koji imaju navedeni name atribut


// HTMLCollection ne poseduje forEach metodu! 
// r2.forEach(obj => {
//     console.log(obj);
// })

// Prolazak kroz elemente HTMLCollection for petljom
for (let i = 0; i < r2.length; i++) {
    console.log(r2[i]);
}

// Moze se HTMLCollection konvertovati u Array, pa onda za Array koristit forEach petlja
let r2array = Array.from(r2);
r2array.forEach(obj => {
    console.log(obj);
});

// Elementima NodeList-e moze se pristupiti i preko foor i preko forEach petlje
r4.forEach(obj => {
    console.log(obj);
});

for (let i = 0; i < r4.length; i++) {
    console.log(r4[i]);    
}


let r5 = document.querySelector('.container');
console.log(r5);

let r6 = document.querySelectorAll('.container');
console.log(r6);

r6.forEach(element => {
    console.log(element);
});


let r7 = document.querySelectorAll('a');
console.log(r7);


//  document.getElementsByName("link")
let r8 = document.querySelectorAll('[name="link"]')
console.log(r8);


// document.getElementById
let r9 = document.querySelector('#div1'); // UVEK vraca objekat
console.log(r9); // Vraca objekat

// Nema smisla
let r10 = document.querySelectorAll('#div1'); // UVEK vraca NodeList, cak i kada se sastoji od jednog elementa
console.log(r10); // NodeList-a sa jednim elementom