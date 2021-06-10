import {Film} from "./classes/film.js";
let film1 = new Film('Naslov1', 'Reziser1', 2006, [5, 8, 4, 6, 7]);
let film2 = new Film('Naslov2', 'Reziser2', 1900, [10, 8, 9, 8]);
let film3 = new Film('Naslov3', 'Reziser3', 2008, [5, 3, 7, 8]);
let film4 = new Film('Naslov4', 'Reziser4', 1902, [5, 3, 7, 10, 6]);

// Kreirati niz od barem tri objekta klase Film
let arrFilmovi = [film1, film2, film3, film4];


// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (niz, vek) => {
    niz.forEach(element => {
        let vekFilma = element.vekFilma();
        if (vek === vekFilma) {
            element.stampaj();
        }
    });
}

vekFilmova(arrFilmovi, 21);

// Drugi nacin BEZ METODE 
// let vekFilmova = (niz, vek) => {
//     niz.forEach(f => {
//         if (f.godinaIzdanja > (vek - 1)*100 && f.godinaIzdanja <= vek*100 ) {
//             f.stampaj();
//         }
//     });
// }

// vekFilmova(arrFilmovi, 20);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = (niz) => {
    let sum = 0;
    let counter = 0;
    niz.forEach(element => {
        element.ocene.forEach(ocena => {
            sum+= ocena;
            counter++;
        });
        // counter += element.ocene.length; -> moze i ovako
    });
    return sum / counter;
}

console.log("prosecna ocena svih filmova = " + prosecnaOcena(arrFilmovi));


// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

// let najboljeOcenjeni = (niz) => {
//     let maksProsek = niz[0].prosek();
//     let film = niz[0];
//     for (let i = 0; i < niz.length; i++) {
//         if (niz[i].prosek() > maksProsek) {
//             film = niz[i];
//         }
//     }
//     return film;
// }

// console.log(najboljeOcenjeni(arrFilmovi));

//  Drugi nacin
let najboljeOcenjeni = (niz) => {
    let najbolji = niz[0]; // Cuva objekat - najbolji film
    niz.forEach(film => {
        if (film.prosek() > najbolji.prosek()) {
            najbolji = film;
        }
    });
    return najbolji;
}

console.log(najboljeOcenjeni(arrFilmovi));

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

// let osrednjiFilm = (niz) => {
//     let prosek = prosecnaOcena(niz);
//     let trenutna = prosek - niz[0].prosek();
//     let film = niz[0]
//     for (let i = 0; i < niz.length; i++) {
//         let nova = Math.abs(prosek - niz[i].prosek())
//         if (nova < trenutna) {
//             trenutna = nova;
//             film = niz[i];
//         }
//     }
//     return film;
// }

// console.log(osrednjiFilm(arrFilmovi));

//  DRUGI NACIN

let osrednjiFilm = (niz) => {
    // pretpostavka da je prvi film (objekat) najblizi generalnom porseku
    let najbliziObj = niz[0];
    let prosecnaGlobal = prosecnaOcena(niz);
    let najblizaRazlika = Math.abs(najbliziObj.prosek() - prosecnaGlobal);

    niz.forEach(f => {
        // Koliko se tekuci film razlikuje od globalnog proseka
        let razlikaTekuceg =  Math.abs(f.prosek() - prosecnaGlobal);
        if (najblizaRazlika > razlikaTekuceg) {
            najblizaRazlika = razlikaTekuceg;
            najbliziObj = f;
        }
    });

    return najbliziObj;
}

console.log(osrednjiFilm(arrFilmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = (niz) => {
    let najbolji = najboljeOcenjeni(niz);
    return najbolji.najmanjaOcena();
}

console.log(najmanjaOcenaNajboljeg(arrFilmovi));

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

//  For petlja
// let najmanjaOcena = (niz) => {
//     let min = niz[0].najmanjaOcena();
//     for (let i = 0; i < niz.length; i++) {
//         for (let j = 0; j < niz[i].ocene.length; j++) {
//             if (niz[i].ocene[j] < min) {
//                 min = niz[i].najmanjaOcena();
//             }
//         }
//     } 
//     return min;
// }
// // najmanjaOcena(arrFilmovi);
// console.log(najmanjaOcena(arrFilmovi));

let najmanjaOcena = (niz) => {
    let min = niz[0].najmanjaOcena();
    niz.forEach(element => {
        if (element.najmanjaOcena() < min) {
            min = element.najmanjaOcena();
        }
    });
    return min;
}

console.log(najmanjaOcena(arrFilmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

let najcescaOcena = (niz) => {
    let arrOcena = [];
    niz.forEach(element => {
        element.ocene.forEach(ocena => {
            arrOcena.push(ocena);
        });
    });
    
    let count = {};
    let maxNum = arrOcena[0];
    for (let i = 0; i < arrOcena.length; i++) {
        let num = arrOcena[i];
        if (count[num] != undefined) {
            count[num]++;
        } else {
            count[num] = 1;
        }

        if (count[num] > count[maxNum]) {
            maxNum = num;
        }

    }
    return maxNum;
}
console.log(najcescaOcena(arrFilmovi));

// DRUGI NACIN - Djole
// let najcescaOcena = (niz) => {
//     let x = [];
//     let sveOcene = [];
//     niz.forEach(film => {
//         film.ocene.forEach(ocena => {
//             if (!(x.includes(ocena))) {
//                 x.push(ocena);
//             }
//             sveOcene.push(ocena);
//         });
//     });

//     let maxCounter = 0;
//     let najcescaOcena = undefined;
//     x.forEach(ocenaX => {
//         let counter = 0;
//         sveOcene.forEach(ocena => {
//             if (ocenaX == ocena) {
//                 counter++;
//             }
//         });
//         if (maxCounter < counter) {
//             maxCounter = counter;
//             najcescaOcena = ocenaX;
//         }
//     });
//     let obj = {
//         najcescaOcena: najcescaOcena,
//         counter: maxCounter
//     }
//     return obj;
// }
// console.log(najcescaOcena(arrFilmovi));

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
let iznadOcene = (ocena, niz) => {
    let arr = [];
    niz.forEach(element => {
        if (element.prosek() > ocena) {
            arr.push(element);
        }
    });
    return arr;
}

console.log(iznadOcene(6, arrFilmovi));


// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu
let novijiFilm = (niz) => {
    let max = niz[0]
    niz.forEach(element => {
        if (element.godinaIzdanja > max.godinaIzdanja) {
            max = element;
        }
    })
    return max;
}
// console.log(novijiFilm(arrFilmovi));

let iznadOceneNOviji = (ocena, niz) => {
    let noviji = novijiFilm(niz);
    let prosek = noviji.prosek();
    if (prosek > ocena) {
        noviji.stampaj();
        document.body.innerHTML +=`<h1>Naslov: ${noviji.naslov}, <br> Godina izdanja: ${noviji.godinaIzdanja}, <br> Ocene: ${noviji.ocene}</h1>`
    }
}

iznadOceneNOviji(4, arrFilmovi)