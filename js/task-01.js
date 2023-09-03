//document;
const body = document.body;
//головний список
const mainList = document.querySelector("#categories");
//головні пункти
const mainListItem = document.querySelectorAll(".item");

const animalElement = mainList.firstElementChild;
const firstItem = animalElement.lastElementChild;
const animalList = firstItem.querySelectorAll("li");

const productsElements = animalElement.nextElementSibling;
const secondItem = productsElements.lastElementChild;
const productsList = secondItem.querySelectorAll("li");

const technologiesElement = mainList.lastElementChild;
const lastItem = technologiesElement.lastElementChild;
const technologieslList = lastItem.querySelectorAll("li");

console.log(`Number of categories: ${mainListItem.length}

Category: ${animalElement.firstElementChild.textContent}
Elements: ${animalList.length}

Category: ${productsElements.firstElementChild.textContent}
Elements: ${productsList.length}

Category: ${technologiesElement.firstElementChild.textContent}
Elements: ${technologieslList.length}`);
