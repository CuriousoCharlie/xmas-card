const seal = document.querySelector(".seal");
const folds = document.querySelectorAll(".envelope-fold");
const audio = new Audio("/assets/audio/Kentucky_fletcher.mp3");


const viewLetter = () => {
    window.location.href = "../letter.html";
};

const playAud = () => {
    audio.play();
};

const addShadow = () => {
    seal.classList.add("shadow");
    folds.forEach(el => {
        el.classList.add("fold-shadow");
    });
};

seal.addEventListener("click", e => { 
    e.preventDefault();
    addShadow();
    setTimeout(viewLetter, 1500);
});