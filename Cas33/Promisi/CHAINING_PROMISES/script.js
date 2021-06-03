let getTodos = (resource) => {
    let request = new XMLHttpRequest();

    request.open('GET', resource);

    request.send();

    return new Promise( (resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState == 4 && request.status == 200) {
                // callback(request.responseText, undefined);
                resolve(request.responseText);
            } else if(request.readyState == 4) {
                // callback(undefined, "Ne mogu da dohvatim podatke");
                reject('Ne mogu da dohvatim podatke');
            }
        });
    });
}



getTodos('../JSON/fruits.json').then( (data) => {
    console.log('Promise fruits resolved', data);
    return getTodos('../JSON/vegetables.json');
}).then((data) => {
    console.log('Promise vegetables resolved', data);
    return getTodos('../JSON/cereals.json');
}).then((data) => {
    console.log('Promise cereals resolved', data);
}).catch((err) => {
    console.log('Promise rejected', err);
});