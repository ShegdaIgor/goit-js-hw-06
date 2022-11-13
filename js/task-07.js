const inputControlFontSize = document.querySelector("#font-size-control");
const fontSizeText = document.querySelector("#text");

inputControlFontSize.addEventListener("input", event => {
    fontSizeText.style.fontSize = `${event.target.value}px`;
});
