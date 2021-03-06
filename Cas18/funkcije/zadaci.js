// 3.
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if(n % 2 != 0){
        return true;
    } else {
        return false;
    }
}

let broj = neparan(4);
console.log(broj);

let m = 18;
if (neparan(m)) { // isto ko neparan(m) == true
    console.log(`broj ${m} je neparan`);
} else {
    console.log(`broj ${m} je paran`);
}


// 4.
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// function maks2(a, b) {
//     let max = Math.max(a, b);
//     return max;
// }

// let veci = maks2(10, 10);
// console.log(veci);

// drugi nacin

function maks2(a , b) {
    if( a >= b) {
        return a;
    } else {
        return b;
    }
}



// function maks4(a, b, c, d) {
//     let max = Math.max(a, b, c, d);
//     return max;
// }

// veci = maks4(5, 6, 7, 4);
// console.log(veci);

// drugi nacin
function maks4(a, b) {
    let max = Math.max(a, b);
    return max;
}

veci = maks4(maks2(11,10), maks2(12,15));
console.log(veci);



// bez ugrajdenih funkcija
function max4(a, b, c, d) {
    let m1 = maks2(a, b); // m1 - uvek vraca broj ili a ili b
    let m2= maks2(c, d);
    if( m1 >= m2) {
        return m1;
    } else {
        return m2;
    }
}

console.log(max4(4, 5, 6, 12));

function max4DN(a, b, c, d) {
    return maks(maks(a, b), maks(c, d));
}


function max4TN (a, b, c, d) {
    let m1 = makas2(a, b); // max od a, b
    let m2 = makas2(m1, c); // max od a, b ,c
    let m3 = makas2(m2, d); // max od a, b ,c, d
    return m3;
}


// 5.
// Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.

function image(adress) {
    document.body.innerHTML += `<img src="${adress}" >`;
}

image("img/1.jpg");
image("img/2.jpg");
image("img/3.jpg");

// drugi nacin

// let slika = document.getElementById("slika");
// function image2(path) {
//     slika.src = path;
// }

// image2("img/1.jpg");
// image2("img/2.jpg");
// image2("img/3.jpg");


// predavac nacin

function dodajSliku(putanja) {
    document.body.innerHTML += `<img src="${putanja}" >`;
}

// 6.
// Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function changeColor(color) {
    document.body.innerHTML += `<p style="color: ${color}">Lorem</p>`;
}

changeColor("red");


// drugi nacin
let p = document.getElementById("para");

function changeColor2(color) {
    p.style.color = color;
}

changeColor2("blue");

// 1.
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 


function pozdrav(ime, prezime) {
    console.log(`Zdravo ${ime} ${prezime}`);
}

pozdrav("King", "Ragnar");


// 2.
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(a, b) {
    let rez = a + b;
    console.log(rez);
}

zbir(5, 12);



// 7.
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
    if (n % 7 == 0 ) {
        console.log("Nedelja");
    } else if (n % 7 == 1) {
        console.log("Ponedeljak");
    } else if (n % 7 == 2) {
        console.log("Utorak");
    } else if (n % 7 == 3) {
        console.log("Sreda");
    } else if (n % 7 == 4) {
        console.log("Cetvrtak");
    } else if (n % 7 == 5) {
        console.log("Petak");
    } else if (n % 7 == 6) {
        console.log("Subota");
    }
}

sedmiDan(8);


// 8.
// Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n , m) {
    let brojac = 0
    for(let i = n; i <= m; i++) {
        if (i % 3 == 0 ) {
            console.log(i);
            brojac++;
            
        }
    }
    return brojac;
}

console.log(deljivSaTri(1, 40));

// 9.
// Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
    let sum = 0
    for(let i = n; i <= m; i++) {
        sum = sum + i;
    }
    return sum;
}
let zadatak9 = sumiraj(1, 5);
console.log(zadatak9);



// 10.
// Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    let proizvod = 1
    for(let i = n; i <= m; i++) {
        proizvod = proizvod * i;
    }
    return proizvod;
}
console.log(mnozi(1, 5));

// 11.
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina(n,m) {
    let brojac = 0;
    let sum = 0;
    for(let i = n; i <=m; i++) {
            sum = sum + i;
            brojac++;
    }
    let arsr = sum / brojac;
    return arsr;
}

let zadatak11 = aritmetickaSredina(1, 6);
console.log(zadatak11);


// 12.
// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina2(n, m) {
    let brojac = 0;
    let sum = 0;
    for(let i = n; i <=m; i++) {
        if(i % 10 == 3) {
            sum = sum + i;
            brojac++;
        }
    }
    let arsr = sum / brojac;
    return arsr;
}

let sredina = aritmetickaSredina2(1, 50);

console.log(sredina);

// 13.
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function font(num) {
    if (num % 1 == 0) {
        document.body.innerHTML += `<p style="font-size:${num}px;">Neki tekst tralala</p>`;
    }
}


font(50);
font(30);
font(15);

// 14.
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function petPutaIsto(recenica) {
    for(let i = 10; i <= 50; i++) {
        if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50)
        document.body.innerHTML += `<p style="font-size:${i}px; color: green;">${recenica} sa velicinom ${i}px</p>`;
    }
}


petPutaIsto("lorem ipsum");

function petPutaIsto2(recenica) {
    for(let i = 1; i <= 5; i++) {
        document.body.innerHTML += `<p style="font-size:${i}em; color: red;">${recenica} sa velicinom ${i}px</p>`;
}
}


petPutaIsto2("lorem ipsum");



// function petPuta(num) {
//     for(let i = 1; i <= 5; i++) {
//         document.body.innerHTML += `<p style="font-size:${num}px;">Ovo pet puta</p>`;
//     }
// }

// petPuta(14);


// // sa dva argumenta
// function petPuta2(num, recenica) {
//     for(let i = 1; i <= 5; i++) {
//         document.body.innerHTML += `<p style="font-size:${num}px;">${recenica}</p>`;
//     }
// }

// petPuta2(25, "Drugi nacin 5x");


