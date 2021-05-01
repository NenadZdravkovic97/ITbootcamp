// 1. 
// Za uneti redni broj dana ispisati koji je to dan u nedelji (1. dan je ponedeljak).
let dan = 6;

switch (dan) {
    case 1:
        console.log("Ponedeljak");
        break;
    case 2:
        console.log("Utorak");
        break;
    case 3:
        console.log("Sreda");
        break;
    case 4:
        console.log("Cetvrtak");
        break;
    case 5:
        console.log("Petak");
        break;
    case 6:
        console.log("Subota");
        break;
    case 7:
        console.log("Nedelja");
        break;

    default:
        console.log("Neka greska");
        break;
}

// 2.
// Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let ocena = 3;

switch (ocena) {
    case 1:
        console.log("nedovoljan");
        break;
    case 2:
        console.log("dovoljan");
        break;
    case 3:
        console.log("dobar");
        break;
    case 4:
        console.log("vrlodobar");
        break;
    case 5:
        console.log("odlican");
        break;

    default:
        console.log("Pao sistem");
        break;
}


// 3.
// Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

let paranBroj = 10;

switch (paranBroj) {
    case 0:
        console.log("0");
        break;
    case 2:
        console.log("2");
        break;
    case 4:
        console.log("4");
        break;
    case 6:
        console.log("6");
        break;
    case 8:
        console.log("8");
        break;

    default:
        console.log("Pogresan unos");
        break;
}



// let paranBroj = 10;

// switch (paranBroj) {
//     case 0:
//     case 2:
//     case 4:
//     case 6:
//     case 8:
//         console.log("Broj je paran i manji od 10");
//         break;

//     default:
//         console.log("Pogresan unos");
//         break;
// }


// 4.
// Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.


let broj1 = 10;
let broj2 = 5;
let karakter = 'k'; 
let res;
switch (karakter) {
    case 'm':
        res = broj1 * broj2;
        console.log(res);

        break;
    case 'd':
        res = broj1 / broj2;
        console.log(res);

        break;
    case 's':
        res = broj1 + broj2;
        console.log(res);

        break;
    case 'o':
        res = broj1 - broj2;
        console.log(res);

        break;
    default:
        console.log("Greska");
        break;
}


// 5.
// Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.
let d = new Date();
dan = d.getDay();
// 0 1 2 3 4 5 6
// 0 je nedelja
switch (dan) {
    case 0:
        console.log('Vikend je');
        break;
    case 1:
        console.log('Ponedeljak je, jos 4 dana do vikenda');
        break;
    case 2:
        console.log('Utorak je, jos 3 dana do vikenda');
        break;
    case 3:
        console.log('Sreda je, jos 2 dana do vikenda');
        break;
    case 4:
        console.log('Cetvrtak je, jos 1 dan do vikenda');
        break;
    case 5:
        console.log('Petak je, sutra konacno pocinje vikend');
        break;
    case 6:
        console.log('Vikend je');
        break;

    default:
        break;
}

// 6.
// Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.

let mesec = d.getMonth();
switch (mesec) {
    case 1:
        console.log("Januar");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Maj");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Avgust");
        break;
    case 9:
        console.log("Septembar");
        break;
    case 10:
        console.log("Oktobar");
        break;
    case 11:
        console.log("Novembar");
        break;
    case 12:
        console.log("Decembar");
        break;

    default:
        console.log("Pogresan unos");
        break;
}


// 7.
// Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara.

let mesec2 = d.getMonth();
// let mesec2 = 2; //testing
switch (mesec2) {
    case 1:
        console.log("Januar");
        break;
    case 2:
        let prestupna = d.getFullYear();
        // let prestupna = 2021; // testing
        if((prestupna % 4 == 0 && prestupna % 100 !=0) || (prestupna % 400 == 0)) {
            console.log(`Prestupna godina ${prestupna} broj dana u mesecu 29`);
        } else {
            console.log(`Nije prestupna godina ${prestupna} broj dana u mesecu 28`);
        }
        break;
    case 3:
        console.log("Mart");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("Maj");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Avgust");
        break;
    case 9:
        console.log("Septembar");
        break;
    case 10:
        console.log("Oktobar");
        break;
    case 11:
        console.log("Novembar");
        break;
    case 12:
        console.log("Decembar");
        break;

    default:
        console.log("Pogresan unos");
        break;
}



// 8.
// Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.

let color = 'green';
let p = document.getElementById("paragraf");

switch (color) {
    case 'red':
        p.className += "red";
        break;
    case 'green':
        p.className += "green";
        break;
    case 'blue':
        p.className += "blue";
        break;

    default:
        console.log('You can only add: red, green, or blue class');
        break;
}




