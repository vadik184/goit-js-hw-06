const refs = {
  inputText: document.querySelector("#name-input"),
  spanText: document.querySelector("#name-output"),
};
refs.inputText.addEventListener("input", () => {
  if (refs.inputText === true || refs.inputText !== "") {
    refs.spanText.textContent = event.currentTarget.value;
  } else {
    refs.spanText.textContent = "Anonymous";
  }
});
console.log(refs.spanText.textContent);
