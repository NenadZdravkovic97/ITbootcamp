class Auto {
    // Konstruktor je ugradjeni metod koji svaka klasa mora da poseduje da bi kreirala objekat
    constructor(b, m) {
        this._boja = b;
        this._marka = m;
    }

    sviraj() {
        console.log(`${this._marka} Beep! Beep!`);
    }
}

// Kreiranje novog objekta - Kada se novi objekat, prvo se poziva konstruktor klase, stoga za kreiranje objekta u zagradama j epotrebno proslediti vrednosti koje zelimo da postavimo u konstruktoru tj. koje konstruktor ocekuje
// let auto2 = new Auto(['red', 'orange', 'yellow'], "Opel");
// console.log(auto2);
// auto2.sviraj()

let auto1 = new Auto('plavi', 'mercedes');
console.log(auto1);
console.log(auto1._boja);
auto1.sviraj()

let auto2 = new Auto('white', 'Peugeot');
console.log(auto2._marka);

let auto3 = new Auto('blue', 'Toyota');
console.log(auto3._boja);

let automobili = [auto1, auto2, auto3];
console.log(automobili);

