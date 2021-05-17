// U nizu strinogva ispisati sve elemente koji imaju:
// maksimalnnu duzinu
// minimalnu duzinu

let imena = ['Stefan', 'Nikola', 'Djordje', 'Milijana', 'Ana', 'Nenad', 'Vuk', 'Vladimir'];

let maxDuzinaNiza = (niz) => {
    let maxDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length > maxDuzina) {
            maxDuzina = elem.length;
        }
    });
    return maxDuzina;
}

console.log(maxDuzinaNiza(imena));

// Nepotrebno
// let ispisStringMaxDuzina = (niz) => {
//     let md = (maxDuzinaNiza(niz)); // prvo da pozovemo prethodnu funkciju koja isitue koji je duzi
//     niz.forEach(elem => {
//         if (elem.length == md) {
//             console.log(elem);
//         }
//     });
// }

// callback funkcijom odredjujemo vrednost md
let ispisStringSvojstvo = (niz, svojstvo) => {
    let md = svojstvo(niz);
    niz.forEach(elem => {
        if (elem.length == md) {
            console.log(elem);
        }
    });
}

let minDuzinaNiza = niz => {
    let minDuzina = niz[0].length;
    niz.forEach(elem => {
        if (elem.length < minDuzina) {
            minDuzina = elem.length;
        }
    });
    return minDuzina;
}

console.log(minDuzinaNiza(imena));


// Bespotrebno
// let ispisStringMinDuzina = niz => {
//     let md = minDuzinaNiza(niz);
//     niz.forEach(elem => {
//         if (elem.length == md) {
//             console.log(elem);
//         }
//     });
// }

// ispisStringMinDuzina(imena);

ispisStringSvojstvo(imena,maxDuzinaNiza); // maxDuzinaNIza je callback funkcija
ispisStringSvojstvo(imena, minDuzinaNiza);// minDuzinaNIza je callback funkcija



// 24. Zadatak
let zad24a = (a, b) => {
    let n = a.length; // isto ko let n = b.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    return c;
}

let zad24b = (a, b) => {
    let n = a.length;
    c =[];
    for (let i = 0; i < n; i++) {
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
    }
    return c;
}


let zad24c = (a, b) => {
    let n = a.length;
    let c = [];
    let j = 0; // ide po nizu C;
    for (let i = 0; i < n; i++) {
        c[j++] = a[i]; // dodamo a[i] pa onda nakon toga uvecamo za 1 npr ovde je 0
        c[j++] = b[i]; // ovde je j = 1 i u sledecoj iteraciji postaje 2 zbog j++
    }
    return c;
}


// ovo ne radi, rezultat kao string
// let zad24d = (a, b) => {
//     let n = a.length;
//     let c = [];
//     for (let i = 0; i < n; i++) {
//         c+= a[i];        
//         c+= b[i];        
//     }
//     return c;
// }


let zad25 = (a, b) => {
    let n = a.length;
    let c = [];
    for (let i = 0; i < n; i++) {
        c[i] = a[i] * b[i];
    }
    return c;
}

let zad26 = a => {
    let n = a.length; // n je paran broj
    let b = [];
    for (let i = 0; i < n/2; i++) {
        b[i] = (a[i] + a[n - 1 - i]) / 2;        
    }
    return b;
}



let a = [1, 2, 3, 4];
let b = [1, 2, 3, 4];
console.log(zad24a(a,b));
console.log(zad24b(a,b));
console.log(zad24c(a,b));
// console.log(zad24d(a,b));
console.log(zad25(a,b));
a = [1, 2, 3, 4, 5, 6];
console.log(zad26(a));




