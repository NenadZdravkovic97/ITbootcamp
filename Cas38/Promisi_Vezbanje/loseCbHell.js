let divOrder = document.querySelector('#order');
let formOrder = document.querySelector('#order form');
let inputOrder = document.querySelector('#capacity');

let getItems = (resource, func) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function()  { // ako koristimo arrow fju moramo da radimo sa request.status a ne this.status
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            func(data);
        } else if(this.readyState == 4) {
            console.log('Could not fetch data');
        }
    });
    request.open('GET', resource);
    request.send();
}

formOrder.addEventListener('submit', (e) => {
    e.preventDefault();
    let capacity = inputOrder.value;

    let itemsNoStock = [];
    getItems('json/stock.json', data => {
        // Logia da se dohvate obekti koji nisu na stanju
        data.forEach(item => {
            if (item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
        // console.log(itemsNoStock);
        getItems('json/weights.json', data => {
            // Logika za tezine artikala 
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
                getItems('json/prices.json', data => {
                    // Logika za cene artikala
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
                });
                
            }
        });
    });
});