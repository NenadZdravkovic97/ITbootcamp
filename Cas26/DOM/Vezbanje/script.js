// Dohvatiti prvi paragraf na stranici.
let prviP = document.querySelector('p');
console.log(prviP);

// Dohvatiti prvi div tag sa klasom „error“.
let prviDiv = document.querySelector('.error');
console.log(prviDiv);

// Dohvatiti poslednji red u tabeli.
let poslednjiRed = document.querySelector('tr:last-child');
console.log(poslednjiRed);

// Dohvatiti sve linkove na stranici.
let sviLinkovi = document.getElementsByTagName('a');
console.log(sviLinkovi);

let sviLinkovi2 = document.querySelectorAll('a');
console.log(sviLinkovi2);


// Dohvatiti sve slike na stranici.
let sveSlike = document.querySelectorAll('img');
console.log(sveSlike);