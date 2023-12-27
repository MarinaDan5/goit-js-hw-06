const decrementBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const incrementBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);

let value = document.getElementById("value");
console.log(value);

let counterValue = 0;

const handleClick = (event) => {
  if (event.currentTarget === decrementBtn) {
    counterValue -= 1;
    value.innerHTML = counterValue;
  } else if (event.currentTarget === incrementBtn) {
    counterValue += 1;
    value.innerHTML = counterValue;
  }
};

function onClick() {
  decrementBtn.addEventListener("click", handleClick);
  incrementBtn.addEventListener("click", handleClick);
}
onClick();
