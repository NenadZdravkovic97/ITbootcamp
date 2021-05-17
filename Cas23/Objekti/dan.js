let dan = {
    datum: '2021/05/17',
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [10, 15, 17, 21, 18, 21, 11, 21],
    prosecna: function() {
        let sum = 0;
        this.temperature.forEach(temp => {
            sum += temp;
        });
        return sum/this.temperature.length;
    },
    natprosecna: function() {
        let counter = 0;
        let prosek = this.prosecna();
        this.temperature.forEach(temp => {
            if (temp > prosek) {
                counter++;
            }
        });
        return counter;
    },
    countMaxTemp: function() {
        let max = this.temperature[0];
        this.temperature.forEach(temp => {
            if (max < temp) {
                max = temp;
            }
        });
        // console.log(max);
        let counter = 0;
        this.temperature.forEach(temp => {
            if(max == temp) {
                counter++;
            }
        });
        return counter;
    }

};

// 1. Metoda: Određuje prosečnu temperaturu izmerenu tog dana.
console.log(dan.prosecna());
// 2.Prebrojava koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.natprosecna());
console.log(dan.countMaxTemp());
// 3.Prebrojava koliko merenja je bilo sa maksimalnom temperaturom.

