// 18.
// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

let i;
let m;
let n;
//1. Nacin
let redovi = 6;
let tabela = `<table>`;
for (i=1; i <= redovi; i++) {
    if(i % 2 == 0) {
        tabela += `<tr class="obojen">`;
    } else {
        tabela += `<tr>`;
    }
    tabela += 
    `
            <td>NekiTekst</td>
            <td>Neki Tekst</td>
        </tr>
    `;
    
}

tabela += `</table>`;

document.body.innerHTML += tabela;

////////////////////////////////////////

let element = document.getElementById("naslov");
// element.innerHTML = `*****`;? ako zelemo da dodamo zvezdice samo stavimo = a ne +=
element.innerHTML += `*****`;


//drugi nacin
// 18.
// Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

let htmlTabela = document.getElementById("mojaTabela");

for(i = 1; i <= redovi; i++) {
    if(i % 2 == 0) {
        htmlTabela.innerHTML += 
        `
            <tr class="obojen">
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
    
        `;
    } else {
        htmlTabela.innerHTML += 
        `
            <tr>
                <td>Tekst</td>
                <td>Tekst</td>
            </tr>
    
        `;
    }

    
}

// 19.
// Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

let lista = `<ul>`;
let brLi = 10;

for(i = 1; i <= brLi; i++) {
    lista += 
    `   
        <li>element ${i}
    `;
    if( i % 3 == 2) {
        i++; // moze i dole da se stavi i+=1
        lista+= 
        `
            <ul>
                <li class="obojenLi">element ${i}</li>
            </ul>
        `;
    } 
    lista += `</li>`;
}

lista += `</ul>`;
document.body.innerHTML += lista;

let lista1 = `<ul>`;
for(i = 1; i <= brLi; i++) {
    
    if (i % 3 == 0) {
        lista1 +=
        `
            <ul>
                <li class="obojenLi">Element ${i}</li>
            </ul>
        `;
    } else {
        lista1 += `<li>Element ${i}</li>`
    }

}

lista1 += `</ul>`;
document.body.innerHTML += lista1;













