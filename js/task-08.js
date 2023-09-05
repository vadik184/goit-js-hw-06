const mainForm = document.querySelector(".login-form");

mainForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const finalOj = {};
  if (email === "" || password === "") {
    return alert("Будь ласка, всі поля повинні бути заповнені!");
  }
  finalOj.email = email;
  finalOj.password = password;
  console.log(finalOj);
  form.reset();
}
