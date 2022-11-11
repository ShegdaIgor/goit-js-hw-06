const refs = {
    inputRef: document.querySelector("#validation-input"),
};
refs.inputRef.addEventListener("blur", event => {
    let inputText = event.currentTarget.value;

    if (inputText.length === +refs.inputRef.dataset.length) {
        refs.inputRef.classList.remove("invalid");
        return refs.inputRef.classList.add("valid");
    }
    return refs.inputRef.classList.add("invalid");
});
