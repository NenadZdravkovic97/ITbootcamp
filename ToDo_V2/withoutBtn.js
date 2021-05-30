const lista = document.querySelector('#lista');
const unesiObavezuInput = document.querySelector('#unesiObavezu');
const rdPocetak = document.querySelector('#pocetak');
const rdKraj = document.querySelector('#kraj');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (unesiObavezuInput.value == 0) {
        alert('Unesite obavezu')
    } else {
        
        rdPocetak.addEventListener('click', () => {
            rdPocetak.checked = true;
        });
        rdKraj.addEventListener('click', () => {
            rdKraj.checked = true;
        });
        let newLi = document.createElement('li');
            newLi.textContent = unesiObavezuInput.value;
            if (rdPocetak.checked == true) {
                lista.prepend(newLi);
            } else {
                lista.appendChild(newLi);
            }
            unesiObavezuInput.value = '';
            // dohvati sve li i postavi im event
            let allLi = document.querySelectorAll('li');
            allLi.forEach(li => {
                li.addEventListener('click', () => {
                    li.remove();
                })
            });
            if (allLi.length > 5 == true) {
                lista.style.overflow = 'scroll';
            } else {
                lista.style.overflow = 'hidden';
            }
    }
})