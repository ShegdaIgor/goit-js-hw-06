function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

document.body.style.backgroundColor = getRandomHexColor();

const btnChangeColor = document.querySelector(".change-color");
const backgroundColorBody = document.querySelector("body");
const backgroundColorValue = document.querySelector(".color");

btnChangeColor.addEventListener("click", event => {
    const randomColor = getRandomHexColor();
    backgroundColorValue.textContent = randomColor;
    backgroundColorBody.style.backgroundColor = randomColor;
});
