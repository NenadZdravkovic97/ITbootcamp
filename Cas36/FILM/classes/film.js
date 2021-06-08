export class Film {
    constructor(naslov, reziser, godinaIzdanja, ocene) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
        this.ocene = ocene;
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

    set ocene(x) {
        this._ocene = x;
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

    get ocene() {
        return this._ocene;
    }

    // metode
    stampaj() {
        console.log(this.naslov);
    }

    // Napraviti metod prosek koji vraća prosečnu ocenu 
    prosek() {
        let oceneArr = this.ocene;
        let sum = 0;
        oceneArr.forEach(ocena => {
            sum += ocena;
        });
        return sum / oceneArr.length;
    }

    // metoda vek
    vekFilma() {
        return Math.ceil(this.godinaIzdanja / 100);
    }
}

