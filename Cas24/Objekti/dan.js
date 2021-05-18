let dan = {
    datum: '2021/05/17',
    kisa: true,
    sunce: true,
    oblacno: true,
    // temperature: [10, 15, 17, 21, 18, 21, 13, 11, 20],
    // temperature: [-5, -12, -4, -2, -5, -6], // leden test
    // temperature: [24, 26, 23, 25, 30], // tropski test
    temperature: [21, 12, 20, 35, 21], // nepovoljan test
    // 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach(temp => {
            sum += temp;
        });
        return sum / this.temperature.length;
    },
    // 2. Metoda: Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natporsecna: function() {
        let avg = this.prosecna();
        let br = 0;
        this.temperature.forEach(element => {
            if (element > avg) {
                br++;
            }
        });
        return br;
    },
    // 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maksimalna: function() {
        let max = this.temperature[0];
        // Trazenje maksimuma for petljom
        // for (let i = 0; i < this.temperature.length; i++) {
        //     if (max < this.temperature[i]) {
        //         max = this.temperature[i];
        //     }
        // }

        // Trazenje maksimuma forEach petljom
        this.temperature.forEach(elem => {
            if (max < elem) {
                max = elem;
            }
        });
        return max;
    },
    brojMaksimalnih: function () {
        let maks = this.maksimalna();
        let brMax = 0;
        this.temperature.forEach(element => {
            if (element == maks) {
                brMax++;
            }
        });
        return brMax;
    },
    // 4.Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    izmedjuDve: function(temp1, temp2) {
        // Da temp1 uvek treba da bude manji od temp2 
        // ukoliko je temp1 > temp2 treba da zamene mensta
        if (temp1 > temp2) {
            let tmp = temp1;
            temp1 = temp2;
            temp2 = tmp;
        }

        let counter = 0;
        this.temperature.forEach(temp => {
            if (temp > temp1 && temp < temp2) {
                counter++;
            }
        });
        return counter;
    },
    // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    // iznadProseka: function () {
    //     let avg = this.prosecna();
    //     let iznad = 0;
    //     let ispod = 0;
    //     this.temperature.forEach(temp => {
    //         if (temp > avg) {
    //             iznad++;
    //         } 
    //         if(temp < avg) {
    //             ispod++;
    //         }
    //     });
    //     if (iznad > ispod) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // },
    vecinomNatprosecna: function () {
        let iznad = this.natporsecna();
        let ispod = this.temperature.length - iznad;
        return iznad > ispod;
        // if (iznad > ispod) {
        //     return true;
        // } else {
        //     return false;
        // }
    },
    // 6.Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    // brTempIspodNule: function () {
    //     let counter = 0;
    //         this.temperature.forEach(temp => {
    //             if(temp < 0) {
    //                 counter++;
    //             }
    //         });
    //         return counter;
    // },
    // leden: function () {
    //     let brojTemp = this.brTempIspodNule();
    //     return brojTemp == this.temperature.length;
    //     // if (brojTemp == this.temperature.length) {
    //     //     return true;
    //     // } else {
    //     //     return false;
    //     // }
    // }
    ledenDan: function () {
        // 1. Nacin 
        // let leden = true;
        // this.temperature.forEach(element => {
        //     if (element >= 0) {
        //         leden = false;
        //     } // ovde ne sme else leden = true jer ako imamo jednu vrednsot > 0 onda ce da vrati da je dan ipak leden
        // });
        // return leden;

        // 2. Nacin 
        // for (let i = 0; i < this.temperature.length; i++) {
        //     if (this.temperature[i] > 0) {
        //         return false; // cim naidje na return nema potrebe za break;
        //     }
        // }
        // return true;

        // // 3. Nacin 
        let leden = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] > 0) {
                leden = false;
                break;
            }
        }
        return leden;
    },
    // 7.Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropski: function () {
        let tropski = true;
        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] <= 24) {
                tropski = false;
                break;
            }
        }
        return tropski;
    },
    // 8.Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    nepovoljan: function () {
        let nepovoljan = false;
        let razlika = 0;
        for (let i = 0; i < this.temperature.length - 1; i++) { // jer ce da ode van niza
            // mogu i math abs da dodam da bih izbrisao drugi uslov u if-u
            razlika = this.temperature[i] - this.temperature[i+1];
            if (razlika > 8 || razlika < -8) {
                nepovoljan = true;
                break;
            }
        }
        // console.log(razlika);
        return nepovoljan;
    }
    
};



console.log(dan.prosecna());
console.log(dan.natporsecna());
console.log(dan.brojMaksimalnih());
console.log(dan.izmedjuDve(10, 18));
console.log(dan.izmedjuDve(18, 10));
console.log(dan.vecinomNatprosecna());
console.log(dan.ledenDan());
console.log(dan.tropski());
console.log(dan.nepovoljan());

