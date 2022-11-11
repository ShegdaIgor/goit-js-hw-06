let counterValue = 0;
const counterElem = document.querySelector("#value");

const decrimEl = document.querySelector('[data-action ="decrement"]');
const incrimEl = document.querySelector('[data-action ="increment"]');
decrimEl.addEventListener(
    "click",
    () => (counterElem.textContent = --counterValue)
);

incrimEl.addEventListener(
    "click",
    () => (counterElem.textContent = ++counterValue)
);
console.log(incrimEl);
