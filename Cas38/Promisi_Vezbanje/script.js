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

// formOrder.addEventListener('submit', click2);


/////////////////////////////////////////////////////

let clickGetItems = async() => {
    let data1 = await getItemsReturnPromise('json/stock.json');
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    data1.forEach(item => {
        if (item.stock == 0) {
            itemsNoStock.push(item.id);
        }
    });


    let data2 = await getItemsReturnPromise('json/weights.json');
    let totalWeight = 0;
    data2.forEach(item => {
        // Da li niz itemsNoStock sadrzi item.id
        if (itemsNoStock.includes(item.id)) {
            // potrebna je tezina artikla
            totalWeight += item.weight;
        }
    });
    let pMessage = document.createElement('p');
    if (totalWeight > capacity) {
        pMessage.style.fontWeight = 'bold';
        pMessage.style.fontSize = '24px';
        pMessage.textContent = "Not enough capacity in truck!!!";
    } else {
        let data3 = await getItemsReturnPromise('json/prices.json');
        let totalPrice = 0;
            data3.forEach(item => {
                if (itemsNoStock.includes(item.id)) {
                    totalPrice += item.price;
                }
            });
            pMessage.style.fontWeight = 'bold';
            pMessage.style.fontSize = '24px';
            pMessage.textContent = `Total order price: ${totalPrice}`;
    }
    return pMessage;
}

let click3 = (e) => {
    e.preventDefault();
    clickGetItems()
    .then(para => {
        divOrder.appendChild(para);
    })
    .catch(err => {
        console.log(err);
    })
}

formOrder.addEventListener('submit', click3);