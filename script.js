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
riorContent = document.getElementById("riorContent"),
page = document.getElementById("page"),
preCardBtn = document.getElementById("preCardBtn"),
nextCardBtn = document.getElementById("nextCardBtn")

let frontContents = [];
let backContents = [];
let cardIndex = 0;
let currentIndex = 0;

function handlePage(){
    page.innerHTML = `${currentIndex} / ${cardIndex}`
}

function showModal(){
    addModal.style.animation = "showWindow 0.5s forwards";
    mainArea.style.animation = "hideWindow 0.5s forwards"
    closeModalBtn.addEventListener("click", closeModal);
    addForm.addEventListener("submit", handleSubmit);
}

function handleSubmit(e){
    e.preventDefault();
    frontContents.push(inputA.value);
    backContents.push(inputQ.value);
    cardIndex+=1;
    if(cardIndex === 1){
        currentIndex +=1;
        cardContent.innerHTML = frontContents[cardIndex-1];
        riorContent.innerHTML = backContents[cardIndex-1];
    }
    closeModal()
    handlePage()
    rotateCard()
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

function nextCard(){
    if(cardIndex > currentIndex){
        currentIndex +=1;
        cardContent.innerHTML = frontContents[currentIndex-1];
        riorContent.innerHTML = backContents[currentIndex-1];
        handlePage()
    }
}

function preCard(){
    if(currentIndex > 1){
        currentIndex -=1;
        cardContent.innerHTML = frontContents[currentIndex-1];
        riorContent.innerHTML = backContents[currentIndex-1];
        handlePage()
    }
}

function init(){
    addCardBtn.addEventListener("click", showModal);
    card.addEventListener("click", rotateCard);
    handlePage();
    preCardBtn.addEventListener("click", preCard);
    nextCardBtn.addEventListener("click", nextCard)
}

init();