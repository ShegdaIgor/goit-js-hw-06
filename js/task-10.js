const inputNumber = document.querySelector("#controls>input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const newAddDiv = document.querySelector("#boxes");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const arrayCollectionElement = [];
let sizeDiv = 30;
let marginDiv = 10;

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const div = document.createElement("div");
        div.style.width = `${sizeDiv}px`;
        div.style.height = `${sizeDiv}px`;
        div.style.marginBottom = `${marginDiv}px`;
        sizeDiv += 10;
        div.style.backgroundColor = getRandomHexColor();
        arrayCollectionElement.push(div);
    }
    return arrayCollectionElement;
}

function destroyBoxes() {
    newAddDiv.innerHTML = "";
}

btnCreateEl.addEventListener("click", () => {
    let divToAdd = createBoxes(inputNumber.value);
    newAddDiv.append(...divToAdd);
});

console.log(inputNumber.value);

btnDestroyEl.addEventListener("click", () => {
    document.location.reload();
});
