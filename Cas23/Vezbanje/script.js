// 16.
// Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let kupovina = (niz) => {
    let lista = `<ul>`;
    niz.forEach((e) => {
        lista += `<li>${e}</li>`;
    });
    lista += `</ul>`;
    return lista;
}
let korpa = ['jaja', 'brasno', 'meso'];

document.body.innerHTML += kupovina(korpa);




// 17.
// Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.



let ispisTabele = (niz) => {
    let tabela = `<table>`;
    niz.forEach((e) => {
        tabela += `<tr><td>${e}</td></tr>`;
    });
    tabela += `</table>`;
    return tabela;
}
let timovi = ['LA', 'Denver', 'Boston'];
document.body.innerHTML += ispisTabele(timovi);



// 18.
// Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

let ispisSlike = (niz) => {
    niz.forEach((e) => {
        document.body.innerHTML += `<img src="${e}" >`;
    });
}
let slike = [`img/1.jpg`, `img/2.jpg`, `img/3.jpg`];

ispisSlike(slike);


// 19.
// Ispisati dužinu svakog elementa u nizu stringova. 

let duzinaStr = (niz) => {
    niz.forEach((e) => {
        console.log(e.length);
    });
}
let zadatak19 = ['123', '1234', '12345', '12345678', '123456', '123456789'];

duzinaStr(zadatak19);


// 20.
// Odrediti element u nizu stringova sa najvećom dužinom.

let najduzi = (niz) => {
    let max = niz[0];
    let najduzi = niz[0].length
    niz.forEach((e) => {
        if (e.length > najduzi) {
            max = e;
            najduzi = e.length;
        }
    });
    return max;
}

let zadatak20 = ['123', '1234', '12345', '12345678910', '123456', '123456789'];
console.log(najduzi(zadatak20));

// 21.
// Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let broj_elemenata_veci_od_arsr = () => {

}





let zadatak21 = ['123', '1234', '12345', '12345678910', '123456', '123456789'];






