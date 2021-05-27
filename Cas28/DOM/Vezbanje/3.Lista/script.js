// 1. 
// Dodati novi div tag dokumentu.
let noviDiv = document.createElement('div');
document.body.appendChild(noviDiv);


// 2. 
// Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.

let napraviListu = (niz) => {
    let lista = document.createElement('ul');
    niz.forEach(element => {
        let li = document.createElement('li');
        li.innerHTML = element;
        lista.appendChild(li);
    });
    return lista;
}

let listItems = ['prvi', 'drugi', 'treci', 'cetvrti'];

let novaLista = napraviListu(listItems);
noviDiv.appendChild(novaLista);


// 3.
// Iz ul liste izbaciti prvu stavku.

let izbaciItem = (listName, itemIndex) => {
    listName.removeChild(novaLista.childNodes[itemIndex]);
}

izbaciItem(novaLista, 0);

// 4.
// U ul listi zameniti drugu stavku liste.


let izmeniListu = (itemText, lista, index) => {
    let newItem = document.createElement('li');
    newItem.innerHTML = itemText;
    let oldItem = lista.childNodes[index];
    lista.replaceChild(newItem, oldItem);
}
izmeniListu('replace', novaLista, 1);


// 5. 
// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.

let dodajSliku = (imgPath, listToAddItem) => {
    let newImg = document.createElement('img');
    newImg.src = imgPath;
    listToAddItem.appendChild(newImg);
}

dodajSliku('img/1.jpg', novaLista);


