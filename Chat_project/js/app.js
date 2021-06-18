import {Chatroom} from "./chat.js"
import {ChatUI} from "./ui.js"
let obj1 = new Chatroom('js', 'Boja');
let obj2 = new Chatroom('tests', 'Milica');
let obj3 = new Chatroom('tests', 'Rade');

// POZIV ASINHRONE METODE addChat
// obj3.addChat("Svorc sam")
// .then(() => {
//     console.log('Cet je dodat');
// })
// .catch(err => {
//     console.log(err);
// });

// obj1.addChat("Kako ide?")
// .then(() => {
//     console.log('Cet je dodat');
// })
// .catch(err => {
//     console.log(err);
// });


// POZIV CALLBACK FUNKCIJE getChats
// obj2.getChats(data => {
//     console.log(data);
// });
// obj3.getChats(data => {
//     console.log(data);
// });

obj2.updateRoom('tests');

// obj3.getChats(data => {
//     console.log(data);
// });


/////////////////////////
// testiranje ChatUI klase
let ulChatList = document.querySelector('ul');
let list = new ChatUI(ulChatList)
console.log(list.list);


obj2.getChats(data => {
    list.templateLI(data)
});


// Slanjke poruke 
let formMsg = document.querySelector('#formMessage');
let inputMsg = document.querySelector('#inputMessage');

formMsg.addEventListener('submit', (e) => {
    e.preventDefault();
    let message = inputMsg.value;
    obj2.addChat(message)
    .then(() => {
        formMsg.reset();
    })
    .catch(err => {
        console.log(err);
    });
});


