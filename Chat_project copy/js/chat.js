export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    // Seteri
    set room(room) {
        this._room = room;
    }
    set username(username) {
        if (username.length < 2 || username.length > 10 || !username.replace(/\s/g, '').length) {
            alert('invalid username');
        } else {
            this._username = username;
        }
    }

    // Geteri
    get room() {
        return this._room
    }
    get username() {
        return this._username
    }

    // Metode

    async addChat(message) {
        let date = new Date();

        let chat = {
            message: message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(date)
        }

        let response = await this.chats.add(chat);
        return response;
    }



    // callback
    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room)
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type == 'added') {
                        // console.log('Promena u bazi');
                        // console.log(change.doc.data()); // ispis dokumenata koji su dodati u bazu
                        callback(change.doc.data());
                    }
                });
            });
    }


    updateUsername(newUsername) {
        this.username = newUsername;
        localStorage.setItem("username", newUsername);
        // POSTAVLLJANJE VREDNOSTI U LOKALNOJ MEMORIJI
        // localStorage.setItem("Koje ime dajemo promenljivoj u lokalnoj memoriji", vrednost koju dodeljujemo);
        // UZIMANJE VREDNOSTI IZ LOKALNE MEMORIJE
        // localStorage.username
    }

    updateRoom(newRoom) {
        this.room = newRoom;
        if (this.unsub) {
            this.unsub();
        }
    }
}