const getForm = document.querySelector(".login-form");

getForm.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const data = {};

  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  data.email = email;
  data.password = password;
  console.log("data", data);
  form.reset();
}
