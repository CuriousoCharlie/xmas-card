const seal = document.querySelector(".seal");
const folds = document.querySelectorAll(".envelope-fold");
const audio = new Audio("https://CuriousoCharlie.github.io/xmas-card/assets/audio/Kentucky_fletcher.mp3");


const viewLetter = () => {
    window.location.href = "https://CuriousoCharlie.github.io/xmas-card/letter.html";
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
