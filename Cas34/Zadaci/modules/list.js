// U modulu list.js exportovati funkcije:
//  generateList(parent), koja formira ul listu i dodaje je na parent element,
//  generateListItem(parent, src), koja formira stavku liste čiji je sadržaj slika na zadatoj putanji, i dodaje je na parent element.

import {generateImage} from "./general.js";

let generateList = (parent) => {
    let lista = document.createElement('ul');
    parent.appendChild(lista);
}

let generateListItem = (parent, src) => {
    let li = document.createElement('li');
    let img = generateImage(src);
    li.appendChild(img);
    parent.appendChild(li);
}


export {generateList, generateListItem}


