// 1.
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 

let pozdrav = (ime, prezime) => {
    console.log(`Zdravo ${ime} ${prezime}`);
}


// 2.
// Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

let zbir = (a, b) => {
    return a + b;
}


// 3.
// Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.


let neparan = (n) => {
    if (n % 2 != 0) {
        return true;
    } else {
        return false;
    }
}

// 4.
// Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

let maks2 = (a, b) => {
    if (a >= b) {
        return a;
    } else {
        return b;
    }
}

console.log(maks2(5, 6));


let maks4 = (a, b, c, d) => {
    let m1 = maks2(a, b);
    let m2 = maks2(c, d);
    if(m1 >= m2) {
        return m1;
    } else {
        return m2;
    }
}
console.log(maks4(5, 6, 15, 10));


// 5.
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = (path) => {
    document.body.innerHTML +=`<img src="${path}">`;
}


slika("img/1.jpg");
slika("img/2.jpg");
slika("img/3.jpg");


// 6.
// Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.


let paragraph = (color) => {
    document.body.innerHTML += ` <p style="color: ${color};">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, voluptatem?</p>`;
}


paragraph("red");
paragraph("green");


// drugi nacin



let paragraph2 = (color) => {
    let p = document.getElementById("p");
    p.style.color = color;
}

paragraph2("blue");


// 7.
// Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?


let sedmiDan = (n) => {
    let ost = n % 7;
    switch (ost) {
        case 0:
            console.log("Nedelja");
            break;
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
    
        default:
            console.log("greska");
            break;
    }
}

sedmiDan(8);

// 8.
// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.


let deljivSaTri = (n, m) => {
    let brojac = 0
    let k = "";
    for(let i = n; i <=m; i++) {
        if(i % 3 == 0) {
            k += i + " " ;
            brojac++;
        }
    }
    console.log(k);
    console.log(brojac);
}

deljivSaTri(1, 10);


// 9.
// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.


let sumiraj = (n, m) => {
    let sum = 0;
    for(let i = n; i <=m; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumiraj(1,100));



// 10.
// Napisati funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.


let proizvod = (n, m) => {
    let proizvod = 1;
    for(let i = n; i <=m; i++) {
        proizvod *= i;
    }
    return proizvod;
}

console.log(proizvod(1,5));


// 11.
// Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.


let aritmetickaSredina = (n, m) => {
    let sum = 0;
    let brojac = 0;
    for(let i = n; i <=m; i++) {
        sum += i;
        brojac ++;
    }

    let arsr = sum / brojac;
    return arsr;
}

console.log(aritmetickaSredina(1, 6));

// 12.
// Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

let aritmetickaSredinaCifra3 = (n, m) => {
    let sum = 0;
    let brojac = 0;
    for(let i = n; i <=m; i++) {
        if (i % 10 == 3) {
            sum += i;
            brojac ++;
        }
    }

    let arsr = sum / brojac;
    return arsr;
}

console.log(aritmetickaSredinaCifra3(1, 50));

// 13.
// Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

let ispisP = (num) => {
    if(num % 1 == 0) {
        document.body.innerHTML += `<p style="font-size: ${num}px;">Zadatak 13</p>`;
    }
}

ispisP(50);
ispisP(20);
    



// 14.
// Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 


let tekst5x = () => {
    for(let i = 1; i <=5; i++) {
        document.body.innerHTML += `<p style="font-size: ${i}em;">Zadatak 14</p>`;
    }
}


tekst5x();

// 15.
// Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

//n meseci trajanje, a - plata
let plata = (n, a) => {
    let ukupnoNovca = 0;
    let d = 5000;
    for (let i = 1; i <= n; i++) {
        ukupnoNovca += a;
        a = a + d;
    }
    return ukupnoNovca;
}


console.log(plata(3, 20000));
console.log(plata(4, 20000));
console.log(plata(5, 20000));


// 16.
// Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

let takmicari = (t, p, n) => {
    let cekanje = 0;
    if(t < p) {
        cekanje = 0;
    } else {
        let k = t - p;
        cekanje = n - k;
    }

    return cekanje;
}

console.log(takmicari(15, 20, 25));
console.log(takmicari(15, 10, 12));
console.log(takmicari(20, 10, 16));
console.log(takmicari(20, 12, 20));



