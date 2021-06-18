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
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();

        return `${d}.${m}.${y}`;
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
    }
}


