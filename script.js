const addCardBtn = document.getElementById("addCardBtn");
const addModal = document.getElementById("addModal"),
mainArea = document.getElementById("mainArea"),
modalSubmit = document.getElementById("modalSubmit"),
closeModalBtn = document.getElementById("closeModalBtn")

function showModal(){
    
    addModal.style.animation = "showWindow 0.5s forwards";
    mainArea.style.animation = "hideWindow 0.5s forwards"
    closeModalBtn.addEventListener("click", closeModal);
    modalSubmit.addEventListener("click", handleSubmit);
}

function handleSubmit(e){
    e.preventDefault()
}

function closeModal(){
    addModal.style.animation = "hideWindow 0.5s forwards";
    mainArea.style.animation = "showWindow 0.5s forwards"
}

function init(){
    addCardBtn.addEventListener("click", showModal);
}

init();