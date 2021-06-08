class Pacijent {
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

let pacijent1 = new Pacijent('Wilson', 180, 75);
let pacijent2 = new Pacijent('Trska', 195, 60);
let pacijent3 = new Pacijent('Mali', 165, 90);

pacijent1.ime = 'novo';
pacijent1.visina = 190;
pacijent1.tezina = 540;
pacijent1.stampaj();
pacijent2.stampaj();
pacijent3.stampaj();
console.log(pacijent1.bmi());
console.log(pacijent2.bmi());
console.log(pacijent3.bmi());
console.log(pacijent1.kritican());
console.log(pacijent2.kritican());
console.log(pacijent3.kritican());

