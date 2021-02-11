
/*
const container = document.getElementsByClassName('Modal');
const html = document.querySelector('html');

const closeBtn = document.querySelectorAll('.ModalClose');

for (let i = 0; i < container.length; i++) {

    container[i].addEventListener('click', ()=>{html.classList.toggle('active');
})}

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', ()=>{html.classList.toggle('active');
})}

*/
var btn = document.getElementsByClassName("OpenModal");
var btn2 = document.getElementsByClassName("ModalClose");

btn.onclick = function() {
    document.body.style.overflow = "hidden"; // ADD THIS LINE
}

// When the user clicks on <span> (x), close the modal
btn2.onclick = function() {
    document.body.style.overflow = "auto"; // ADD THIS LINE
}
