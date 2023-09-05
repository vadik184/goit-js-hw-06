const inputValid = document.querySelector("#validation-input");
//console.log(inputValid.getAttribute("data-length"));
//const inputValid =
//const inputValid = document.getElementById("validation-input");
//inputred.id = "validation-input.invalid";
console.log(inputValid);
//console.log(inputred);

inputValid.addEventListener("input", () => {
  const inputText = event.currentTarget.value;
  console.log(inputText.length);
  if (inputText.length === inputValid.getAttribute("data-length")) {
    inputValid.addEventListener("blur", () => {
      inputValid.classList.add("valid");
      const validInput = document.querySelector("valid");
      validInput.style.borderColor = "#4caf50";
    });
    //     inputValid.classList("valid");
    //     document.querySelector("valid").addEventListener("focus", () => {
    //       document.querySelector("valid").style.border = "2px solid #bdbdbd";
    //     });
    //   } else {
    //     inputValid.id = "validation-input.invalid";
  }
});
