let ime = 'Stefan';


let ispis = (poruka) => {
    console.log(poruka);
}

let zdravo = (ime) => {
    ispis(ime);
}

// Nudim promenljivu ime i f-ju zdravo
export{ime, zdravo}