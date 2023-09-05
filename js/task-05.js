const refs = {
  inputText: document.querySelector("#name-input"),
  spanText: document.querySelector("#name-output"),
};
refs.inputText.addEventListener("input", () => {
  if (refs.inputText !== false) {
    refs.spanText.textContent = event.currentTarget.value;
  } else {
    return (refs.spanText.value = "Anonymous");
  }
});
console.log(refs.spanText.textContent);
