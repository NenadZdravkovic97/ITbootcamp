// 1.
// Ispisati brojeve od 1 do 20 
let i;
let m;
for(i = 1; i <= 20; i++) {
    console.log(i);
}

// 2.
// Ispisati brojeve od 20 do 1 

for (i = 20; i >=1; i--) {
    console.log(i);
}

// 3.
// Ispisati parne brojeve od 1 do 20 
for(i = 1; i <= 20; i++) {
    if(i % 2 ==0) {
        console.log(i);
    }
}


console.log("Cetvrti zadatak");
// 4.
// Ispisati dvostruku vrednost brojeva od 5 do 15
let dvostruko = 1;
for (i=5; i <= 15; i++) {
    dvostruko = i * 2;
    console.log(dvostruko);
    // console.log(i * 2); moze i ovako
}


console.log("Peti zadatak");
// 5.
// Odrediti sumu brojeva od 1 do n
let n = 30;
let sum = 0;
for (i=1; i <= n; i++) {
    sum = sum + i;
}
console.log(sum);

// 6.
// Odrediti sumu brojeva od n do m 

n = 0;
m = 30
sum = 0;
for (i=n; i <= m; i++) {
    sum = sum + i;
}
console.log(sum);

// 7.
// Odrediti proizvod brojeva od n do m

n = 1;
m = 5;
let proizvod = 1;
for(i=n; i <= m; i++){
    proizvod = proizvod * i;
}
console.log(proizvod);

// 8.
// Odrediti sumu kvadrata brojeva od n do m *
n = 1;
m = 10;
let sumaKv = 0;
for(i=n; i <= m; i++){
    sumaKv = sumaKv + i**2; 
}
console.log(sumaKv);


// 9.
// Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).


// for (i = 1; i <= 3; i++) { ovo je los primer
//     document.body.innerHTML += `<img src="slike/${i}.jpg">`;
// }



n = 8;
/*
for(i = 1; i <= n; i++) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<img src="slike/1.jpg">`;
    } else if (i % 3 == 2) {
        document.body.innerHTML += `<img src="slike/2.jpg">`;
    } else {
        document.body.innerHTML += `<img src="slike/3.jpg">`;
    }
}
*/
for(i = 0; i < n; i++) {
    let k = i % 3; // k = 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2..... 
    document.body.innerHTML += `<img src="slike/${k+1}.jpg">`;
}


// 10.
// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *

console.log("Deseti zadatak");

let proizvod11 = 1;
for(i = 20; i <= 100; i++) {
    if(i % 11 == 0) {
        proizvod11 *= i;
    }
}

console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je: ${proizvod11}`);

// drugi nacin
proizvod11 = 1;
for(i=22; i <= 100; i+=11) {
    proizvod11 *= 1;
}

console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je: ${proizvod11}`);

// 11.
// Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

let brojac = 0;
for(i = 5; i <= 150; i++) {
    if(i % 13 == 0){
        brojac++;
    }
}

console.log(`brojac je ${brojac}`);


// 12.
// Ispisati aritmetičku sredinu brojeva od n do m.

// 1,2,3,4,5,6 = 6 cifara
// (1+2+3+4+5+6) / 6 = aritmeticka sredina


n = 1;
m = 6;
let suma = 0;
let broj = 0;

for(i = n; i <= m; i++) {
    suma +=i;
    broj++
}

let arsr = suma / broj;
console.log(arsr);

// Drugi nacin
n = 2;
m = 8; // broj brojeva izmedju n i m jednak je m- n + 1 (2, 3, 4, 5)
arsr = 0;
for(i = n; i <= m; i++) {
    arsr +=i;
}

arsr /= (m -n +1)
console.log(arsr);


console.log("deljivo s 11");























