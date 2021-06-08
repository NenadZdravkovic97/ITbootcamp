import {Film} from "./classes/film.js";
let film1 = new Film('Naslov1', 'Reziser1', 2002, [5, 8, 4, 10, 7]);
let film2 = new Film('Naslov2', 'Reziser2', 1986, [10, 8, 9, 8]);
let film3 = new Film('Naslov3', 'Reziser3', 2014, [5, 3, 7]);

// Kreirati niz od barem tri objekta klase Film
let arrFilmovi = [film1, film2, film3];

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (niz, vek) => {
    niz.forEach(element => {
        let vekFilma = element.vekFilma();
        if (vekFilma === vek) {
            element.stampaj();
        }
    });
}

vekFilmova(arrFilmovi, 20);




