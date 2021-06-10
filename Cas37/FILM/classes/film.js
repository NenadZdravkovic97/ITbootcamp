export class Film {
    constructor(naslov, reziser, godinaIzdanja, ocene) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
        this.ocene = ocene;
    }
    

    // seteri
    set naslov(naslov){
        this._naslov = naslov;
    } 

    set reziser(reziser) {
        this._reziser = reziser;
    }

    set godinaIzdanja(godina) {
        if (godina > 1800) {
            this._godinaIzdanja = godina;
        } else {
            alert('godina manja od 1800')
        }
    }

    set ocene(ocene) {
        this._ocene = ocene;
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
        console.log(`Naslov: ${this.naslov}, Godina izdanja: ${this.godinaIzdanja}, ocene: ${this.ocene}`);
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

    // najmanja ocena
    najmanjaOcena() {
        let min = this.ocene[0];
        for (let i = 0; i < this.ocene.length; i++) {
            if (this.ocene[i] < min) {
                min = this.ocene[i];
            }
        }
        return min;
    }
}

