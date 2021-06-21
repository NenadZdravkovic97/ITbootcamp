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
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        let h = date.getHours();
        let min = date.getMinutes();
        if (d <= 9) {
            d = "0" + d;
        }

        if (m <= 9) {
            m = "0" + m;
        }

        if (h <= 9) {
            h = "0" + h;
        }

        if (min <= 9) {
            min = "0" + min;
        }

        if (currDay == d) {
            return `${h}:${min}`;
        } else {
            return `${d}.${m}.${y} - ${h}:${min}`;
        }

    }

    templateLI(data) {
        let dateFromDB = data.created_at.toDate();

        let htmlLi = 
        `
        <li>
            <div class="message">
                <span class="primary-color">${data.username} : </span>
                <span class="text-color">${data.message}</span>
                <div class="date-color">${this.formatDate(dateFromDB)}</div>
            </div>
        </li>`;
        
        this.list.innerHTML += htmlLi;
        this.list.scrollTop = this.list.scrollHeight;
    }


    clear() {
        this.list.innerHTML = '';
    }
}


