const addCardBtn = document.getElementById("addCardBtn");
const addModal = document.getElementById("addModal"),
mainArea = document.getElementById("mainArea"),
modalSubmit = document.getElementById("modalSubmit"),
closeModalBtn = document.getElementById("closeModalBtn"),
cardContent = document.getElementById("cardContent"),
inputQ = document.getElementById("inputQ"),
inputA = document.getElementById("inputA"),
card = document.getElementById("card"),
addForm = document.getElementById("addForm"),
riorContent = document.getElementById("riorContent")

function showModal(){
    
    addModal.style.animation = "showWindow 0.5s forwards";
    mainArea.style.animation = "hideWindow 0.5s forwards"
    closeModalBtn.addEventListener("click", closeModal);
    addForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(e){
    e.preventDefault();
    cardContent.innerHTML = inputA.value;
    riorContent.innerHTML = inputQ.value
    closeModal()
}

function closeModal(){
    addModal.style.animation = "hideWindow 0.5s forwards";
    mainArea.style.animation = "showWindow 0.5s forwards"
}

function rotateCard(){
    card.style.animation = "rotateCard 0.5s forwards";
    cardContent.style.display = "none"
    riorContent.style.display = "block"
    card.addEventListener("click", revertCard);
}

function revertCard(){
    card.style.animation = "rotateCard2 0.5s forwards";
    riorContent.style.display = "none"
    cardContent.style.display = "block"
    card.removeEventListener("click", revertCard)
    card.addEventListener("click", rotateCard)
}

function init(){
    addCardBtn.addEventListener("click", showModal);
    card.addEventListener("click", rotateCard)
}

init();