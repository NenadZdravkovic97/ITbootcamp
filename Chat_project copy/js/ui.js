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

        d = String(d).padStart(2, "0");
        m = String(m).padStart(2, "0");
        h = String(h).padStart(2, "0");
        min = String(min).padStart(2, "0");

        // Ako je poruka poslata danas, prikazi samosate i minute
        if (currDay == d && currMonth == m && currYear == y) {
            return `${h}:${min}`;
        } else {
            return `${d}.${m}.${y} - ${h}:${min}`;
        }

    }

    // Dodavanje poruke
    templateLI(data) {
        let dateFromDB = data.created_at.toDate();

        // if (localStorage.username == data.username) {
        //     this.list.innerHTML +=
        //         `
        //     <li class="right">
        //         <div class="message-right">
        //             <span class="primary-color">${data.username} : </span>
        //             <span class="text-color">${data.message}</span>
        //             <div class="date-color">${this.formatDate(dateFromDB)}</div>
        //             <span><i id="myDel" class="fas fa-trash-alt"></i></span>
        //         </div>
        //     </li>`;
        // } else {
        //     this.list.innerHTML +=
        //         `
        //     <li>
        //         <div class="message">
        //             <span class="primary-color">${data.username} : </span>
        //             <span class="text-color">${data.message}</span>
        //             <div class="date-color">${this.formatDate(dateFromDB)}</div>
        //             <span><i class="fas fa-trash-alt"></i></span>
        //         </div>
        //     </li>`;
        // }
        let li = document.createElement('li');
        let divMsg = document.createElement('div');
        let spanUsername = document.createElement('span');
        spanUsername.classList.add('primary-color');
        let spanMessage = document.createElement('span');
        spanMessage.classList.add('text-color');
        let divDate = document.createElement('div');
        divDate.classList.add('date-color')
        let spanDelete = document.createElement('span');
        let iDel = document.createElement('i');
        iDel.classList.add('fas')
        iDel.classList.add('fa-trash-alt');
        spanDelete.appendChild(iDel);

        if (localStorage.username == data.username) {
            li.classList.add('right')
            divMsg.classList.add('message-right')
        } else {
            divMsg.classList.add('message')
        }

        spanUsername.innerHTML = ` ${data.username}:`;
        spanMessage.innerHTML = ` ${data.message}`;
        divDate.innerHTML = this.formatDate(dateFromDB);
        this.list.appendChild(li);
        li.appendChild(divMsg);
        divMsg.appendChild(spanUsername)
        divMsg.appendChild(spanMessage)
        divMsg.appendChild(divDate)
        divMsg.appendChild(spanDelete)
        this.list.scrollTop = this.list.scrollHeight;

        // Brisanje iz baze 
        iDel.addEventListener("click", (e) => {
            e.preventDefault();
            let msg = e.target.parentElement.parentElement

            if (msg.classList == "message-right") {
                if (confirm("do you really want to delete the message?")) {
                    msg.style.display = "none";
                    db.collection("chats")
                        .where("username", "==", data.username)
                        .where("message", "==", data.message)
                        .where("created_at", "==", data.created_at)
                        .get()
                        .then(querrySnapshot => {
                            querrySnapshot.forEach(data => {
                                db.collection("chats").doc(`${data.id}`).delete()
                            })
                        })
                        .catch(err => console.log(err))
                }
            } else {
                msg.style.display = "none";
            }

        })
    }

    getIcon() {
        return this.list;
    }


    clear() {
        this.list.innerHTML = '';
    }
}