import {
    Chatroom
} from "./chat.js"
import {
    ChatUI
} from "./ui.js"

// DOM 
let ulChatList = document.querySelector('ul');
// Slanjke poruke 
let formMsg = document.querySelector('#formMessage');
let inputMsg = document.querySelector('#inputMessage');

// Update imena
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let para = document.querySelector("#usernameP");

// Promena soba
let navRooms = document.querySelector('#main-nav');
let allNavBtns = document.querySelectorAll('.nav-btn');




// Citamo iz lokalne memorije username, ukoliko postoji, u suprotnom default username je anonymus
let username = () => {
    if (localStorage.username) {
        return localStorage.username;
    } else {
        localStorage.setItem("username", 'anonymus');
        return localStorage.username;
    }
}

// Citamo iz lokalne memorije room, ukoliko postoji, u suprotnom default room je general
let room = () => {
    if (localStorage.room) {
        return localStorage.room;
    } else {
        return 'general';
    }
}
// Kreiramo objekat klase Chatroom
let chatroom1 = new Chatroom(room(), username());

// Kreiranje objekta klase ChatUI
let list = new ChatUI(ulChatList);

// Kada se ucitava prvi put stranica, ispisemo cetove na njoj
chatroom1.getChats(data => {
    list.templateLI(data);
});

// Dodajem aktive klasu na navigaciju
allNavBtns.forEach(elem => {
    if (elem.id == room()) {
        elem.classList.add('active');
    }
});

// Dodavanje poruke u bazu
formMsg.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = inputMsg.value;
    let trimmedMsg = message.trim();
    if (trimmedMsg.length == 0) {
        alert('Enter a valid message');
    } else {
        chatroom1.addChat(message)
            .then(() => {
                formMsg.reset();
            })
            .catch(err => {
                console.log(err);
            });
    }
});



// Update imena
formUsername.addEventListener('submit', (e) => {
    e.preventDefault();
    let username = inputUsername.value;
    chatroom1.updateUsername(username);
    formUsername.reset();
    para.innerHTML = username;
    setTimeout(() => {
        para.innerHTML = '';
        // Updatuje listu
        location.reload();
    }, 3000);
});



// Proeman sobe
navRooms.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == "BUTTON") {
        // 1. izbrisati sve poruke sa ekrana
        list.clear();
        // 2. Pozvati promenu sobe
        chatroom1.updateRoom(e.target.id);
        // 3. Prikazati cetove
        chatroom1.getChats(data => {
            list.templateLI(data);
        });

        allNavBtns.forEach(elem => {
            elem.classList.remove('active');
        });
        e.target.classList.add('active');
        // 4. Postavi u local storage da smo presli u neku drugu sobu
        localStorage.setItem("room", e.target.id);
    }
});




// Iznad forme za slanje poruke, napraviti formu za odabir boje.
// Ova forma treba da sadrži input polje (color picker) za odabir željene boje i
// dugme za promenu boje (Update color).
// Podrazumevana boja u color picker-u je bela.

// changeColor
// colorInput
let changeColorBtn = document.querySelector('#updateColorBtn');
let inputChangeColor = document.querySelector('#colorInput');

changeColorBtn.addEventListener('click', (e) => {
    e.preventDefault()
    setTimeout(() => {
        document.body.style.backgroundColor = inputChangeColor.value;
    }, 500);
    localStorage.setItem('backgroundColor', inputChangeColor.value)
});

document.body.style.backgroundColor = localStorage.backgroundColor;