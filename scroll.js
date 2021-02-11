

const container = document.getElementsByClassName('OpenModal');
const html = document.querySelector('html');

const closeBtn = document.querySelectorAll('.ModalClose');

for (let i = 0; i < container.length; i++) {

    container[i].addEventListener('click', ()=>{html.classList.toggle('active');
})}

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', ()=>{html.classList.toggle('active');
})}


