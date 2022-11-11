const inputWord = document.querySelector("#name-input");

const spanWord = document.querySelector("#name-output");

inputWord.addEventListener("input", event => {
    spanWord.textContent = event.target.value;
    if (!event.target.value) {
        spanWord.textContent = "Anonymous";
    }
});

console.log(spanWord);
