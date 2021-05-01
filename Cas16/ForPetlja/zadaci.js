// 15.
// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.
let i;
let n = 1;
let m = 50;
let sum = 0;
let brojac = 0;

for(i=n; i <= m; i++) {
    if(i % 10 == 4 || i % 10 == -4) {
        brojac++;
        sum += i;
    }
}

console.log(`Brojac je ${brojac}`);
console.log(`Suma je ${sum}`);

// 16.
// Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 1;
m = 50;
let a = 2;
sum = 0;

for (i = n; i <= m; i++) {
    if(i % a != 0) {
        sum +=i;
    }
}

console.log(sum);

// 13.
// Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. *

n = -20;
m = 80;
let brojPoz = 0;
let brojNeg = 0;

for(i = n; i <= m; i++) {
    if(i > 0) {
        brojPoz++;
    } else if(i < 0) {
        brojNeg++;
    } 
}

console.log(`Broj pozitivnih je ${brojPoz}`);
console.log(`Broj negativnih je ${brojNeg}`);




// n = -20;
// m = 80;
// brojPoz = 0;
// brojNeg = 0;

// for(i = n; i <= m; i++) {
//     if(i == 0) {
//         console.log(`Nula je neutralan broj`);
//     } else if(i < 0) {
//         brojNeg++;
//     } else {
//         brojPoz++;
//     }
// }

// console.log(`Broj pozitivnih je ${brojPoz}`);
// console.log(`Broj negativnih je ${brojNeg}`);



// 14.
// Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. *
brojac = 0;
for (i = 5; i <= 50; i++) {
    if(i % 3 == 0 || i % 5 == 0){
        brojac++;
    }
}

console.log(`${brojac} broja je deljivo sa 3 ili 5`);

// 17.
// Odrediti proizvod brojeva od n do m koji su deljivi brojem a *

n = 1;
m = 10;
a = 3;
let proizvod = 1
for (i = n; i <= m; i++) {
    if(i % a == 0) {
        proizvod *= i;
    }
}

console.log(proizvod);

// 18.
// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

document.write("<table>");
for(i=1; i <=6; i++) {
    if(i % 2 == 0) {
        document.write(`
        <tr class="obojen">
            <td>Neki tekst</td>
            <td>Neki tekst</td>
        </tr>
        `);
    } else {
        document.write(`
        <tr>
            <td>Neki tekst</td>
            <td>Neki tekst</td>
        </tr>
        `);
    }
}

document.write("</table>");

// 19.
// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

document.write("<ul>");
for(i = 1; i <= 10; i++){
    if(i % 3 != 0) {
        document.write(`<li>Element${i}</li>`);
    }
    
    if(i % 3 == 0) {
        document.write("<ul>");
        document.write(`<li class="obojenLi">Element${i}</li>`);
        document.write("</ul>");
    }
}
document.write("</ul>");

// 20.
// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.
for(i = 1; i <= 64; i++) {
    document.write(`<span>${i}</span>`);
    // if(i == 8 || i == 16 || i == 24 || i == 32 || i == 40 || i == 48 || i == 56 || i == 64) {
    if(i % 8 == 0) {
        document.write(`<br>`);
        document.write(`<br>`);
    }
}

// document.write(`<span>${i}</span>`)

// 21.
// Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
// U realizaciji ovog zadatka koristiti for petlju.

for(i = 1; i <= 64; i++) {
    // if( (i > 0 && i <= 8) || (i > 16 && i <=24) || (i > 32 && i <=40) || (i > 48 && i <=56)){
    if( (i > 0 && i <= 8) || (i > 16 && i <=24) || (i > 32 && i <=40) || (i > 48 && i <=56)){
        if(i  % 2 == 0) {
            document.write(`<span class="siva">${i}</span>`);
        } else {
            document.write(`<span>${i}</span>`);
        }
    } else {
        if(i  % 2 != 0) {
            document.write(`<span class="siva">${i}</span>`);
        } else {
            document.write(`<span>${i}</span>`);
        }
    } 
    if(i == 8 || i == 16 || i == 24 || i == 32 || i == 40 || i == 48 || i == 56 || i == 64) {
        document.write(`<br>`);
    }
}



