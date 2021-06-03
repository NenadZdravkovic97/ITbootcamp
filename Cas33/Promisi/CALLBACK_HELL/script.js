let getTodos = (resource, callback) => {
    // 1. Kreiranje XML objekt - a
    let request = new XMLHttpRequest();

    // 4. Dodajemo event, mozemo i kao drugi korak i kao poslednji
    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status == 200) {
            // DONE
            // console.log(request.responseText);
            callback(request.responseText, undefined); // moze i false
        } else if(request.readyState == 4) {
            // console.log('Ne mogu da dohvatim podatke');
            callback(undefined, "Ne mogu da dohvatim podatke");
        }
    });

    // 2. Otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. Saljemo request
    request.send();
}
// getTodos('../JSON/todos.json', () => {

// })

// CALBACK HELL
getTodos('../JSON/todos.json', (data, err) => {
    if (err) { 
        console.log(err); 
    } else {
        console.log(data); 
        getTodos('../JSON/fruits.json', (data, err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
                getTodos('../JSON/vegetables.json', (data, err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                        getTodos('../JSON/cereals.json', (data, err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log(data);
                            }
                        });
                    }
                });
            }
        });
    }
});


