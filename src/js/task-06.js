const textInput = document.querySelector("#validation-input");
const inputDataLength = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", validationInput);

function validationInput(e) {
  if (e.currentTarget.value.length === inputDataLength) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
}
