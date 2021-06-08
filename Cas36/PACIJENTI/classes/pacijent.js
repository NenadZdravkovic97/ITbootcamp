export class Pacijent {
    constructor(ime, visina, tezina) {
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }
    
    stampaj() {
        console.log(`Ime: ${this.ime} Visina: ${this.visina} Tezina: ${this.tezina}`);
    }
    
    bmi() {
        let bmi = (this.tezina/ this.visina/ this.visina) * 10000;
        return bmi;
    }

    kritican() {
        let bmi = this.bmi();
        if (bmi < 15 || bmi > 40) {
            return true;
        } else {
            return false;
        }
    }

    //seters
    set ime(x) {
        this._ime = x;
    }

    set visina(x) {
        if (x > 0 && x < 250) {
            this._visina = x;
        } else {
            alert('Unesi broj od 0 do 250');
        }
    }

    set tezina(x) {
        if (x > 0 && x < 550) {
            this._tezina = x;
        } else {
            alert('Unesi broj od 0 do 550');
        }
    }

    //geters
    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina;
    }

    get tezina() {
        return this._tezina;
    }
}

