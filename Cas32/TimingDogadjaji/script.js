/*
function test () {
    console.log('pozvana je funkcija test');
    // fjaSaParametroon(2, 4)
}

// function fjaSaParametroom (paramtera1, parametar2) {
//     console.log(`Nesto radim sa parametrima`);
// }

console.log('Prva linija koda');
console.log('Druga linija koda');
// setTimeout(test, 3000); // test kao call back funkcija, navodimo koja funkcija ce da se pozove
// setTimeout poziva test funkciju nakon 3000ms
// ako su nam potrebni parametri moramo da iammo pomocnu funkciju koja je bez parametara
setTimeout(test, 3000);
console.log('Cetvrta linija koda');
console.log('Cetvrta peta koda');
*/

// cb f-ja se proslejduje ko parametar
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
// jeidna razlika izmejdu anonimne i arrow funkcije je rec 'THIS', u arrow funkciji THIS nema znacenje za objekat u kojem se nalazi, kad kazemo u () => this onda se mislili na this(window), u metodama nikad ne treba da koristimo () => funkcije
btn1.addEventListener('click', function() { //anonimna callback f-ja 
    console.log(this);
}); 

btn2.addEventListener('click', () => {// arrow callback f-ja
    console.log(this);
}); 


// ovom pristupu se najredje pristupa, btn1 i btn3 su slicni 
btn3.addEventListener('click', klik); //imenovana callback f-ja


// ako imamo jos jedno dugme ako ocemo na jos nekom dugmetu da je pozovemo
function klik () { // imenovana f-ja
    console.log(this);
}

///////////////////////////////////////////////////////
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let divIspis = document.querySelector('#ispis');
let clock = null;

b1.addEventListener('click', () => {
    if (clock === null) {
        clock = setTimeout(function () {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekundi = datum.getSeconds();
            divIspis.innerHTML += `${sati}:${minuti}:${sekundi} <br>`;
            clock = null;
        }, 1000);
    }
});
        

b2.addEventListener('click', () =>{
    clearTimeout(clock);
    clock = null;
});

///////////////////////////////////////////////////

// let clockInterval = null;

// clockInterval = setInterval(() => {
//     console.log('Poziv callback funkcije');
// },1000);

// setTimeout(() => {
//     clearInterval(clockInterval);
// }, 5000);


let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let divIspis2 = document.querySelector('#ispis2');
let clockPeriod = null;

// Svaki klik uvodi novi casovnik, npr mozemo 3 4 casovnika da kucamo, zbog tog probelma uivodimo clockPeriod
b3.addEventListener('click', () =>{
    if (clockPeriod === null) {
        clockPeriod = setInterval(()=>{
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            divIspis2.innerHTML = `${sati}:${minuti}:${sekunde} <br>`;
        } , 1000);
    }
});

b4.addEventListener('click', () => {
    clearInterval(clockPeriod);
    clockPeriod = null;
});









