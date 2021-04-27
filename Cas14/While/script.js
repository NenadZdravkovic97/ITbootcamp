// 4.
// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

document.body.innerHTML += `<h1>While petlja</h1>`
let i = 1;
let n = 20;

while (i <= n) {
    /*
        1 % 3 = 1;
        2 % 3 = 2;
        3 % 3 = 0;
        4 % 3 = 1;
        5 % 3 = 2;
    */

    if (i % 3 == 1) {
        document.body.innerHTML += `<p style="color: red;">Ovo je ${i}. paragraf</p>`; 
    } else if (i % 3 == 2) {
        document.body.innerHTML += `<p style="color: green;">Ovo je ${i}. paragraf</p>`; 
    } else {
        document.body.innerHTML += `<p style="color: blue;">Ovo je ${i}. paragraf</p>`; 
    }
    i++;
}

// 5.
// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

// i = 1;
// n = 10;


// while ( i <= n) {
//     /*
//     1 % 2 = 1
//     2 % 2 = 0
//     3 % 2 = 1
//     5 % 2 = 0
//     5 % 2 = 1
//     */
//     if ( i % 2 == 1) {
//         document.body.innerHTML += `<img class="okvir1" src="1.jpg">`;
//     } else {
//         document.body.innerHTML += `<img class="okvir2"  src="2.jpg">`;
//     }
//     i++;
// }


//Ciklicno prikazivanje tri slike
i = 1;
n = 7;
    /*
    1 % 3 = 1; +1 3
    2 % 3 = 2; +1 2
    3 % 3 = 0; +1 1 da bi 1.jpg bio prikazan
    4 % 3 = 1;
    5 % 3 = 2;
    6 % 3 = 0;
    */
while (i <= n) {
    let ost = i % 3;
    document.body.innerHTML += `<img src="slike/${ost + 1}.jpg">`;
    i++;
}

// 6.
// Odrediti sumu brojeva od 1 do 100
i = 1;
let sum = 0; // Neutral za sabiranje je pocetna vrednost
while ( i <= 100) {
    sum = sum + i;    
    // sum += i;    
    i++
}
console.log(sum);
//bez petnje sa formulom - Gausova metoda 1,2,3,4,5 -> 5*(5+1) / 2 = 5*6/2 = 30/2 = 15
n = 100
let suma1 = (n * (n + 1)) / 2; // radi jedino kad sabiramo od broja 1 do n!
console.log(suma1);

//Proizvod brojeva

i = 1; 
n = 5;
let proizvod = 1; // Neutral za mnozenje je pocetna vrednost, ne sme da bude 0 kod proizvoda
while (i <= n) {
    proizvod = proizvod * i;
    i++
}
console.log(proizvod);









