let divOrder = document.querySelector('#order');
let formOrder = document.querySelector('#order form');
let inputOrder = document.querySelector('#capacity');

// let getItems = (resource, func) => {
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function()  { // ako koristimo arrow fju moramo da radimo sa request.status a ne this.status
//         if (this.readyState == 4 && this.status == 200) {
//             let data = JSON.parse(this.responseText);
//             func(data);
//         } else if(this.readyState == 4) {
//             console.log('Could not fetch data');
//         }
//     });
//     request.open('GET', resource);
//     request.send();
// }

// Callback hell, tacna ali neprakticna
// let click1 =  (e) => {
//     e.preventDefault();
//     let capacity = inputOrder.value;

//     let itemsNoStock = [];
//     getItems('json/stock.json', data => {
//         // Logia da se dohvate obekti koji nisu na stanju
//         data.forEach(item => {
//             if (item.stock == 0) {
//                 itemsNoStock.push(item.id);
//             }
//         });
//         // console.log(itemsNoStock);
//         getItems('json/weights.json', data => {
//             // Logika za tezine artikala 
//             let totalWeight = 0;
//             data.forEach(item => {
//                 // Da li niz itemsNoStock sadrzi item.id
//                 if (itemsNoStock.includes(item.id)) {
//                     // potrebna je tezina artikla
//                     totalWeight += item.weight;
//                 }
//             });
//             if (totalWeight > capacity) {
//                 let pMessage = document.createElement('p');
//                 pMessage.style.fontWeight = 'bold';
//                 pMessage.style.fontSize = '24px';
//                 pMessage.textContent = "Not enough capacity in truck!!!";
//                 divOrder.appendChild(pMessage);
//             } else {
//                 getItems('json/prices.json', data => {
//                     // Logika za cene artikala
//                     let totalPrice = 0;
//                     data.forEach(item => {
//                         if (itemsNoStock.includes(item.id)) {
//                             totalPrice += item.price;
//                         }
//                     });
//                     let pMessage = document.createElement('p');
//                     pMessage.style.fontWeight = 'bold';
//                     pMessage.style.fontSize = '24px';
//                     pMessage.textContent = `Total order price: ${totalPrice}`;
//                     divOrder.appendChild(pMessage);
//                 });
                
//             }
//         });
//     });
// }

// Promis je objekat koji 'ceka asinhroni poziv
// Zahvaljujuci njemu, postoje then() i catch() metode
let getItemsReturnPromise = (resource) => {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function() {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            } else if(this.readyState == 4) {
                reject('Could not fetch data');
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

let click2 = (e) => {
    e.preventDefault();
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    getItemsReturnPromise('json/stock.json')
    .then((data) => {
        data.forEach(item => {
            if (item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
        return getItemsReturnPromise('json/weights.json');
    })
    .then((data) =>{
        let totalWeight = 0;
        data.forEach(item => {
            // Da li niz itemsNoStock sadrzi item.id
            if (itemsNoStock.includes(item.id)) {
                // potrebna je tezina artikla
                totalWeight += item.weight;
            }
        });
        if (totalWeight > capacity) {
            let pMessage = document.createElement('p');
            pMessage.style.fontWeight = 'bold';
            pMessage.style.fontSize = '24px';
            pMessage.textContent = "Not enough capacity in truck!!!";
            divOrder.appendChild(pMessage);
        } else {
            return getItemsReturnPromise('json/prices.json');
        }
    })
    .then((data) => {
        if (data !== undefined) {
            let totalPrice = 0;
            data.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    totalPrice += item.price;
                }
            });
            let pMessage = document.createElement('p');
            pMessage.style.fontWeight = 'bold';
            pMessage.style.fontSize = '24px';
            pMessage.textContent = `Total order price: ${totalPrice}`;
            divOrder.appendChild(pMessage);
        }
    })
    .catch((error) =>{
        console.log(error);
    });
}

formOrder.addEventListener('submit', click2);


/////////////////////////////////////////////////////

let divOrder2 = document.querySelector('#order2');
let formOrder2 = document.querySelector('#order2 form');
let inputArticleName = document.querySelector('#articleName');
let inputCena1 = document.querySelector('#cena1');
let inputCena2 = document.querySelector('#cena2');
let inputSubmit= document.querySelector('#order2Btn');

let ispisiStanje = (e) => {
    e.preventDefault();
    let inStock = [];
    getItemsReturnPromise('json/stock.json')
    .then((data) => {
        data.forEach(item => {
            if (item.stock != 0) {
                inStock.push(item);
            }
        });
        return getItemsReturnPromise('json/prices.json');
    })
    .then((data) => {
        let price1 = inputCena1.value;
        let price2 = inputCena2.value;
        inStock.forEach(item => {
            // if (item.price > price1 && item.price < price2) {
            //     console.log(item);
            // }
        })
    })
    .catch(err => {
        console.log(err);
    })
}




formOrder2.addEventListener('submit', ispisiStanje);