class Knjiga {
    constructor(naslov, autor, godinaIzdanja, brojStrana, cena) {
        this.naslov = naslov;
        this.autor = autor;
        this.godinaIzdanja = godinaIzdanja;
        this.brojStrana = brojStrana;
        this.cena = cena;
    }

    // seteri
    set naslov(x) {
        this._naslov = x;
    }

    set autor(x) {
        this._autor = x;
    }

    set godinaIzdanja(x) {
        this._godinaIzdanja = x;
    }

    set brojStrana(x) {
        this._brojStrana = x;
    }

    set cena(x) {
        this._cena = x;
    }

    // geteri
    get naslov() { return this._naslov; }
    get autor() { return this._autor; }
    get godinaIzdanja() { return this._godinaIzdanja; }
    get brojStrana() { return this._brojStrana; }
    get cena() { return this._cena; }

    // metode
    stampaj() {
        console.log(`Naslov: ${this.naslov}, Autor: ${this.autor}, Godina izdanja: ${this.godinaIzdanja}, Broj strana ${this.brojStrana}, Cena: ${this.cena}`);
    }

    obimna() {
        let brStrana = this.brojStrana;
        if (brStrana > 600) {
            return true;
        } else {
            return false;
        }
    }

    skupa() {
        let cena = this.cena;
        if (cena > 8000) {
            return true;
        } else {
            return false;
        }
    }

    dugackoIme() {
        let nameLength = this.autor.length;
        if (nameLength > 18) {
            return true;
        } else {
            return false;
        }
    }
}

// let knjiga1 = new Knjiga('Prva', "Prvi autor", 1842, 100, 2000);
// knjiga1.brojStrana = 605;
// knjiga1.cena = 8500;
// knjiga1.autor = 'aaaaaaaaaaaaaaaa';
// knjiga1.stampaj();
// console.log(knjiga1.obimna());
// console.log(knjiga1.skupa());
// console.log(knjiga1.dugackoIme());

let knjiga1 = new Knjiga('Prva', "Prvi autorrrrrrrrrrrrrrrrrr", 1820, 700, 6000);
let knjiga2 = new Knjiga('Druga', "Drugi autor", 1945, 550, 8500);
let knjiga3 = new Knjiga('Treca', "Treci autor", 2005, 200, 2000);
let knjiga4 = new Knjiga('Cetvrta', "Cetvrti autor", 2005, 750, 9200);

let knjige = [knjiga1, knjiga2, knjiga3, knjiga4];
// 1. Ispisati sve autore kojima je ime dugačko
knjige.forEach(knjiga => {
    if (knjiga.dugackoIme() == true) {
        console.log(knjiga.autor);
    }
});


// 2. Ispisati sve one knjige koje su istovremeno i skupe i obimne
knjige.forEach(knjiga => {
    if (knjiga.obimna() == true && knjiga.skupa() == true) {
        console.log(knjiga.naslov);
    }
});