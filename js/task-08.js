const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    const resultObj = {};

    const data = new FormData(event.target);

    for (let i = 0; i < event.target.elements.length; i++) {
        const element = event.target.elements[i];

        if (element.name && data.has(element.name)) {
            if (element.value === "") {
                alert("Fill up");
                return;
            }
            resultObj[element.name] = data.get(element.name);
        }
    }
    console.log(resultObj);
    event.target.reset();
});
