const inputText = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputText.addEventListener("input", onInput);

function onInput(event) {
  if (inputText.value === "") {
    output.innerHTML = "Anonymos";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
