const request = new XMLHttpRequest();
/*
request.addEventListener('readystatechange', () => {
    if (request.readyState == 1) {
        console.log('Uspostavljena konekcija!');
    } else if (request.readyState == 2) {
        console.log('Poslat zahtev serveru!');
    } else if (request.readyState == 3) {
        console.log('Odgovor je u statusu preuzimanja!');

    } else if (request.readyState == 4) {
        console.log('Preuzet odgovor sa servera u potpunosti!');
        console.log(request.responseText);
    }
});
*/
// let odgovorJS;  asinhroini js ovo ne dozvoljava, ovo njedino mozemo da koristimo kad dobijemo odgovor od serverau scop-u
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        let odgovor = request.responseText; // odgovor je uvek string
        let odgovorJS = JSON.parse(odgovor); // string pretvara u JSON format
        console.log(odgovorJS);
    } else if(request.readyState === 4) {
        console.log("Nemoguce dobiti odgovor od servera");
    }
});

//uspostavljanje konekcije (0->1)
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/5');
// Slanje HTTP zahteva (1->2)
request.send(); 
// od 2 - 4 se menja u pozadini

// console.log('Nesto posle 1'); // zahtevi se samo ubacuju negde u nekim trenucima
// console.log('Nesto posle 2');
// console.log(odgovorJS); asinhroini js ovo ne dozvoljava