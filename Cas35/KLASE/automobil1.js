class Auto {
    constructor(b, m, k) {
        // pozivamo setere
        this.boja = b; // this.boja je seter, seter pozivamo kao promenljivu bez navodjenja zagrada iako je metod
        this.marka = m;
        this.krov = k;
    }
    
    // Seteri - postavljaju vrednost poljima
    // Pravimo seter za svako polje
    set boja(x) {
        this._boja = x;
    } 
    set marka(x) {
        this._marka = x;
    }
    set krov(x) {
        if (x === true || x === false) {
            this._krov = x;
        } else {
            this._krov == true;
        }
            
    }

    // Geteri - Vracaju vrednost polja
    get boja() {
        return this._boja;
    }
    get marka() {
        return this._marka;
    }
    get krov() {
        return this._krov;
    }
}

let auto1 = new Auto("red", "Fiat", true);
console.log(auto1);

// ovako ne treba
// auto1._boja = "white";
// console.log(auto1._boja);


// Ovako DA
//  Pristup poljima iskljucivo preko getera i setera
console.log(auto1.boja); // Geteru pristupamo ali bez zagrada
auto1.boja = "white"; // pristupam seteru opet bez zagrada
console.log(auto1.boja); // Geteru pristupamo ali bez zagrada

