function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnForChanging = document.querySelector(".change-color");

btnForChanging.addEventListener("click", () => {
  const bodyColor = document.querySelector("body");
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
});
