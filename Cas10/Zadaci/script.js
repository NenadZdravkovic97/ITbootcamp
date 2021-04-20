// 1. Zadatak
// Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

let s = 15;
let m = 30;

let odPonoci = s*60 + m;
console.log("Od ponoci je proslo: ", odPonoci);

let doPonoci = 24*60 - odPonoci;
console.log("Do ponoci je preostalo: ", doPonoci);

// 2. Zadatak
// Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

// let satiMinuti = odPonoci/60 + odPonoci % 60;
// console.log(satiMinuti);

let satiN = odPonoci/60;
let rsatiN = Math.floor(satiN);
let minutiN = (satiN - rsatiN) * 60;
let rminutiN = Math.floor(minutiN)
let satiMinuti = rsatiN + " i " + rminutiN
console.log("Sada je: ",satiMinuti);


let minOdPonoci = 946; /* 123/60 = 2+(ost 3) 2 sata i 3 minuta*/ 
let h = Math.floor(minOdPonoci/60); //Math.round zaokruzuje kao u matematici na najpriblizniji ceo broj, Math.floor zaokruzuje na donji ceo broj, Math.ceil zaokruzuje na gornji ceo broj
let min = minOdPonoci%60; // trazimo taj ostatak koji su minuti
console.log(h +":"+ min);

min = minOdPonoci % 60;
h = (minOdPonoci - min)/60;
console.log(h + ":" + min);



// 3. Zadatak
// Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cena = 200;
let novac = 800;
let kusur = novac - cena;
console.log("Kusur je: ",kusur);

// 4. Zadatak 
// Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.
let danas = new Date(); // Objekat koji vraca datum
let danUNedelji = danas.getDay(); /*od 0 do 6 pri cemu je 0 nedelja */


let trenutniSati = danas.getHours();
let trenutniMinuti = danas.getMinutes();
let odPonoci2 = trenutniSati*60 + trenutniMinuti;
console.log("Trenutno vreme od ponoci:" ,odPonoci2);
let doPonoci2 = 24*60 - odPonoci2;
console.log("Do ponoci je preostalo:" ,doPonoci2);

// 5. Zadatak
// Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

let datum = new Date(); // Objekat koji vraca datum
let mesec = datum.getUTCMonth() + 1;
let dan = datum.getUTCDate();
let godina = datum.getUTCFullYear();

let danasnjiDan = dan + " " + mesec + " " + godina;
console.log("Danasnji datum je:", danasnjiDan);

let DanasnjiDanObrnuto = godina + " " + mesec + " " + dan;
console.log("Danasnji datum je:",DanasnjiDanObrnuto);

// 6. Zadatak
// Konverzija valute iz evra u dinare (i obrnuto).

let evro = 5;
let dinar = 100000;
let evroUdinare = evro * 117;
console.log(evroUdinare);
let dinariUevre = dinar / 117;
console.log(dinariUevre);

// drugi nacin 

let novacEvri = 200;
let kursEvra = 117.2;
let evriUdinare2 = novacEvri * kursEvra;
console.log(evriUdinare2);


let novacDinari = 23440;
let dinariUevre2 = novacDinari / kursEvra;
console.log(dinariUevre2);

// 7. Zadatak 
// Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 




