// fetch vraca promise - asocijacija na promise je then() i catch()
// Upada u catch granu samo ako je doslo do network error-a
// Sled od 4 koraka:
// 1. Fetch .json fajla
// 2. return response.json() koji je promis
// 3. Uzeti podatke iz response.json
// 4. catch error

// fetch("../JSON/todos.json").then(response => {
//     //response je obejkat, koji nosi sa sobom veliki broj atributa
//     console.log('resolved', response);
//     return response.json(); // response.json() je promis i zbog toga moramo opet da radimo then() i catch()
// }).then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("rejected", err);
// });

// ASYNC & AWAIT 
// Asinhrona funkicja se prosledjuje koa parametar i ima zagrade
// Asinhrona funkcija ispred () mora da ima async
// Kao rezultat vraca promise
let getTodos = async() => {
    // Vraca response zbog cega smo ranije koristili then i catch
    let response = await fetch("./JSON/todos.json"); 
    //Await - "cekaj" / zaustavi izvrasavanje koda u ovoj niti dokle god se ne izvrsi komanda koja je iza await
    // Await iskljucivo u async funkciji
    // console.log(response);
    // response.json() vraca promise
    // data.then() 

    // Ispitivanjes tatusa
    if (response.status != 200) {
        throw new Error("Ne mogu da dohvatim podatke");
    } else { // nastavljamo dalja ispitivanja za sve u else grani
        let data = await response.json();
    }


    // sa ovim delom krece tek kada sui izvrsene prethodne linije u potpunosti
    response = await fetch('./JSON/fruits.json');
    data = await response.json();
    return data; // vracm promise, sto znaci da cu za njega morati da radim .then i .catch
}
// Return mi vraca data i moram da odradim then i catch
getTodos()
    .then(data =>console.log('resolved', data)) // jedna linija samo
    .catch(err => console.log('rejected', err));


