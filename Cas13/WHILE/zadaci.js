// 1.
// Ispisati brojeve od 1 do 20:
// a. Svaki u istom redu
// b. Svaki u novom redu

// a
let i = 1;
while (i <= 20) {
    console.log(i);
    i++;
}

// b
let k = "";
i = 1;
while (i <= 20) {
    // k = k + i + " ";
    k += (i + " ");
    // k += i + " ";
    i++
}
console.log(k);


// 2.
// Ispisati brojeve od 20 do 1.

i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

console.log("drugi nacin");

i = 1;
while (i <= 20) {
    console.log(21 - i);
    i++;
}




// 3.
// Ispisati parne brojeve od 1 do 20.
console.log("parni brojevi od 1 do 20");
// Prvi nacin 
i = 1;
while (i <= 20) {
    if ( i % 2 == 0){
        console.log(i);
    } 
    i++;
}

// Drugi nacin
console.log("Drugi nacin");
i = 1;
while (i <= 10) {
    console.log(2 * i);
    i++;
}

// Treci nacin
console.log("Treci nacin");
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
    // i = i + 2;
}

// 4. 
// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje


// i = 1;
// while (i <= 3) {
//     let div = document.createElement("div");
//     div.innerHTML += `<p>Lorem</p>`
//     div.innerHTML += `<p>Lorem</p>`
//     div.innerHTML += `<p>Lorem</p>`
//     document.body.appendChild(div);
//     i++
// }

let i = 0;
let n = 9;

while (i < n) {
    if( i % 3 == 0) {
        document.write(`<p style="color: grey;">Paragraf</p>`);
    }

    if( i % 3 == 1) {
        document.write(`<p style="color: red;">Paragraf</p>`);
    }

    if( i % 3 == 2) {
        document.write(`<p style="color: orange;">Paragraf</p>`);
    }
    i++;
}


// 5.
// Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira

let slika = "female.png";

i = 1;
while ( i <= 10) {
    document.body.innerHTML +=`<img src="${slika}">`;
    i++;
}
