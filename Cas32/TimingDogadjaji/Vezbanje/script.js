let btnStart = document.querySelector('#start');
let resInput = document.querySelector('#res');
let btnEnd = document.querySelector('#pause');
let result = null;
let br = 0;
// moze i ovako
// resInput.value = 0;
// pa u intervalu resInput.value++
btnStart.addEventListener('click', () => {
    if (result === null) {
        result = setInterval(() =>{
            br++;
            resInput.value = br;
        },1000);
    }
});

btnEnd.addEventListener('click', ()=> {
    clearInterval(result);
    result = null;
})