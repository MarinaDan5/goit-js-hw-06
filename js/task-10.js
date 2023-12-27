function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const mainBox = document.querySelector("#boxes");

createBtn.addEventListener("click", getNumber);
destroyBtn.addEventListener("click", deleteBoxes);

function getNumber() {
  let inputValue = document.querySelector("#controls input").value;
  createBoxes(inputValue);
}

function createBoxes(amount) {
  const basicSize = 30;
  for (let i = 0; i < amount; i++) {
    let newSize = basicSize + i * 10;
    const boxEl = document.createElement("div");
    boxEl.style.cssText = `width: ${newSize}px; height: ${newSize}px; background-color: ${getRandomHexColor()}`;
    mainBox.appendChild(boxEl);
  }
}

function deleteBoxes() {
  mainBox.remove();
}
