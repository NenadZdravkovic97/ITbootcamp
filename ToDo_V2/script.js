// Dohvatiti sve <li> elemente sa stranice.


const inputItem = document.querySelector('#newItem');
const addBtn = document.querySelector('#add');
// let const = document.querySelector('.items');
const lista = document.querySelector('.lista');
// let allLi = document.querySelectorAll('li');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputItem.value == 0) {
        alert('Unesite tekst');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputItem.value;
        lista.appendChild(li);
        allLi = document.querySelectorAll('li');
        inputItem.value = '';
        li.addEventListener('click', () => {
            if (confirm('Are you sure?')) {
                li.remove();
            }
        })
    }
});

