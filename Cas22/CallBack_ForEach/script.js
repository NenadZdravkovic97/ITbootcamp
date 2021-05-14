// Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
// U konzoli,
// U nekom div elementu na stranici.
// Logika funkcije ispisa je ista – potrebna je petlja kojom se prolazi kroz sve elemente niza, samo je ispis elemenata drugačiji.
// Moguća ideja – napisati posebnu funkciju za željeni ispis (bilo na stranici ili u konzoli), a tu funkciju proslediti kao parametar funkciji koja iterira kroz sve elemente niza.

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById("container");
    // div.innerHTML = poruka; - ako se brise stari sadrzaj div-a
    div.innerHTML += poruka + "<br>"; // - ako hocemo da sacuvamo stari sadrzaj div-a
}

function ispisNiza(niz, cb) { 
    let poruka = "";
    for (let i = 0; i < niz.length; i++) {
        poruka += niz[i] + " ";
    }
    cb(poruka); // poziv callback funkcije
}


let a = [5, -9, 11, 9, 4];
let b = ["kasika", "noz", "jabuka", "noz", "medved"];

ispisNiza(a, ispisKonzola); // poziv fuinkcije ispisNiza
ispisNiza(a, ispisStranica); // poziv funkcije ispisNiza
ispisNiza(b, ispisKonzola); // poziv fuinkcije ispisNiza
ispisNiza(b, ispisStranica); // poziv fuinkcije ispisNiza

// pozivi funkcije preko anonimnih callback funkcioja, anopnimne su bez imena funkcije function(par) {} || par => {}

ispisNiza(a, par =>{
    console.log(par);
});

ispisNiza(a, function(par) {
    let div = document.getElementById("container");
    div.innerHTML += par + "<br>";
});

// forEach petlja

// retko se pravi funkcija pa se poziva
function ispis(poruka) {
    console.log(`Element niza je: ${poruka}`);
}

a.forEach(ispis);
// na primer niz a =[5, 9, 11, 9, 4]
// a.forEach poziva:
//ispis(5);
//ispis(-9);
//ispis(11);
//ispis(9);
//ispis(4);
// za svaki element a niza poziva funkciju ispis\
// forEach petlja poziva callback funkiju za svaki element niza, a prosledjuje taj element niza kao parametar callback funkcije
b.forEach(ispis);

// ovo je cesto i krace 
// ovo pisemo kad nam trebaju elementi
// a.forEach(e => {
//     console.log(`Element niza je: ${e}`);
// });

// ovako pisemo akd su nam potrebni i indexi

b.forEach((e , i) => {
    console.log(`Element ${e} sa indexom ${i}`);
});



//ispis elemenata niza sa parnim indeksom
b.forEach((e, i) => {
    if (i % 2 == 0) {
        console.log(`Element ${e} ima paran indeks ${i}`);
    }
});


// 2.
// Odrediti zbir elemenata celobrojnog niza.
let zbirNiza = niz => {
    let zbir = 0;
    niz.forEach(elem => {
        zbir += elem;
    });
    return zbir;
}

console.log(zbirNiza(a));

// ODREDITI SREDNJU VREDNOST ELEMENATA CELOBRJNOG NIZA
let srVrNiza = niz => {
    let srvr = 0;
    niz.forEach(elem => {
        srvr += elem;
    });
    srvr /= niz.length;
    return srvr;
}

console.log(srVrNiza(a));

// odrediti max vrednost u celobrjonom nizu
let maksNiz = niz => {
    let max = niz[0];
    niz.forEach(elem => {
        if (elem > max) {
            max = elem;
        }
    });
    return max;
}
let c = [15, 7, 7,15, 15, 0, 9, 15, 0, 2];
console.log(maksNiz(c));


/*
    Napisati funkciu koja vraca broj elemenata sa:
        -maksimalnom vrednoscu
        -minimalnom vrednoscu
*/


// let brojMaxNiz  = niz => {
//     let max = maksNiz[niz];
//     let broj = 0;
//     niz.forEach(elem => {
//         if(elem == max) {
//             broj++;
//         }
//     });
//     return broj;
// }

// console.log(brojMaxNiz(c));


// let brojMinNiz = niz => {
//     let min = minNiz(niz);
//     let broj = 0;
//     niz.forEach(elem => {
//         if(elem == min) {
//             broj++;
//         }
//     });
//     return broj;
// }

// console.log(brojMinNiz(c));

let brojSvojstvoNiz = (niz, svojstvo) => { // svojstvo je callback funkcija
    let s = svojstvo(niz);
    let broj = 0;
    niz.forEach(elem => {
        if (elem == s) {
            broj++;
        }
    });
    return broj;
}
c = [1, 2, 5, 5, 5, 4, 3];
console.log(`Broj elemenata sa maksimalno mvrednoscu jednak je: ${brojSvojstvoNiz(c, maksNiz)}`);
// console.log(`Broj elemenata sa minimalnom mvrednoscu jednak je: ${brojSvojstvoNiz(c, minNiz)}`);