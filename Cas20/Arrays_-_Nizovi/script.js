let voce = ["jabuka", "kruska", "banana", "kupuna", "ananas", "ribizla"];
console.log(voce);
console.log(voce[2]);

voce[2] = "jagoda";
console.log(voce);


//ispis elemenata niza
// console.log(voce[0], voce[1], voce[2]);

// ispis elementa niza koriscenjem petlje
for(let i = 0; i < voce.length ; i++) {
    console.log(voce[i]);
}

// voce[3] = "Ananas"; ne savetuje se ovakvo dodvanje
// console.log(voce);

console.log(voce.length);

voce = ["kajsija", "dunja", "visnja"];
console.log(voce);

const povrce = ["tikvica", "kormpir", "grasak"];
console.log(povrce);
povrce[0] = "tikva"; // mogu mda menjam pojedine elemente kod const
console.log(povrce);

// povrce = ["grasak", "pasulj", "krastavvac"]; ne mogu menjati const

let razno = [3, -15.5, false, true, "tralal", ["a", "b", "c"]];
console.log(razno);

// 2.
// Odrediti zbir elemenata celobrojnog niza.
let  brojevi = [60, 220, 365, 440, 515];

let suma = 0
for(let i = 0; i < brojevi.length; i++) {
    suma += brojevi[i];
    // console.log(brojevi[i]);
}

console.log(suma);

// 3.
// Odrediti proizvod elemenata celobrojnog niza.


let p = 1
for(let i = 0; i < brojevi.length; i++) {
    p *= brojevi[i];
    // console.log(brojevi[i]);
}

console.log(p);

// 4.
// Odrediti srednju vrednost elemenata celobrojnog niza.
let arsr = suma / brojevi.length;
console.log(arsr);

let aritemticka = (niz) => { // moze bez zagrada jer je 1 argument
    let sum = 0;
    let br = 0
    for(let i = 0; i < niz.length; i++) {
        sum += niz[i];
        br++;
    }
    return sum / br;
}

console.log(aritemticka([2, 3, 4, 5]));
console.log(aritemticka([-2, 13, -4, 5]));
console.log(aritemticka(brojevi));

// 5.
// Odrediti maksimalnu vrednost u celobrojnom nizu.

// brojevi = [60, 220, 365, 440, 515];
brojevi = [60, 220, 365, 180, 200, 365, 140, 365]
let maksVr = brojevi[0];

for (let i = 0; i < brojevi.length; i++) {
    if (maksVr < brojevi[i]) {
        maksVr = brojevi[i];
    }
}

console.log(maksVr);


// 7.
// Odrediti indeks maksimalnog elementa celobrojnog niza.

//1. nacin

let indeks = 0;
for (let i = 0; i < brojevi.length; i++) {
    if(maksVr == brojevi[i]) {
        indeks = i;
        console.log(indeks); // ispisuje sve indekse
        // break; // kad imamo break ispisuje prvi na koji je naisao a kad nemamo onda poslednji
    }
}
// console.log(indeks); ispisuje poslednji ili prvi indeks
console.log("DRUGI NACIN");
// 2. nacin 
brojevi = [60, 220, 365, 180, 200, 365, 140, 365]
let maksVrednost = brojevi[0]; //obavezno brojevi od 0, jer uzimamo prvi elemnt niza, nikako maksVrednost = 0!
let maksIndeks = 0; 
for (let i = 0; i < brojevi.length; i++) {
    if (maksVrednost <= brojevi[i]) { // <= se stavlja da bi ispisalo indeks poslednjeg broja
        maksVrednost = brojevi[i];
        maksIndeks = i;
    }


}

console.log(maksVrednost);
console.log(maksIndeks);