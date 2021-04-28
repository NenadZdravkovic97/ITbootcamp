let i;


for (i = 1; i <=5; i++) {
    console.log(`broj: ${i}`);
}

// console.log(`Vrednost promenljive ${i} je:`) // ne postoji promenljiva i, undefined

// SCOPE (OBLAST VAZENJA)
// let (oblast vazenja unutar bolka u kojem je deklarisana), let i samo vazi unutar for petlje a nikako van
// var (oblast vazenja unutar funkcije)
// let i; globalna promenljiva vazi za ceo js fajl
// var j; globalna promenljiva koja vazi za ceo js fajl
// if () {
//     let k; vazi u bloku, lokalna promenljiva koaj vazi samo unutar if-a
//     var m; // vazi van bloka, globalna promenljiva koja vazi za ceo js fajl
// }



// Ispisati parne brojeve od 1 do 20
//prvi nacin
for( i = 1; i <=20; i++) {
    if (i % 2 ==0) {
        console.log(`broj ${i} je paran`);
    }
}

// for(i = 1; (i <=20) && (i % 2 == 0); i++) { nece da radi nista jer vec drugi uslov nije zadovoljen
//     console.log(i);
// }

// drugi nacin
for (i = 2; i <= 20; i += 2) { //moze i = i + 2
    console.log(i);
}


// 9.
// Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

n = 8;
/*
for(i = 1; i <= n; i++) {
    if (i % 3 == 1) {
        document.body.innerHTML += `<img src="slike/1.jpg">`;
    } else if (i % 3 == 2) {
        document.body.innerHTML += `<img src="slike/2.jpg">`;
    } else {
        document.body.innerHTML += `<img src="slike/3.jpg">`;
    }
}
*/
for(i = 0; i < n; i++) {
    let k = i % 3; // k = 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2..... 
    document.body.innerHTML += `<img src="slike/${k+1}.jpg">`;
}


// 10.
// Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. *
// Prvi nacin
let proizvod11 = 1;
for(i = 20; i <= 100; i++) {
    if(i % 11 == 0) {
        proizvod11 *= i;
    }
}

console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je: ${proizvod11}`);

// drugi nacin
proizvod11 = 1;
for(i=22; i <= 100; i+=11) {
    proizvod11 *= 1;
}

console.log(`Proizvod brojeva od 20 do 100 deljivih sa 11 jednak je: ${proizvod11}`);