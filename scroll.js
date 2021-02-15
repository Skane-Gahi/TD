const container = document.getElementsByClassName("OpenModal");
const closeBtn = document.getElementsByClassName("ModalClose");

for (let i = 0; i < container.length; i++) {
    container[i].addEventListener('click', ()=>{document.body.style.overflow = "hidden";
})}

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', ()=>{document.body.style.overflow = "auto";
})}

/*
container.onclick = function() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // ADD THIS LINE
    document.body.style.height = "100%"; // ADD THIS LINE
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // ADD THIS LINE
    document.body.style.height = "auto"; // ADD THIS LINE
}
*/