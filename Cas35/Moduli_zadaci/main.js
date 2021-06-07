// import generateImage from "./modules/general.js";
// import {generateList, generateItem as generateListItem} from "./modules/list.js";
// import {generateTable, generateTableRow, generateItem as generateTableItem} from './modules/table.js';


// document.body.appendChild(generateImage('img/1.jpg'));
// document.body.appendChild(generateImage('img/2.jpg'));
// document.body.appendChild(generateImage('img/3.jpg'));


// let ul = generateList(document.body);
// let li1 = generateListItem(ul, 'img/1.jpg');
// let li2 = generateListItem(ul, 'img/2.jpg');
// let li3 = generateListItem(ul, 'img/3.jpg');

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// for (let i = 1; i <= 3; i++) {
//     generateTableItem(tr, `img/${i}.jpg`)
// }

import generateImage from "./modules/general.js";
import * as List from "./modules/list.js";
import * as Table from './modules/table.js';


document.body.appendChild(generateImage('img/1.jpg'));
document.body.appendChild(generateImage('img/2.jpg'));
document.body.appendChild(generateImage('img/3.jpg'));


let ul = List.generateList(document.body);
let li1 = List.generateItem(ul, 'img/1.jpg');
let li2 = List.generateItem(ul, 'img/2.jpg');
let li3 = List.generateItem(ul, 'img/3.jpg');

let table = Table.generateTable(document.body);
let tr = Table.generateTableRow(table);
for (let i = 1; i <= 3; i++) {
    Table.generateItem(tr, `img/${i}.jpg`)
}



