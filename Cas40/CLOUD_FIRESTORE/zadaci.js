// 1. Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
// db.collection('customers')
// .orderBy('name', 'asc')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });

// 2. Imaju adresu u Nišu,
// db.collection('customers')
// .where('addresses', 'array-contains', 'Nis')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         // console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// 3. Imaju platu veću ili jednaku od 500,


// db.collection('customers')
// .where('salary', '>=', 500)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         // console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// 4. Imaju platu između 300 i 800,

// db.collection('customers')
// .where('salary', '>=', 300)
// .where('salary', '<=', 800)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         // console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });




// 5. Imaju platu manju od 900, i imaju 30 godina,
// Napravi indeks
// db.collection('customers')
// .where('salary', '<', 900)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         if (t.age == 30) {
//                 console.log(`Dokument #${id}`);
//                 console.log(t);
//         }
//     });
// })
// .catch(err => {
//     console.log(err);
// });

// db.collection('customers')
// .where('salary', '<', 900)
// .where('age', '==', 30)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Dokument #${id}`);
//         console.log(t);
        
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// 6. Imaju adresu u Nišu ili Beogradu,

// db.collection('customers')
// .where('addresses', 'array-contains-any', ['Beograd', 'Nis'])
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         // console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// 7. Imaju 22, 25 ili 28 godina.

// db.collection('customers')
// .where('age', 'in', [22, 25, 28])
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         // console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


////////////////////

// 1. Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.

// db.collection('tasks')
// .orderBy('title', 'asc')
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });

// 2. Su prioritetni,

// db.collection('tasks')
// .where('priority', '==', true)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// 3. Treba da se izvrše u tekućoj godini,
// let date = new Date("2021-12-31 23:59:59");
// Moze bez ovog compareD
// let compareD = firebase.firestore.Timestamp.fromDate(date);
// db.collection('tasks')
// .where('due_date', '=<', compareD)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


let sada = new Date();
let godina = sada.getFullYear();

let datum1 = new Date(godina, 0, 1); // prvi januar tekuce godine
let datum2 = new Date(godina+1, 0, 1); // prvi januar sledece godine


db.collection('tasks')
.where('due_date', '>=', datum1)
.where('due_date', '<', datum2)
.get()
.then(documents => {
    documents.forEach(doc => {
        let t = doc.data();
        let id = doc.id;
        console.log(`Dokument #${id}`);
        console.log(t);
    });
})
.catch(err => {
    console.log(err);
});



// 4. Su završeni,
// let date = new Date();
// let compareD = firebase.firestore.Timestamp.fromDate(date);
// db.collection('tasks')
// .where('due_date', '<', compareD)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });


// 5. Tek treba da počnu.

// let date = new Date();
// let compareD = firebase.firestore.Timestamp.fromDate(date);
// db.collection('tasks')
// .where('start_date', '>', compareD)
// .get()
// .then(documents => {
//     documents.forEach(doc => {
//         let t = doc.data();
//         let id = doc.id;
//         console.log(`Dokument #${id}`);
//         console.log(t);
//     });
// })
// .catch(err => {
//     console.log(err);
// });

