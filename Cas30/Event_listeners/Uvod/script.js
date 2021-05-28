// Postupak dodavanja click eventa:
// 1. Dohvatiti dugme 
let btn = document.querySelector('button');

// 2. Dodati event lsitener na zeljeni element (on aktivno slusa sve sto se dogadja nad tim elementom)
// 3. btn.addEvenetListener('naziv eventa', funkcija koja se realizuje kada se aktivira);
btn.addEventListener('click', () => {
    console.log('Jednostruki klik');
});

///////////////////

let dupliKlik = document.querySelector('#dupli_klik');

dupliKlik.addEventListener('dblclick', () => {
    console.log('Dupli klik');
});



// 2. Nacin dodavanj EVENTA
// ovo necemo koristuiti jer moramo da zovemo funkciju u html-u
let klikni = () => {
    console.log('kliknuto');
}


///////////////////

// 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.







