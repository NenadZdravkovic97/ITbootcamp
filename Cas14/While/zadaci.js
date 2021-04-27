// 6.
// Odrediti sumu brojeva od 1 do 100
let i = 1;
let sum = 0;

while (i <= 50) {
    sum = sum +i;
    i++;
}
console.log(sum);

// 7.
// Odrediti sumu brojeva od 1 do n

i = 1;
let n = 50;
sum = 0;

while (i <= n) {
    sum = sum +i;
    i++;
}
console.log(sum);

// 8.
// Odrediti sumu brojeva od n do m

n = 1;
let m = 5;
sum = 0;
while (n <= m) {
    sum = sum + n;
    n++
}
console.log(sum);

// 9.
// Odrediti proizvod brojeva od n do m

n = 1;
m = 5;
let proizvod = 1;
while ( n <= m) {
    proizvod = proizvod * n;
    n++
}
console.log(proizvod);

// 10.
// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m
//MOj nacin nije tacan, drugi nacin je tacan
n = 1;
m = 10;
sum = 0;
while (n <= m) {
    if (n % 2 ==0) {
        sum = sum + n;
    } 
    n++
}
console.log(`proizvod parnih brojeva je ${sum}`);

n = 1;
m = 10;
sum = 0;
while (n <= m) {
    if (n % 2 == 1) {
        sum = sum + n;
    } 
    n++
}
console.log(`neparnih parnih brojeva je ${sum}`);

// drugi nacin


// 11.
// Odrediti sa koliko brojeva je deljiv uneti broj k

// i = 1;
// k = 10;
// sum = 0;
// brojac = 0;
// while (i <= 10) {
//     if (k % i == 0) {
//         // console.log(`${i} je deljiv sa ${k}`);
//         // console.log(i+", ")
//         sum = sum + ", " + i;
//         brojac++;
//     }
    
//     i++;
// }
// console.log(sum);
// console.log(brojac);

// drugi nacin

// k = 10
//1, 2, 5, 10
// ispisacemo 4 jer je 10 deljiv sa 4 broja
/*
1 da
2 da
3 nije
4 ne
5 da
6 ne
7 ne
8 ne
9 ne 
10 da

*/
k = 17;
let brDeljivih = 0;
i = 1;
while (i <= k) {
    if ( k % i == 0) {
        brDeljivih++; //isto ko brDeljivih += 1;
    }
    i++;
}
console.log(brDeljivih);



// 12.
// Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.
n = 8;
if (n%1 == 0 && n%n == 0) {
    console.log(`broj ${n} je prost broj`);
} else {
    console.log("Nije");
}

// drugi nacin
// prakticno se svodi na prethodni zadatak
// Ako je broj delilaca  == 2, to znaci da je broj prost tj. deljiv samo samim sobom i brojem 1
// U suprotnom broj nije prost

if (brDeljivih == 2) {
    console.log("Prost broj");
} else {
    console.log("Broj nije prost");
}












