function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const getButton = document.querySelector(".change-color");
const getTextField = document.querySelector(".color");

getButton.addEventListener("click", handleChange);

function handleChange() {
  document.body.style.backgroundColor = getRandomHexColor();
  getTextField.textContent = getRandomHexColor();
}
