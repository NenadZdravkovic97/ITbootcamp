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
    // na starnici su parni 2, 4, 6, parni paragrafi imaju neparan indeks na stranici, i onda trebamo (i+i) % 2
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
    if ((i+1) % 2 == 0) {
        allLinks[i].style.backgroundColor = 'green';
        allLinks[i].style.color = 'purple';
    } else {
        allLinks[i].style.backgroundColor = 'blue';
        allLinks[i].style.color = 'white';
    }
}

// Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju. 
// Moj nacin
// allImg.forEach(img => {
//     if (img.src.includes('.png')) {
//         img.style.border = "2px solid red";
//     }
// });

// Prvi nacin
// let slike = document.querySelectorAll('img');
// slike.forEach(slika => {
//     if (slika.src.includes(".png") || slika.src.includes('PNG')) {
//         slika.style.border = "2px solid red";
//     }
// });

// Drugi nacin
let slikePng = document.querySelectorAll('img[src*=".png"]'); //*= da li sadrzi
slikePng.forEach(slika => {
    slika.style.border = '2px solid red';
});




//Svakom linku na stranici promeniti target svojstvo na sledeći način: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost različita od _blank, ili uopšte nije bilo postavljeno, tada postaviti na _blank. 
// allLinks.forEach(link => {
//     if (link.target == "_blank") {
//         link.target = "_top";
//     } else {
//         link.target = "_blank";
//     }
// });



//////////////////
linkovi = document.querySelectorAll("a");
linkovi.forEach(link => {
    if (link.target === "_blank") {
        link.target = "_top";
    } else {
        link.target = "_blank";
    }
});




document.body.innerHTML += `<br><br><br><br><br>`


// Napraviti niz od najmanje tri imena. Proći nizom i imena ispisati:
let imena = ['Milica', 'Rade', 'Boja', 'Sara'];


// Svako u novom linku. Ako ime počinje na slovo „S“, link se otvara u novom tabu, a inače se otvara na istoj stranici.

// prvi nacin
// imena.forEach(ime => {
//     if (ime.startsWith('S')) {
//         document.body.innerHTML += `<a href="https://www.google.com" target="_blank">${ime}</a>`;
//     } else {
//         document.body.innerHTML += `<a href="https://www.google.com">${ime}</a>`;
//     }
// })

// drugi nacin
imena.forEach(ime => {
    document.body.innerHTML += `<a style="padding: 5px;" class='zadatak' href="https://www.google.com">${ime}</a>`;
    let links = document.querySelectorAll('.zadatak');
    links.forEach(link => {
        if (link.textContent.startsWith('S') == true) {
            link.target = '_blank';
        }
    })
});


// treci nacin
// imena.forEach(ime => {
//  if(ime.startsWith('S')
//     if (ime[0] == 'S') {
//         document.body.innerHTML += `<a href="https://www.google.com" target="_blank">${ime}</a>`;
//     } else {
//         document.body.innerHTML += `<a href="https://www.google.com">${ime}</a>`;
//     }
// });

        



// U listi kao stavke liste. Naizmenično stavke liste obojiti sa dve različite boje.
// prvi nacin
let lista = `<ul>`;
imena.forEach((ime, i) => {
    if (i % 2 == 0) {
        lista += `<li style="color:blue">${ime}</li>`;
    } else {
        lista += `<li style="color: red">${ime}</li>`;
    }
})
lista += `</ul>`;
document.body.innerHTML += lista;



// U jednoj koloni tabele. Postaviti okvir, marginu i pading ćelijama tabele.
let tabela = `<table class="tabela">`;
tabela += `<tr>`;
imena.forEach(ime => {
    tabela += `<td>${ime}</td>`
});
tabela += `</tr>`;
tabela += `</table>`;
document.body.innerHTML += tabela;

let tabelaStil = document.querySelectorAll(" table, tr, td");

tabelaStil.forEach(elem => {
    elem.setAttribute('style', 'border: 1px solid black; margin: 5px; padding: 15px')
})









