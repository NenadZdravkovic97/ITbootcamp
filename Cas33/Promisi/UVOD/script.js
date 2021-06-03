// 1. Kreiranje XML objekt - a
let request = new XMLHttpRequest();

// 2. Otvaranje kreiranog zahteva
request.open('GET', './JSON/todos.json');

// 3. Saljemo request
request.send();


// 4. Dodajemo event, mozemo i kao drugi korak i kao poslednji
request.addEventListener('readystatechange', () => {
    if (request.readyState == 4 && request.status == 200) {
        // DONE
        console.log(request.responseText);
    } else if(request.readyState == 4) {
        console.log('Ne mogu da dohvatim podatke');
    }
});


/// PRIMER CALLBACK FUNKCIJE 

// FUnkcija myFunc prima kao parametar drugu funkciju (callbackFunction)
// myFunc moze da poziva funkicju koja joj je prosledjena kao parametar i da joj prosledjuje argumente
let myFunc = (callbackFunction) => {
    let value1 = 5;
    let value2 = 6
    callbackFunction(value1, value2);
}

// Kada pozivamo funkciju myFunc ona ocekuje da joj se prosledi druga funkcija, tj mi joj prosledjujemo realizaciju callbackFunction funkcije (telo funkcije)
myFunc((val1, val2) => {
    console.log(val1 + val2);
});