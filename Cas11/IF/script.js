let a = 70;
let b = 10;
if(a < b){
    console.log('true mi vraca');
}

console.log("If je zavrsen");


let x = 15;
let y = 15;

if(x == y){
    // console.log('Brojevi x = '+ x +' i y = ' + y +' su jednaki');
    console.log(`Brojevi x = ${x} i y = ${y} su jednaki`); // lakse
}

let x1 = '15';

// == poredi samo po vrednosti
if(x == x1){ // koristiti === da se ne bi desilo da je string isti kao broj u ovom slucaju
    console.log(`Brojevi x= ${x} i x1 = ${x1} imaju istu vrednost`); 
}

// === poredi po tipu i po vrednosti 
if(x === x1){ // koristiti === da se ne bi desilo da je string isti kao broj u ovom slucaju
    console.log(`Brojevi x= ${x} i x1 = ${x1} imaju isti tip i istu vrednost`); //tip int, string, bool
    //x i x1 imaju isto vrednost to je 15, medjutim nemaju isti tip. x je ti[a number, dok je x1 tipa string.
}

// if else


