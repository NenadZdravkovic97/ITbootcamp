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
//Ovo nije dobro
// n = 1;
// m = 10;
// sum = 0;
// while (n <= m) {
//     if (n % 2 ==0) {
//         sum = sum + n;
//     } 
//     n++
// }
// console.log(`proizvod parnih brojeva je ${sum}`);

// n = 1;
// m = 10;
// sum = 0;
// while (n <= m) {
//     if (n % 2 == 1) {
//         sum = sum + n;
//     } 
//     n++
// }
// console.log(`neparnih parnih brojeva je ${sum}`);

// Ovo je dobro
n = 1;
m = 5;
let sumaKvadrataP = 0;
let sumaKubN = 0;
while (n <= m) {
    if (n % 2 == 0) {
        sumaKvadrataP = sumaKvadrataP + n**2;
    } else {
        sumaKubN = sumaKubN + n**3;
    }


    n++;
}

console.log(sumaKvadrataP);
console.log(sumaKubN);

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
// Ne treba ovako
// n = 8;
// if (n%1 == 0 && n%n == 0) {
//     console.log(`broj ${n} je prost broj`);
// } else {
//     console.log("Nije");
// }

// prakticno se svodi na prethodni zadatak
// Ako je broj delilaca  == 2, to znaci da je broj prost tj. deljiv samo samim sobom i brojem 1
// U suprotnom broj nije prost

if (brDeljivih == 2) {
    console.log("Prost broj");
} else {
    console.log("Broj nije prost");
}

//drugi nacin
// trazimo delioce od i do n/2, cim nadje jedan i udje u if to znaci da je broj slozen, broj je prost ako ima delioc koji nije 1 i koji nije broj n, ako postoji takav delioc onda je broj slozen, ako ne postoji onda je broj prost
// ako postoji delioc koji nije n onda je sledeci delioc n, ne interesuje 1 i n i zbog toga je takav uslov, interesuje nas da li postoji neki delioc od 2 do n/2, ako postoji onda broj nije prost
n = 41;
i = 2; //1 deli svaki broj i zbog toga pocinjemo ovaj zadatak sa 2
while ( i <= n/2) { //okej je i za neparne brojeve, = je kad je n parno, cim preskoci n/2 nema potrebe da trazimo delioce
    if (n % i == 0) { // Odmah znamo da broj nije prost ako je deljiv sa i
        console.log(`Broj ${n} nije prost`);
        break; // Prekida izvrsenje petlje u kojoj se nasao, nije se izvrsio i++, i onda se izvrsio if nakon petlje
    } 
    // else {
    //     console.log(`Broj ${n} je prost`); //ovo je velika greska, moramo da se uverimo da nema nijednog delioca
    // }

    i++;
}
//ovaj if samo proverava da l nismo usli u unutrasnji if
if ( i > n/2 ) {
    console.log(`broj ${n} je prost`);
}


n = 24; // Broj cija se aprnost ispituje
i = 2; // Brojac koji ide po potencijalnim delicoma broja n
while ( i <= n/2) {
    if (n % i == 0) { 
        console.log(`Broj ${n} nije prost`);// da nema breaka napisao bi 6 puta da nije prost, jer ima 6 delioca
        break; // Preida se izvrsenje petlje jer sam naso jedan delioc koji nije ni 1 ni n
    } 

    i++;
}
if ( i > n/2 ) { // nije bilo potencionalnih delioca u if-u iznad
    console.log(`broj ${n} je prost`);
}

// Treci nacin
n = 23;  // broj cija se parnost ispituje
i = 2;   // brojac po potenicjalnim delicocima broja n
// indikator (flag) da li je broj n prost
// kod logickih proenljivih moze samo prime a ne prime == true 
// sve do je vrednost ove promenljive true
let prime = true;                     
while (prime && (i <= n/2)) {
    if (n % i == 0) { // da li 2 deli 24, onda prime vise nije true i izlazi iz petlje jer smo postavili na false
        prime = false;
    }
    i++;
}

if (prime) { // ako smo ispitali sve vrednosti prime nije nikad bio false
    console.log(`Broj ${n} je prost`);
} else {
    console.log(`Broj ${n} nije prost`);
}


// mozemo da tvrdimo daje broj prost jedino ako smo prosli kroz sve potencijalne delioce, ako smo nasli takav delioc onda broj nije prost, u ovom primeru po prime= true ili prime = false ispitujemo



















