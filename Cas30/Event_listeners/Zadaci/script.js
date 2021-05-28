// 1. 
// Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac = document.querySelector('#brojac');
let br = 1;
btnBrojac.addEventListener('click', () => {
    console.log(br);
    br++;
});


// 2.
// Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli
let btnBrojac1 = document.getElementById('brojac1');
let pIspisBrojaca1 = document.getElementById('ispisBrojaca1');

// Kada definisemo br1 ispisemo njegovu vrednost na ekranu
let br1 = 0;
pIspisBrojaca1.innerHTML = br1; 

btnBrojac1.addEventListener('click', () => {
    br1++;
    // pIspisBrojaca1.innerHTML = `${br1} `;
    // Svaki put kad kliknemo, ispisemo novu vrednost brojaca
    pIspisBrojaca1.innerHTML = br1;
});


// 3.
// Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.


//4.
// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.


let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let broj = document.querySelector('#broj');

let brojac = 0;
broj.innerHTML = brojac;

minus.addEventListener('click', () =>{
    broj.style.color = "black";
    brojac--;
    if (brojac < 0) {
        brojac = 0;
        broj.style.color = "blue";
    } 
    broj.innerHTML = brojac;
});


plus.addEventListener('click', () =>{
    broj.style.color = "black";
    brojac++;
    broj.innerHTML = brojac;
});



// 5. 
// Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

//DOM
let btnPosalji = document.getElementById('posalji');
let inputIme = document.getElementById('ime');
let prikaziIme = document.getElementById('prikaziIme');
btnPosalji.addEventListener('click', () => {
    let upisanoIme = inputIme.value;
    prikaziIme.innerHTML += `Zdravo ${upisanoIme}`;
});

// 6.
// Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.
btnPosalji.addEventListener('dblclick', ()=> {
    let upisanoIme = inputIme.value;
    alert(`Hello ${upisanoIme}`);
});



////////////// Drugi nacin

let inputPrezime = document.querySelector('#prezime');
let btnPosaljiPrezime = document.querySelector('#posaljiPrezime');
let ispisiPrezime = document.querySelector('#prikaziPrezime');

btnPosaljiPrezime.addEventListener('click', (e) => {
    e.preventDefault();
    ispisiPrezime.innerHTML += `Prezime je ${inputPrezime.value}`;
    inputPrezime.value = '';
});


// // 7.

let inputKvadriraj = document.querySelector('#kvadrirajBroj');
let kvadrirajBtn = document.querySelector('#kvadrirajBtn');
let ispisKvadriraj = document.querySelector('#ispisKvadriraj');


let inputPrepolovi = document.querySelector('#prepoloviBroj');
let prepoloviBtn = document.querySelector('#prepoloviBtn');
let ispisPrepolovi = document.querySelector('#ispisPrepolovi');


let inputPovrsinaKruga = document.querySelector('#povrsinaKruga');
let povrsinaBtn = document.querySelector('#povrsinaBtn');
let ispisPovrsina = document.querySelector('#ispisPovrsina');


kvadrirajBtn.addEventListener('click', () => {
    let num = inputKvadriraj.value**2;
    ispisKvadriraj.innerHTML = num;
});

prepoloviBtn.addEventListener('click', () => {
    let num = inputPrepolovi.value /2;
    ispisPrepolovi.innerHTML = num;
});

povrsinaBtn.addEventListener('click', () => {
    let num = inputPovrsinaKruga.value
    let r = num / 2;
    let p = Math.PI * r**2;
    p = p.toFixed(2);
    ispisPovrsina.innerHTML = p;
});

// PRIMER
let forma = document.querySelector('#forma');
let inputJelo = document.querySelector('#jelo');
let inputPice = document.querySelector('#pice');
let pIspis = document.querySelector('#ispis');
forma.addEventListener('submit', (e) => {
    e.preventDefault();
    pIspis.innerHTML = 
    `
    <ul>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
        <li>Omiljeno pice: ${inputPice.value}</li>
    </ul>
    `;
    forma.reset(); // resetuje sva polja u formi
});



