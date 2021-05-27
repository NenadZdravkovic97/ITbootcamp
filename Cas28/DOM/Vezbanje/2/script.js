// 1.
// Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let paragrafi = document.querySelectorAll('p');
paragrafi.forEach((p, i) => {
    if ((i + 1) % 2 == 0) {
        p.classList.add('error');
    } else {
        p.classList.add('sucess');
    }
})

// 2.
// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
paragrafi = document.querySelectorAll('p');
paragrafi.forEach((p, i) => {
    if (i % 3 == 0) {
        p.classList.add('small');
    } else if(i % 3 == 1) {
        p.classList.add('medium');
    } else {
        p.classList.add('large');
    }
});

// paragrafi.forEach((p, i) => {
//         if (i % 3 == 0) {
//             p.style.fontSize = "15px";
//         } else if(i % 3 == 1) {
//             p.style.fontSize = "20px";
//         } else {
//             p.style.fontSize = "25px";
//         }
//     });


/* 3.
Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati. */


paragrafi.forEach(p => {
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    } else if (p.textContent.includes('sucess')) {
        p.classList.add('sucess');
    }
});







