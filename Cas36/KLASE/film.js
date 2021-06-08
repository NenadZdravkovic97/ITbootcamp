class Film {
    constructor(naslov, reziser, godinaIzdanja) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
    }
    stampaj() {
        console.log(this.naslov);
    }

    // seteri
    set naslov(x){
        this._naslov = x;
    } 

    set reziser(x) {
        this._reziser = x;
    }

    set godinaIzdanja(x) {
        if (x > 1800) {
            this._godinaIzdanja = x;
        } else {
            alert('godina manja od 1800')
        }
    }

    //geteri
    get naslov() {
        return this._naslov;
    }

    get reziser() {
        return this._reziser;
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }
}


let film1 = new Film('Trala', 'Nesto', 1940);
let film2 = new Film('aaa', 'nesto drugo', 1950);
let film3 = new Film('bbb', 'trece', 1972);

film1.naslov = 'novo';
console.log(film1);
console.log(film2.reziser);

film3.stampaj();
film2.godinaIzdanja = "1850"
console.log(film2.godinaIzdanja);