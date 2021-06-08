import {Pacijent} from "./classes/pacijent.js";

let pacijent1 = new Pacijent('Pacijent1', 195, 90);
let pacijent2 = new Pacijent('Pacijent2', 170, 110);
let pacijent3 = new Pacijent('Pacijent3', 180, 62);

// 1. Kreirati niz od barem tri pacijenta.
let arrPacijenti = [pacijent1, pacijent2, pacijent3];

// 2. Ispisati podatke o pacijentu sa najmanjom težinom.
let najmanjaTezina = (niz) => {
    let min = niz[0].tezina;
    let pacijent = niz[0];
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].tezina < min) {
            min = niz[i].tezina;
            pacijent = niz[i];
        }
    }
    pacijent.stampaj();
}

najmanjaTezina(arrPacijenti);

// 3. Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let najveciBmi = (niz) => {
    let max = niz[0].bmi();
    let pacijent = niz[0];
    for (let i = 0; i < niz.length; i++) {
        console.log(niz[i].bmi());
        if (niz[i].bmi() > max) {
            max = niz[i].bmi();
            pacijent = niz[i];
        }
    }
    pacijent.stampaj();
}

najveciBmi(arrPacijenti);

// 4. Ispisati sve pacijente čije ime sadrži slovo A.
let imeSadrziA = (niz) => {
    niz.forEach(element => {
        if (element.ime.toLowerCase().includes('a')) {
            element.stampaj();
        }
    });
}

imeSadrziA(arrPacijenti);

// 5. Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = (niz) => {
    let sum = 0;
    niz.forEach(element => {
        sum += element.visina;
    });
    return sum / niz.length;
}

console.log(srednjaVisina(arrPacijenti));