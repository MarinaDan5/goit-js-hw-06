const input = document.querySelector("#font-size-control");
const textField = document.querySelector("#text");

input.addEventListener("input", changeFontSize);

function changeFontSize(e) {
  textField.style.fontSize = e.currentTarget.value + "px";
}
