// Dohvatiti prvi paragraf na stranici.
let prviP = document.querySelector('p');
console.log(prviP);

// Dohvatiti prvi div tag sa klasom „error“.
let prviDiv = document.querySelector('.error');
console.log(prviDiv);

// Dohvatiti poslednji red u tabeli.
let poslednjiRed = document.querySelector('tr:last-child');
console.log(poslednjiRed);

// Dohvatiti sve linkove na stranici.
let sviLinkovi = document.getElementsByTagName('a');
console.log(sviLinkovi);

let sviLinkovi2 = document.querySelectorAll('a');
console.log(sviLinkovi2);


// Dohvatiti sve slike na stranici.
let sveSlike = document.querySelectorAll('img');
console.log(sveSlike);

// Selektovati sve paragrafe i dodati im tekst "Vazno!!!!"

let sviP = document.querySelectorAll('p');
sviP.forEach(par => {
    par.innerHTML += " VAZNO!";
});

// Svim divovima sa klasom 'error' dodati po naslov najvece velicine sa tekstom 'Greska!

let sviError = document.querySelectorAll('div.error');
sviError.forEach(element => {
    element.innerHTML = `<h1>Greska!</h1>`+ element.innerHTML;
})


// neka je n broj paragrafa u datom u dokumentu. Usvakom i-tom dodati broj i2, za svako i= 1, 2, .. n

for (let i = 0; i < sviP.length; i++) {
    sviP[i].innerHTML += (i+1)** 2;
}

// Svim slikama dodati alt tekst

let allImg = document.querySelectorAll('img');
allImg.forEach(elem => {
    elem.alt += 'Alternativni tekst';
});

// svim paragrafima postaviti attribut style tako da budu obojeni lljubicastom bojom
sviP.forEach(element => {
    element.style.color = 'purple';
});

// svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju

for (let i = 0; i < sviP.length; i++) {
    if (i % 2 == 0) {
        sviP[i].style.color = 'green';
    } else {
        sviP[i].style.color = 'red';
    }
}

// Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
// Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta.
let allLinks = document.querySelectorAll('a');
for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].style.padding = '5px';
    allLinks[i].style.fontSize = '18px';
    allLinks[i].style.textDecoration = 'none';
    if (i % 2 == 0) {
        allLinks[i].style.backgroundColor = 'green';
        allLinks[i].style.color = 'purple';
    } else {
        allLinks[i].style.backgroundColor = 'blue';
        allLinks[i].style.color = 'white';
    }
}

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
allImg.forEach(img => {
    if (img.src.endsWith('.png')) {
        img.style.border = "2px solid red";
    }
});

//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
allLinks.forEach(link => {
    if (link.target == "_blank") {
        link.target = "_top";
    } else {
        link.target = "_blank";
    }
});


// Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:

// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
// U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.

document.body.innerHTML += `<br><br><br><br><br>`
let imena = ['Milica', 'Rade', 'Svarog'];


// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.
imena.forEach(ime => {
    document.body.innerHTML += `<a class="zadatak" href="https://www.google.com">${ime}</a>`;
    let links = document.querySelectorAll('a.zadatak');
        links.forEach(link => {
            if (ime.startsWith("S") == true) {
                link.target = '_blank';
            } 
        });
    });






