// ispis brojeva od 1 do 5 
let i = 1;

while ( i <= 5) {
    // console.log(i++); prvo se iskoristi vrednost promenljive, pa se vrednost poveca (1, 2, 3, 4, 5)
    // console.log(++i); prvo se iskoristi vrednost poveca, pa se vrednost koristi u izrazu (2, 3, 4, 5, 6)
    console.log(i);
    i++;
}

console.log(`Vrednost promenljive i nakon while petlje jednaka je ${i}`);