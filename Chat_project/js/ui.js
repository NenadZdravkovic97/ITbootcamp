export class ChatUI {
    constructor(list) {
        this.list = list;
    }

    set list(list) {
        this._list = list;
    } 

    get list() {
        return this._list;
    }

    // Metode
    formatDate(date) {
        let today = new Date();
        let currDay = today.getDate();
        let currMonth = today.getMonth() + 1;
        let currYear = today.getFullYear();
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        let h = date.getHours();
        let min = date.getMinutes();
        // if (d <= 9) {
        //     d = "0" + d;
        // }

        // if (m <= 9) {
        //     m = "0" + m;
        // }

        // if (h <= 9) {
        //     h = "0" + h;
        // }

        // if (min <= 9) {
        //     min = "0" + min;
        // }

        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        h = String(h).padStart(2,"0");
        min = String(min).padStart(2, "0");

        // Ako je poruka poslata danas, prikazi samosate i minute
        if (currDay == d && currMonth == m && currYear == y) {
            return `${h}:${min}`;
        } else {
            return `${d}.${m}.${y} - ${h}:${min}`;
        }

    }

    templateLI(data) {
        let dateFromDB = data.created_at.toDate();
        // let htmlLi = 
        // `
        // <li>
        //     <div class="message">
        //         <span class="primary-color">${data.username} : </span>
        //         <span class="text-color">${data.message}</span>
        //         <div class="date-color">${this.formatDate(dateFromDB)}</div>
        //     </div>
        // </li>`;
        if (localStorage.username == data.username) {
            this.list.innerHTML +=
            `
            <li class="right">
                <div class="message-right">
                    <span class="primary-color">${data.username} : </span>
                    <span class="text-color">${data.message}</span>
                    <div class="date-color">${this.formatDate(dateFromDB)}</div>
                </div>
            </li>`;
        } else {
            this.list.innerHTML += 
            `
            <li>
                <div class="message">
                    <span class="primary-color">${data.username} : </span>
                    <span class="text-color">${data.message}</span>
                    <div class="date-color">${this.formatDate(dateFromDB)}</div>
                </div>
            </li>`;
        }
        


        
        // this.list.innerHTML += htmlLi;
        this.list.scrollTop = this.list.scrollHeight;
    }


    clear() {
        this.list.innerHTML = '';
    }
}


