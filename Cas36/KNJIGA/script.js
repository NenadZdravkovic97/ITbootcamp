import {Knjiga} from "./modules/knjiga.js";

// let knjiga1 = new Knjiga("naslov1", "autor1", 2004, 714, 8500);
// knjiga1.stampaj();
// console.log(knjiga1.obimna());
// console.log(knjiga1.skupa());
// console.log(knjiga1.dugackoIme());
let knjiga1 = new Knjiga("Bajke", "Hans Hristijan ANdersen", 2004, 714, 500);
let knjiga2 = new Knjiga("Hajdi", "Johana Spiri", 1994, 304, 600);
let knjiga3 = new Knjiga("Orlovi rano lete", "Branko Copic", 2020, 186, 400);
let arrKnjige = [knjiga1, knjiga2, knjiga3];
// Ispis svih podataka iz niza arrKnjige

// Prvi nacin
arrKnjige.forEach(knjiga => {
    knjiga.stampaj()
});

// Drugi nacin
// for (let i = 0; i < arrKnjige.length; i++) {
//     arrKnjige[i].stampaj();
// }




// Napraviti funkicju kojoj se prosleđuje niz knjiga a ona određuje:

//  ukupnaCena - Koliko ukupno koštaju sve knjge u nizu knjiga
let ukupnaCena = (niz) => {
    let suma = 0;
    niz.forEach(k => {
        suma += k.cena; // k.cena je geter i pozivam ga bez ()
    });
    return suma;
}

console.log(ukupnaCena(arrKnjige));

//  prosecnaCena - Kolika je prosečna cena knjige
let prosecnaCena = (niz) => {
    let ukupna = ukupnaCena(niz);
    let brKnjiga = niz.length;
    return ukupna / brKnjiga;
}

console.log(prosecnaCena(arrKnjige));

//  prosecnaStranica - Kolika je prosečna cena stranice knjige
let prosecnaStranica = (niz) => {
    let ukupna = ukupnaCena(niz);
    let ukupnoStranica = 0;
    niz.forEach(k => {
        ukupnoStranica += k.brojStrana;
    });
    return ukupna / ukupnoStranica;
}

console.log(prosecnaStranica(arrKnjige));
