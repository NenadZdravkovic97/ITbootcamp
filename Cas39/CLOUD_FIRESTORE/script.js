// db promenljiva koja nam sluzi za pristupanje bazi 
// Pristup kolekciji
let coll1 = db.collection('customers');

// Pristup dokumentu

let doc1 = coll1.doc('customer-01');
console.log(doc1);

let doc2 = db.doc('customers/customer-02');

// Za pristup dokumenti koristimo:
// let doc = db.collection('...').doc('...');
// KOd dokumenata imamo sledece metode
/*
CRUD (Create, Read, Update, Delete)
doc.set(...) -> Create
doc.get(...) -> Read
doc.update(...) -> Update
doc.delete(...) -> Delete

nakon poziva potrebno je lancati .then() i .catch()
*/


// 1. Create

let c3 = {
    name: "Mika",
    age: 38,
    addresses: ["Loznica", "Cacak"],
    salary: 406.23
}; // JS objekat -> na osnovu njega zelimo dokument u bazu
db.collection('customers').doc('customer-03')
.set(c3)
.then(() => {
    console.log('uspesno dodat dokument u kolekciju customers');
})
.catch((error) => {
    console.log('Greska', error);
})

let date1 = new Date("2021-06-15 11:15:00");
let date2 = new Date("2021-06-15 13:00:00");

db.collection('tasks').doc('task-02')
.set({
    title: "Voznja bicikle",
    start_date: firebase.firestore.Timestamp.fromDate(date1),
    due_date: date2,
    priority: false,
    description: "Rekreacija pred cas ITBootcamp"
}, {merge: true}) //ovde je merge nepotreban al je tu kao primer
.then(() => {
    console.log('Uspesno dodat task');
})
.catch((err) => {
    console.log('Greska' + err);
});

