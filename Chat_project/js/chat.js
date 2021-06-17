class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
    }

    // Seteri
    set room(room) {
        this._room = room;
    }
    set username(username) {
        this._username = username;
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
        this.chats.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type == 'added') {
                    // console.log('Promena u bazi');
                    // console.log(change.doc.data()); // ispis dokumenata koji su dodati u bazu
                    callback(change.doc.data());
                }
            });
        });
    }

    
}


let obj1 = new Chatroom('general', 'Boja');
let obj2 = new Chatroom('tests', 'Milica')

// POZIV ASINHRONE METODE addChat
// obj2.addChat("Test poruka")
// .then(() => {
//     console.log('Cet je dodat');
// })
// .catch(err => {
//     console.log(err);
// });

// obj1.addChat("Zdravo na general sobu!")
// .then(() => {
//     console.log('Cet je dodat');
// })
// .catch(err => {
//     console.log(err);
// });


// POZIV CALLBACK FUNKCIJE getChats
obj2.getChats(data => {
    console.log(data);
});









