const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let parentEl = document.querySelector("ul");

const listItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = `${ingredient}`;
  return item;
});
parentEl.append(...listItems);
