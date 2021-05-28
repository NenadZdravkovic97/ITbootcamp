// Dohvatiti sve <li> elemente sa stranice.
let allLi = document.querySelectorAll('li');
allLi.forEach(li => {
    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });
});