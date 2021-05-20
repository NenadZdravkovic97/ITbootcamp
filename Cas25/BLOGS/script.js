let blog = {
    title: "Funkcije",
    likes: 21,
    dislikes: 1
};
// Ovako necemo da praktikujemo Nizove Objekta
let blogs = [
    {title: "Nizovi", likes: 16, dislikes: 5},
    {title: "Grananje", likes: 14, dislikes: 0}
];

console.log(blogs);


//////////////////////////////////////////////////

let blog1 = {
    title: "Musaka od tikvica",
    likes: 105,
    dislikes: 31
};

let blog2 = {
    title: "Lazanja!",
    likes: 236,
    dislikes: 13
};

let blog3 = {
    title: "Zapecena boranija!",
    likes: 60,
    dislikes: 32
};

let blogsArr = [blog1, blog2, blog3];


// Ispis objekata iz niza objekata
blogsArr.forEach(element => {
    console.log(element);
});


// Ispis naslova iz niza blogova forEach petljom
blogsArr.forEach(element => {
    console.log(element.title);
});

// Ispius naslova iz niza blogova for petljom
for (let i = 0; i < blogsArr.length; i++) {
    console.log(blogsArr[i].title);
}

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumaLajkova = (nizObj) => { // jer prosledjujemo jedan parametar ne trebaju nam ()
    let ukupnoLajkova = 0;

    nizObj.forEach(element => {
        ukupnoLajkova += element.likes
    });

    return ukupnoLajkova;
}

console.log(sumaLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosekLajkova = (nizObj) => {
    let sum = sumaLajkova(nizObj);
    let br = nizObj.length;
    return sum / br;
}

console.log(prosekLajkova(blogsArr));

// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

// let nasloviPoz = (nizObj) => {
//     let razlika = 0;
//     nizObj.forEach(element => {
//         let likes = element.likes;
//         let dislikes = element.dislikes;
//         razlika = likes - dislikes;
//         if (razlika > 0) {
//             console.log(element.title);
//         }
//     });
// }
// nasloviPoz(blogsArr);
let viseLajkova = (niz) => {
    let lista =`<ul>`;
    niz.forEach(element => {
        if (element.likes > element.dislikes) {
            lista += `<li> ${element.title} </li>`;
            console.log(element.title);
        }
    });
    lista += `</ul>`;
    document.body.innerHTML += lista;
}
viseLajkova(blogsArr);


// Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

// let duploVisePoz = (nizObj) => {
//     nizObj.forEach(element => {
//         let brLikes = element.likes;
//         let brDislikes = element.dislikes;
//         if (brLikes/2 >= brDislikes) {
//             console.log(element.title);
//         }
//     });
// }
// duploVisePoz(blogsArr);

let duploViseLajkova = (niz) => {
    niz.forEach(element => {
        if (element.dislikes * 2 <= element.likes) {
            console.log(element.title);
        }
    });
}

duploViseLajkova(blogsArr);


// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let rec = "Hello!";
let poslednjiKarakter = rec[rec.length-1]; // gadjamo poslednji indeks
console.log(poslednjiKarakter);

let poslednjiKarakter1 = rec.slice(-1); // odseca deo stringa
console.log(poslednjiKarakter1);

let poslednjiKarakter2 = rec.charAt(rec.length - 1); // vraca karakter na odredjenom indeksu
console.log(poslednjiKarakter2);

let poslednjiKarakter3 = rec.endsWith("!"); // vraca true ukoliko se string zavrsava sa ! u suprotnom vraca false
console.log(poslednjiKarakter3); 

// Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnik = (niz) => {
    niz.forEach(element => {
        let naslov = element.title;
        //1.  nacin
        // if (naslov[naslov.length - 1] == "!") {
        //     console.log(naslov);
        // }

        // 2. nacin 
        if (naslov.endsWith("!")) {
            console.log(naslov);
        }
    });
}

uzvicnik(blogsArr);
