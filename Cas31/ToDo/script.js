// DOM
let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let inputNoviZadatak = document.querySelector('#unesi');
// let btnDodaj = document.querySelector('#dodaj');
let radioDodajNaPocetak = document.querySelector('#dodajNaPocetak'); 


// 1. Nacin
// Kada dodamo novi LI nece raditi jer taj novi LI nece imati event listener koji je vezan na njega
// liZadaci.forEach(li => {
//     li.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });

// 2. NACIN
ulZadaci.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        e.target.remove();
    }
});

inputNoviZadatak.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        let noviZadatak = inputNoviZadatak.value;
        if (noviZadatak == "" || noviZadatak == null) {
            alert('Morate uneti novi zadatak');
        } else {
            let liNoviZadatak = document.createElement('li');
            liNoviZadatak.textContent = noviZadatak;
            if (radioDodajNaPocetak.checked == true) {
                ulZadaci.prepend(liNoviZadatak);
            } else {
                ulZadaci.appendChild(liNoviZadatak);
            }
            
            inputNoviZadatak.value = '';
        }
    }
});

