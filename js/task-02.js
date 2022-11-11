const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const dish = document.querySelector("#ingredients");

const liArr = [];

ingredients.forEach(el => {
    const list = document.createElement("li");
    list.className = "item";
    list.textContent = el;
    liArr.push(list);
});

dish.append(...liArr);
console.log(dish);
