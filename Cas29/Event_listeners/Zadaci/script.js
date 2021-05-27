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
let writeName = document.querySelector('#writeName');
let ispis = document.querySelector('#ispis');

writeName.addEventListener('click', () => {
    let name = document.querySelector('#enterName').value;
    ispis.innerHTML = `Pozdrav ${name}`;
});



// 6.
// Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.

writeName.addEventListener('dblclick', () =>{
    alert('Dupli klik');
});




