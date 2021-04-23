let stepeni = -10;

if(stepeni < 0) {
    console.log("Ispod 0 stepeni");
}

if (stepeni < 10) {
    console.log("Ispod 10 stepeni");
}

if (stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i vise stepeni");
}


////////////////////////
console.log("elseIF")
if(stepeni < 0) {
    console.log("Ispod 0 stepeni");
}
else if (stepeni < 10) {
    console.log("Ispod 10 stepeni");
}
else if (stepeni < 20) {
    console.log("Ispod 20 stepeni");
}
else {
    console.log("20 i vise stepeni");
}


////////////////
//pazljivo kad se ide od vecih ka manjim vrednostima
let poeni = 60;

if(poeni > 100) {
    console.log("Poeni nemogu uzeti vrednost vecu od 100");
}
else if(poeni >= 91) {
    console.log("Ocena 10");
}
else if(poeni >= 81) {
    console.log("Ocena 9")
}
else if(poeni >= 71) {
    console.log("Ocena 8")
}
else if(poeni >= 61) {
    console.log("Ocena 7")
}
else if(poeni >= 51) {
    console.log("Ocena 6")
}
else {
    console.log("pao");
}

// Ugnjezdeno granjanje 
console.log("Gnezdo");
let pol = "m";
let god = 15;

if (pol == "z") {
    // console.log("Osoba zenskog pola");
    if(god >= 18) {
        console.log("Osoba je zenskog pola i punoletna je");
    }
    else {
        console.log("Osoba zenskog pola i maloletna je");
    }
}
else {
    // console.log("Osoba muskog pola");
    if(god >= 18) {
        console.log("Osoba je muskog pola i punoletna je");
    }
    else {
        console.log("Osoba je muskog pola maloletna je");
    }
}


let broj1 = 5;
let broj2 = 3;

if( broj1 % broj2 == 0) {
    console.log(`${broj1} je deljiv brojem ${broj2}`);
} 
else {
    console.log(`${broj1} nijee deljiv brojem ${broj2}`)
}