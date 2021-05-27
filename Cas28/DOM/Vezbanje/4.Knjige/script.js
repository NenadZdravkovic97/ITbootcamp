let book1 = {
    name: 'Prva Knjiga',
    author: 'Pera Zdera',
    path: 'img/1.jpg',
    read: true
}

let book2 = {
    name: 'Druga Knjiga',
    author: 'Mornar Popaj',
    path: 'img/2.jpg',
    read: false
}

let book3 = {
    name: 'Treca Knjiga',
    author: 'Badza',
    path: 'img/3.jpg',
    read: false
}

let bookArr = [book1, book2, book3];

// Prvi nacin

// let table = `<table>`;

// bookArr.forEach(book => {
//     table += `<tr>`;
//     table += `<td><img src="${book.path}" alt=""></td>`;
//     if (book.read == true) {
//         table += `
//             <td>
//                 <p class="procitano">${book.name} : ${book.author}</p>
//             </td>
//             `;
//     } else {
//         table += `
//             <td>
//                 <p class="nijeProcitano">${book.name} : ${book.author}</p>
//             </td>
//             `;
//     }
    
// });

// table += `</table>`;
// document.body.innerHTML += table;

// Drugi nacin

let napraviTabelu = (niz) => {
    let tabela = document.createElement('table');
    niz.forEach(element => {
        let tr = document.createElement('tr');

        let td = document.createElement('td');
        let p = document.createElement('p');

        let td2 = document.createElement('td');
        let img = document.createElement('img');
        img.src = element.path;
        p.innerHTML = `Ime Knjige: ${element.name} : Ime Autora: ${element.author}`;
        if (element.read == true) {
            // p.innerHTML = `Ime Knjige: ${element.name} : Ime Autora: ${element.author}`;
            p.classList.add('procitano');
        } else {
            p.classList.add('nijeProcitano');
        }
        tabela.appendChild(tr);
        tr.appendChild(td2)
        tr.appendChild(td)
        td2.appendChild(img);
        td.appendChild(p);
    });
    return tabela;

}

let tabela = napraviTabelu(bookArr);
document.body.appendChild(tabela);


