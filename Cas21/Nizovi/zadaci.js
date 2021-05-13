// 13.
// Izračunati sumu elemenata niza sa parnim indeksom.

let brojevi = [10, 12, 18, 20, 24, 39, 40, 41, -20, -77];
let sum = 0;
for (let i = 0; i < brojevi.length; i++) {
    if (i % 2 == 0) {
        sum += brojevi[i];
    }
}

console.log(sum);

// 14.
// Promeniti znak svakom elementu celobrojnog niza.

for (let i = 0; i < brojevi.length; i++) {
    brojevi[i] = -brojevi[i];    
}

console.log(brojevi);

// 15
// Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

brojevi = [10, 12, 19, -20, 25, -39, 40, 41, -20, -77, 81];
//          0   1   2    3   4    5   6   7   8    9   10
for (let i = 0; i < brojevi.length; i++) {
    if (brojevi[i] % 2 != 0 && i % 2 == 0) {
        brojevi[i] = -brojevi[i];    
    }    
}
console.log(brojevi);       

// 16.
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = ["jabuka", "papir", "vitamini", "meso", "voda"];

let lista = `<ul>`;

for (let i = 0; i < kupovina.length; i++) {
    lista += `<li>${kupovina[i]}</li>`;
}

lista += `</ul>`;

document.body.innerHTML += lista;


// 17.
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let imena = ["Lejkersi", "Dallas", "San Antonio", "Toronto", "76ersi"];


let tabela = `<table>`;

for (let i = 0; i < imena.length; i++) {
    tabela += 
    `
    <tr>
        <td>${imena[i]}</td>
    </tr>
    `;
}

tabela +=  `</table>`;
document.body.innerHTML += tabela;


// 18.
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let putanje = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/male.jfif", "img/female.png"];

for (let i = 0; i < putanje.length; i++) {
    document.body.innerHTML += `<img src="${putanje[i]}">`;
}

// 19.
// Ispisati dužinu svakog elementa u nizu stringova. 

let noviNiz = ["jabuka", "monitor", "vitamini", "meso", "voda", "mercedes"];

for (let i = 0; i < noviNiz.length; i++) {
    console.log(noviNiz[i].length);
}


// 20.
// Odrediti element u nizu stringova sa najvećom dužinom.
let niz2 = ['1234', '12345789', '12345678', '123', '1234567'];
let najveci = niz2[0].length;
let el = "";
for (let i = 0; i < niz2.length; i++) {
    if(niz2[i].length > najveci) {
        najveci = niz2[i].length;
        el = niz2[i];
    }
}

console.log(`Najveca duzina ${el}`);


// 21.
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

niz2 = ['1234', '12345', '123456', '123', '1234567', '12345678', '1234', '123456', '1234','1234567'];
let counter = 0;
sum = 0;

for (let i = 0; i < niz2.length; i++) {
    sum += niz2[i].length;
    counter++;
}

let prosek = sum / counter;

counter = 0;
for (let i = 0; i < niz2.length; i++) {
    if (niz2[i].length > prosek) {
        counter++;
    }    
}

console.log(`broj elemenata u nizu stringova čija je dužina veća od prosečne dužine ${prosek}  je ${counter}`);

// 22.
// Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let slovoA = ['ananas', 'bebe', 'knjiga', 'leptir', 'auto'];
counter = 0;

for (let i = 0; i < slovoA.length; i++) {
    let a = slovoA[i].includes("a");
    if (a == true) {
        counter++;
    }
}

console.log(`Sadrze slovo a je ${counter}`);

// 23.
// Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

slovoA = ['AnanAs', 'bebe', 'knjigA', 'leptir', 'auto', 'ANDROID'];
counter = 0;

for (let i = 0; i < slovoA.length; i++) {
    let lower = slovoA[i].toLowerCase();
    a = lower.includes("a");
    if (a == true) {
        counter++;
    }
}

console.log(`Sadrze slovo a i A je ${counter}`);


// 24

let A = [1, 2, 3, 4, 5];
let B = [1, 2, 3, 4, 5];
let C = [];

for (let i = 0; i < A.length || i < B.length; i++) {
    C.push(A[i]);
    C.push(B[i]);
}
console.log(C);